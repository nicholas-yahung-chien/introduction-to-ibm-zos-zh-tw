import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const sourceRoot = path.resolve(root, '..', '..', 'zOSv3R1-migration-planning')
const sourceGlossary = path.join(sourceRoot, 'docs', '01-concepts', 'ibm-z-glossary')
const targetGlossary = path.join(root, 'docs', 'glossary')
const referencesDir = path.join(root, 'references')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']

await mkdir(targetGlossary, { recursive: true })
await mkdir(referencesDir, { recursive: true })

for (const letter of letters) {
  const sourcePath = path.join(sourceGlossary, `${letter}.md`)
  const targetPath = path.join(targetGlossary, `${letter}.md`)
  let markdown = await readFile(sourcePath, 'utf8')
  markdown = markdown.replace(/\]\((\.\/)?README(\.md)?(#[^)]+)?\)/g, (_, _prefix, _ext, hash = '') => `](./${hash})`)
  markdown = markdown.replace(/\]\((\.\/)?([a-z]\.md)(#[^)]+)?\)/g, (_, _prefix, file, hash = '') => `](./${file.replace('.md', '')}${hash})`)
  await writeFile(targetPath, markdown, 'utf8')
}

const readme = await readFile(path.join(sourceGlossary, 'README.md'), 'utf8')
await writeFile(path.join(referencesDir, 'glossary-source-readme.md'), readme, 'utf8')

const terminologyGuide = path.join(sourceRoot, 'docs', '01-concepts', 'terminology-guide.md')
await copyFile(terminologyGuide, path.join(referencesDir, 'terminology-guide.md'))

await writeFile(path.join(referencesDir, 'README.md'), `# References\n\nLocal source project:\n\n\`${sourceRoot}\`\n\nImported files:\n\n- \`docs/01-concepts/ibm-z-glossary/*.md\`\n- \`docs/01-concepts/terminology-guide.md\`\n\nOriginal PDF is intentionally not copied into this public repo by default:\n\n- \`${path.join(sourceRoot, 'IBM-Z-Glossary-of-Terms.pdf')}\`\n\n`, 'utf8')

console.log(`Imported ${letters.length} glossary files into docs/glossary.`)
console.log('Reference notes written to references/.')
