import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const manifest = JSON.parse(await readFile(path.join(root, 'data', 'course-manifest.json'), 'utf8'))
const subtitlesDir = path.join(root, 'docs', 'public', 'subtitles')
const outputDir = path.join(root, 'data', 'subtitle-audit')

const videos = manifest.sections.flatMap((section) =>
  section.activities
    .filter((activity) => activity.type === 'video' && activity.includeInFirstEdition)
    .map((activity) => ({
      section: section.titleZh,
      slug: activity.slug,
      title: activity.title,
      titleZh: activity.titleZh,
      entryId: activity.kaltura?.entryId
    }))
)

function parseTime(value) {
  const match = value.match(/(?:(\d+):)?(\d{2}):(\d{2})\.(\d{3})/)
  if (!match) return Number.NaN
  const [, hours = '0', minutes, seconds, millis] = match
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds) + Number(millis) / 1000
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return ''
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const wholeSeconds = Math.floor(seconds % 60)
  const millis = Math.round((seconds - Math.floor(seconds)) * 1000)
  return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(wholeSeconds).padStart(2, '0')
  ].join(':') + `.${String(millis).padStart(3, '0')}`
}

function parseVtt(text) {
  return text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n\r?\n/)
    .filter((block) => block.trim() && !block.startsWith('WEBVTT'))
    .map((block, index) => {
      const lines = block.trim().split(/\r?\n/)
      const id = lines[0]?.trim() || String(index + 1)
      const time = lines[1]?.trim() || ''
      const [startText = '', endText = ''] = time.split(/\s+-->\s+/)
      const start = parseTime(startText)
      const end = parseTime(endText)
      return {
        id,
        time,
        start,
        end,
        duration: end - start,
        text: lines.slice(2).join('\n').trim()
      }
    })
}

function visualLength(text) {
  return [...text.replace(/\s+/g, '')].length
}

function normalizedText(text) {
  return text
    .toLocaleLowerCase()
    .replace(/[\s，。！？、,.!?;；:："'“”‘’()（）-]/g, '')
}

function jaccardLike(a, b) {
  const left = new Set([...normalizedText(a)])
  const right = new Set([...normalizedText(b)])
  if (!left.size || !right.size) return 0
  let intersection = 0
  for (const char of left) if (right.has(char)) intersection += 1
  return intersection / Math.max(left.size, right.size)
}

function sentenceEndCount(text) {
  return (text.match(/[。！？.!?]/g) || []).length
}

function punctuationOnly(text) {
  const compact = text.replace(/\s+/g, '')
  return Boolean(compact) && /^[\p{P}\p{S}]+$/u.test(compact)
}

function cueUrl(slug, cue) {
  return `../docs/public/subtitles/${slug}.zh-Hant-TW.vtt#cue-${cue.id}`
}

function addIssue(issues, severity, type, video, cue, details, enCue) {
  issues.push({
    severity,
    type,
    slug: video.slug,
    entryId: video.entryId,
    titleZh: video.titleZh,
    cueId: cue?.id || '',
    time: cue?.time || '',
    start: cue?.start ?? null,
    end: cue?.end ?? null,
    en: enCue?.text || '',
    zh: cue?.text || '',
    details
  })
}

async function readVtt(file) {
  return parseVtt(await readFile(file, 'utf8'))
}

const results = []
const issues = []

for (const video of videos) {
  const enFile = path.join(subtitlesDir, `${video.slug}.en.vtt`)
  const zhFile = path.join(subtitlesDir, `${video.slug}.zh-Hant-TW.vtt`)
  const result = { ...video, enCount: 0, zhCount: 0, issueCount: 0, highCount: 0, mediumCount: 0, lowCount: 0 }

  let enCues
  let zhCues
  try {
    enCues = await readVtt(enFile)
  } catch {
    addIssue(issues, 'high', 'missing_en_file', video, null, `${video.slug}.en.vtt is missing`)
    results.push(result)
    continue
  }
  try {
    zhCues = await readVtt(zhFile)
  } catch {
    addIssue(issues, 'high', 'missing_zh_file', video, null, `${video.slug}.zh-Hant-TW.vtt is missing`)
    results.push(result)
    continue
  }

  result.enCount = enCues.length
  result.zhCount = zhCues.length

  if (enCues.length !== zhCues.length) {
    addIssue(issues, 'high', 'cue_count_mismatch', video, null, `EN has ${enCues.length} cues; ZH has ${zhCues.length} cues`)
  }

  const max = Math.max(enCues.length, zhCues.length)
  for (let index = 0; index < max; index += 1) {
    const enCue = enCues[index]
    const zhCue = zhCues[index]
    if (!enCue || !zhCue) continue

    if (enCue.id !== zhCue.id) {
      addIssue(issues, 'high', 'cue_id_mismatch', video, zhCue, `EN cue id ${enCue.id}; ZH cue id ${zhCue.id}`, enCue)
    }
    if (enCue.time !== zhCue.time) {
      addIssue(issues, 'high', 'timecode_mismatch', video, zhCue, `EN time ${enCue.time}; ZH time ${zhCue.time}`, enCue)
    }
    if (!zhCue.text) {
      addIssue(issues, 'high', 'empty_zh_cue', video, zhCue, 'Chinese cue is empty', enCue)
      continue
    }
    if (punctuationOnly(zhCue.text)) {
      addIssue(issues, 'high', 'punctuation_only_zh_cue', video, zhCue, 'Chinese cue contains only punctuation or symbols', enCue)
    }

    const zhLength = visualLength(zhCue.text)
    const enLength = visualLength(enCue.text)
    const charsPerSecond = zhCue.duration > 0 ? zhLength / zhCue.duration : 0
    if (zhLength > 34 || charsPerSecond > 11) {
      addIssue(issues, 'medium', 'long_zh_cue', video, zhCue, `ZH length ${zhLength}; ${charsPerSecond.toFixed(1)} chars/sec`, enCue)
    }
    if (enLength > 12 && zhLength <= 2) {
      addIssue(issues, 'medium', 'suspiciously_short_zh_cue', video, zhCue, `EN length ${enLength}; ZH length ${zhLength}`, enCue)
    }
    if (sentenceEndCount(zhCue.text) >= 2 && zhCue.duration < 4) {
      addIssue(issues, 'medium', 'possibly_merged_zh_cue', video, zhCue, 'Chinese cue has multiple sentence endings in a short time window', enCue)
    }

    const previous = zhCues[index - 1]
    const next = zhCues[index + 1]
    if (previous && jaccardLike(previous.text, zhCue.text) >= 0.72) {
      addIssue(issues, 'medium', 'near_duplicate_previous_zh_cue', video, zhCue, `Similar to previous cue ${previous.id}`, enCue)
    }
    if (next && jaccardLike(next.text, zhCue.text) >= 0.72) {
      addIssue(issues, 'low', 'near_duplicate_next_zh_cue', video, zhCue, `Similar to next cue ${next.id}`, enCue)
    }

    const startsWithPunctuation = /^[，。！？、,.!?;；:：]/u.test(zhCue.text)
    if (startsWithPunctuation) {
      addIssue(issues, 'medium', 'starts_with_punctuation', video, zhCue, 'Chinese cue starts with punctuation', enCue)
    }
  }

  results.push(result)
}

for (const result of results) {
  const videoIssues = issues.filter((issue) => issue.slug === result.slug)
  result.issueCount = videoIssues.length
  result.highCount = videoIssues.filter((issue) => issue.severity === 'high').length
  result.mediumCount = videoIssues.filter((issue) => issue.severity === 'medium').length
  result.lowCount = videoIssues.filter((issue) => issue.severity === 'low').length
}

const severityOrder = { high: 0, medium: 1, low: 2 }
issues.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity] || a.slug.localeCompare(b.slug) || (a.start ?? 0) - (b.start ?? 0))

function csvEscape(value) {
  const text = String(value ?? '')
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

function issueToCsv(issue) {
  return [
    issue.severity,
    issue.type,
    issue.slug,
    issue.entryId,
    issue.titleZh,
    issue.cueId,
    issue.time,
    issue.en,
    issue.zh,
    issue.details
  ].map(csvEscape).join(',')
}

function issueToMarkdown(issue) {
  const time = issue.start == null ? issue.time : `${formatTime(issue.start)}-${formatTime(issue.end)}`
  return [
    `| ${issue.severity} | ${issue.type} | ${issue.slug} | ${issue.entryId || ''} | ${issue.cueId} | ${time} | ${issue.details.replace(/\|/g, '\\|')} |`,
    issue.en ? `| | | | | | EN | ${issue.en.replace(/\|/g, '\\|')} |` : '',
    issue.zh ? `| | | | | | ZH | ${issue.zh.replace(/\|/g, '\\|')} |` : ''
  ].filter(Boolean).join('\n')
}

function makeReport() {
  const generatedAt = new Date().toISOString()
  const summaryRows = results
    .map((result) => `| ${result.slug} | ${result.entryId || ''} | ${result.enCount} | ${result.zhCount} | ${result.highCount} | ${result.mediumCount} | ${result.lowCount} |`)
    .join('\n')
  const issueRows = issues.map(issueToMarkdown).join('\n')
  const topReview = issues
    .filter((issue) => issue.severity !== 'low')
    .slice(0, 80)
    .map((issue) => `- ${issue.severity.toUpperCase()} ${issue.slug} cue ${issue.cueId} ${issue.time}: ${issue.type} - ${issue.details}`)
    .join('\n')

  return `# Subtitle Alignment Audit

Generated at: ${generatedAt}

This report checks structural alignment between English and Traditional Chinese WebVTT files. It catches deterministic issues such as mismatched cue counts, mismatched ids/timecodes, empty cues, punctuation-only cues, suspiciously short cues, likely merged cues, and near-duplicates. It does not prove semantic correctness; flagged windows should be reviewed against audio and source English cues.

## Summary

| Video | Kaltura | EN cues | ZH cues | High | Medium | Low |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
${summaryRows}

## Priority Review Queue

${topReview || 'No high or medium issues found.'}

## All Issues

| Severity | Type | Video | Kaltura | Cue | Time | Details |
| --- | --- | --- | --- | --- | --- | --- |
${issueRows || '| | | | | | | No issues found. |'}
`
}

await mkdir(outputDir, { recursive: true })
await writeFile(path.join(outputDir, 'report.json'), JSON.stringify({ generatedAt: new Date().toISOString(), results, issues }, null, 2), 'utf8')
await writeFile(path.join(outputDir, 'report.csv'), [
  'severity,type,slug,entryId,titleZh,cueId,time,en,zh,details',
  ...issues.map(issueToCsv)
].join('\n'), 'utf8')
await writeFile(path.join(outputDir, 'report.md'), makeReport(), 'utf8')

console.log(`Audited ${videos.length} videos.`)
console.log(`Found ${issues.length} issues: ${issues.filter((issue) => issue.severity === 'high').length} high, ${issues.filter((issue) => issue.severity === 'medium').length} medium, ${issues.filter((issue) => issue.severity === 'low').length} low.`)
console.log(`Wrote ${path.relative(root, path.join(outputDir, 'report.md'))}`)
