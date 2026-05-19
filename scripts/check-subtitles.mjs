import { access, readFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const manifest = JSON.parse(await readFile(path.join(root, 'data', 'course-manifest.json'), 'utf8'))
const subtitlesDir = path.join(root, 'docs', 'public', 'subtitles')
const videos = manifest.sections.flatMap((section) => section.activities.filter((activity) => activity.type === 'video' && activity.includeInFirstEdition))

const missing = []
for (const video of videos) {
  const file = path.join(subtitlesDir, `${video.slug}.zh-Hant-TW.vtt`)
  try {
    await access(file)
  } catch {
    missing.push(`${video.slug}.zh-Hant-TW.vtt`)
  }
}

if (missing.length) {
  console.log(`Missing ${missing.length} subtitle files:`)
  for (const file of missing) console.log(`- ${file}`)
  process.exitCode = 1
} else {
  console.log('All subtitle files are present.')
}

