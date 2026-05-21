import { readdir, readFile } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'docs', '.vitepress', 'dist')
const docsDir = path.join(root, 'docs')

const requiredPages = [
  {
    name: 'home',
    source: 'docs/index.md',
    output: 'index.html',
    requiredText: ['課程內容', '影片總覽', '互動練習', 'Lab 與互動實作', '詞彙表', '授權資訊']
  },
  { name: 'course', source: 'docs/course/index.md', output: 'course/index.html', requiredText: ['課程首頁', '互動練習', 'Lab 與互動實作'] },
  { name: 'videos', source: 'docs/videos/index.md', output: 'videos/index.html', requiredText: ['影片清單'] },
  { name: 'practice', source: 'docs/practice/index.md', output: 'practice/index.html', requiredText: ['互動練習'] },
  { name: 'labs', source: 'docs/labs/index.md', output: 'labs/index.html', requiredText: ['Lab 與互動實作', '安全補充互動活動'] },
  { name: 'glossary', source: 'docs/glossary/index.md', output: 'glossary/index.html', requiredText: ['IBM Z 詞彙表'] },
  { name: 'license', source: 'docs/license-notes.md', output: 'license-notes.html', requiredText: ['授權資訊'] },
]

const publicPlanningTerms = [
  'TODO',
  '待辦',
  '專案規劃',
  '規劃方向',
  '等待補入',
  '第一版',
  '第一版範圍',
  '內部筆記',
  'project planning',
  'second-phase',
]

const findings = []

function normalizePath(file) {
  return file.split(path.sep).join('/')
}

async function listFiles(dir, predicate, out = []) {
  if (!existsSync(dir)) return out
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await listFiles(filePath, predicate, out)
    } else if (predicate(filePath)) {
      out.push(filePath)
    }
  }
  return out
}

function assertExists(label, file) {
  if (!existsSync(file)) findings.push(`${label}: missing ${normalizePath(path.relative(root, file))}`)
}

function assertContains(label, text, requiredText) {
  for (const required of requiredText) {
    if (!text.includes(required)) findings.push(`${label}: missing expected public text "${required}"`)
  }
}

function checkInternalPlanningText(label, text) {
  for (const term of publicPlanningTerms) {
    if (text.includes(term)) findings.push(`${label}: contains internal planning term "${term}"`)
  }
}

function distCandidates(pathname) {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, '')
  if (!cleanPath) return [path.join(distDir, 'index.html')]

  const direct = path.join(distDir, cleanPath)
  const ext = path.extname(cleanPath)
  if (ext) return [direct]

  return [
    `${direct}.html`,
    path.join(direct, 'index.html'),
  ]
}

function internalTargetExists(pathname) {
  return distCandidates(pathname).some((candidate) => existsSync(candidate) && statSync(candidate).isFile())
}

function extractLinks(html) {
  const links = []
  const pattern = /\b(?:href|src)="([^"]+)"/g
  let match
  while ((match = pattern.exec(html))) {
    links.push(match[1])
  }
  return links
}

function shouldIgnoreLink(rawLink) {
  return !rawLink
    || rawLink.startsWith('#')
    || rawLink.startsWith('mailto:')
    || rawLink.startsWith('tel:')
    || rawLink.startsWith('data:')
    || rawLink.startsWith('javascript:')
}

function checkLink(file, rawLink) {
  if (shouldIgnoreLink(rawLink)) return

  if (/^https?:\/\//i.test(rawLink)) {
    try {
      new URL(rawLink)
    } catch {
      findings.push(`${normalizePath(path.relative(root, file))}: malformed external URL "${rawLink}"`)
    }
    return
  }

  let resolved
  try {
    resolved = new URL(rawLink, `https://example.invalid/${normalizePath(path.relative(distDir, path.dirname(file)))}/`)
  } catch {
    findings.push(`${normalizePath(path.relative(root, file))}: malformed link "${rawLink}"`)
    return
  }

  if (!internalTargetExists(resolved.pathname)) {
    findings.push(`${normalizePath(path.relative(root, file))}: broken internal link "${rawLink}"`)
  }
}

for (const page of requiredPages) {
  const sourceFile = path.join(root, page.source)
  const outputFile = path.join(distDir, page.output)
  assertExists(`${page.name} source`, sourceFile)
  assertExists(`${page.name} output`, outputFile)

  if (existsSync(outputFile)) {
    const html = await readFile(outputFile, 'utf8')
    assertContains(`${page.name} output`, html, page.requiredText)
    checkInternalPlanningText(`${page.name} output`, html)
  }
}

const htmlFiles = await listFiles(distDir, (file) => file.endsWith('.html'))
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  checkInternalPlanningText(normalizePath(path.relative(root, file)), html)
  for (const link of extractLinks(html)) {
    checkLink(file, link)
  }
}

const manifest = JSON.parse(await readFile(path.join(root, 'data', 'course-manifest.json'), 'utf8'))
const lessonNotes = JSON.parse(await readFile(path.join(root, 'data', 'lesson-notes.json'), 'utf8'))
const videoAssets = JSON.parse(await readFile(path.join(root, 'docs', 'public', 'manifest', 'video-assets.json'), 'utf8'))
const practiceQuestions = JSON.parse(await readFile(path.join(root, 'data', 'practice-questions.json'), 'utf8'))
const labs = JSON.parse(await readFile(path.join(root, 'data', 'labs.json'), 'utf8'))

const videos = manifest.sections
  .flatMap((section) => section.activities)
  .filter((activity) => activity.type === 'video' && activity.includeInFirstEdition !== false)
const assetBySlug = new Map(videoAssets.map((asset) => [asset.slug, asset]))

if (videos.length !== 18) findings.push(`video manifest: expected 18 first-edition videos, found ${videos.length}`)
if (videoAssets.length !== videos.length) findings.push(`video assets: expected ${videos.length} items, found ${videoAssets.length}`)

for (const video of videos) {
  const label = `video ${video.slug}`
  if (!video.title || !video.titleZh) findings.push(`${label}: missing title/titleZh`)
  if (!video.sourceUrl?.startsWith('https://learn.ibm.com/')) findings.push(`${label}: sourceUrl must point to IBM Learn`)
  if (!video.kaltura?.entryId) findings.push(`${label}: missing Kaltura entryId`)
  if (!lessonNotes[video.slug]) findings.push(`${label}: missing lesson notes`)

  const asset = assetBySlug.get(video.slug)
  if (!asset) {
    findings.push(`${label}: missing docs/public/manifest video asset record`)
  } else if (asset.entryId !== video.kaltura?.entryId) {
    findings.push(`${label}: video asset entryId ${asset.entryId} does not match manifest ${video.kaltura?.entryId}`)
  }

  for (const lang of ['en', 'zh-Hant-TW']) {
    const subtitle = path.join(docsDir, 'public', 'subtitles', `${video.slug}.${lang}.vtt`)
    assertExists(`${label} ${lang} subtitle`, subtitle)
    if (existsSync(subtitle) && statSync(subtitle).size === 0) findings.push(`${label} ${lang} subtitle: file is empty`)
  }

  const playlist = path.join(docsDir, 'public', 'hls', video.slug, 'index.m3u8')
  assertExists(`${label} local HLS playlist`, playlist)
}

if (!Array.isArray(practiceQuestions) || practiceQuestions.length !== 54) {
  findings.push(`practice questions: expected 54 questions, found ${Array.isArray(practiceQuestions) ? practiceQuestions.length : 'non-array data'}`)
}

if (!Array.isArray(labs) || labs.length === 0) {
  findings.push('labs: data/labs.json must contain at least one Lab or interactive activity')
} else {
  for (const lab of labs) {
    const label = `lab ${lab.id || '(missing id)'}`
    for (const field of ['id', 'title', 'titleZh', 'type', 'sourceUrl', 'courseUrl', 'section', 'summary', 'launchGuidance']) {
      if (!lab[field]) findings.push(`${label}: missing ${field}`)
    }
    if (lab.sourceUrl && !lab.sourceUrl.startsWith('https://learn.ibm.com/')) findings.push(`${label}: sourceUrl must point to IBM Learn`)
    if (!Array.isArray(lab.learningPurpose) || lab.learningPurpose.length === 0) findings.push(`${label}: learningPurpose must not be empty`)
    if (!Array.isArray(lab.recommendedBefore) || lab.recommendedBefore.length === 0) findings.push(`${label}: recommendedBefore must not be empty`)
  }
}

if (findings.length > 0) {
  console.error(findings.join('\n'))
  process.exit(1)
}

console.log(`Public site checks passed: ${requiredPages.length} required pages, ${htmlFiles.length} HTML files, ${videos.length} videos, ${practiceQuestions.length} practice questions, ${labs.length} lab item(s).`)
