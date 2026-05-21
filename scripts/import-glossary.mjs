import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const sourceRoot = path.resolve(root, '..', '..', 'zOSv3R1-migration-planning')
const sourceGlossary = path.join(sourceRoot, 'docs', '01-concepts', 'ibm-z-glossary')
const targetGlossary = path.join(root, 'docs', 'glossary')
const referencesDir = path.join(root, 'references')
const handoffDir = path.join(root, 'handoff')

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z']

const courseContentRoots = [
  path.join(root, 'docs', 'course'),
  path.join(root, 'docs', 'videos'),
  path.join(root, 'docs', 'practice'),
  path.join(root, 'docs', 'labs'),
  path.join(root, 'docs', 'public', 'subtitles'),
  path.join(root, 'data', 'transcripts'),
]

const courseContentFiles = [
  path.join(root, 'docs', 'index.md'),
  path.join(root, 'docs', 'license-notes.md'),
  path.join(root, 'data', 'course-manifest.json'),
  path.join(root, 'data', 'lesson-notes.json'),
  path.join(root, 'data', 'practice-questions.json'),
  path.join(root, 'data', 'labs.json'),
  path.join(root, 'data', 'captured', 'course-capture.json'),
  path.join(root, 'data', 'captured', 'practice-source-extract.json'),
]

const alwaysIncludeTerms = new Set([
  'Access',
  'Address space',
  'Application programming interface (API)',
  'Asymmetric encryption',
  'Availability',
  'Batch processing',
  'Central Processing Unit (CPU)',
  'Central Processor (CP)',
  'Central Processor Complex (CPC)',
  'Channel',
  'Channel Path Identifier (CHPID)',
  'CICS',
  'Configure',
  'Console',
  'Control unit',
  'Couple Data Set (CDS)',
  'Coupling Facility (CF)',
  'CP Assist for Cryptographic Function (CPACF)',
  'Cross-System Coupling Facility (XCF)',
  'Cryptography',
  'Customer Information Control System (CICS)',
  'Cylinder',
  'DASD',
  'Decrypt',
  'Decryption',
  'Device',
  'Device number',
  'Direct Access Storage Device (DASD)',
  'Drawer',
  'Encrypt',
  'Encryption',
  'Fibre Channel Connection (FICON)',
  'FICON',
  'Frame',
  'Global Resource Serialization (GRS)',
  'Hardware',
  'Hardware Configuration Definition (HCD)',
  'Hardware Management Console (HMC)',
  'HCD',
  'HMC',
  'Hypervisor',
  'IBM Z',
  'Initial Program Load (IPL)',
  'Input/Output (I/O)',
  'Input/Output Configuration Data Set (IOCDS)',
  'Input/Output Definition File (IODF)',
  'Interactive System Productivity Facility (ISPF)',
  'I/O',
  'IOCDS',
  'IOCP (I/O Configuration Program)',
  'IPL',
  'Job Control Language (JCL)',
  'Job Entry System (JES)',
  'Kernel',
  'Kernel-based Virtual Machine (KVM)',
  'LDAP',
  'License Internal Code (LIC)',
  'Licensed Machine Code (LMC)',
  'Lightweight Directory Access Protocol (LDAP)',
  'Linux',
  'Logical Partition (LPAR)',
  'LPAR',
  'Machine code',
  'Mainframe',
  'Management console',
  'Memory',
  'Multiple Virtual Systems (MVS)',
  'NAS',
  'Network Attached Storage (NAS)',
  'Network Interface Card (NIC)',
  'Open source software',
  'Operating System (OS)',
  'Partitioned Data Set (PDS)',
  'PCHID',
  'PCIe',
  'Physical Channel Path Identifier (PCHID)',
  'Portable Operating System Interface (POSIX)',
  'Processor',
  'Processor complex',
  'Processor Resource System Manager (PR/SM)',
  'PR/SM',
  'RACF',
  'Random Access Memory (RAM)',
  'RAS',
  'Reliability, Availability, and Serviceability (RAS)',
  'Resource Access Control Facility (RACF)',
  'Resource Management Facility (RMF)',
  'SAF',
  'Sequential Data Set',
  'Server Time Protocol (STP)',
  'SMF',
  'Software',
  'Storage',
  'STP',
  'Support Element (SE)',
  'System Access Facility (SAF)',
  'System Management Facilities (SMF)',
  'Systems Network Architecture (SNA)',
  'Symmetric encryption',
  'TCP/IP',
  'Time Sharing Option (TSO)',
  'Track',
  'Transmission Control Protocol (TCP)',
  'Transmission Control Protocol/Internet Protocol (TCP/IP)',
  'TSO',
  'UNIX System Services (USS)',
  'Virtual Local Access Network (VLAN)',
  'Virtualization',
  'Virtual Machine (VM)',
  'Virtual Memory',
  'Virtual Private Network (VPN)',
  'Virtual Storage Access Method (VSAM)',
  'Virtual Telecommunications Access Method (VTAM)',
  'VSAM',
  'VTAM',
  'Volume',
  'Workload Manager (WLM)',
  'XCF',
  'z/OS',
  'z/TPF',
  'z/VM',
  'z/VSE',
])

const excludedTerms = new Set([
  'ACK',
  'Adaptive Multi-stream Prefetching (AMP)',
  'Adaptive Replacement Cache (ARC)',
  'Application Specific Integrated Circuit (ASIC)',
  'ARC',
  'ASIC',
  'Block',
  'Cluster Structure Storage System (CSS)',
  'Drive',
  'Function key (ISPF)',
  'Geographically Dispersed Parallel Sysplex (GDPS)',
  'GDPS',
  'Group',
  'Host',
  'Hypertext Transfer Protocol (HTTP)',
  'IBM (International Businesses Machine)',
  'ICON',
  'image',
  'Internet Protocol (IP)',
  'Java',
  'Kilobyte (KB)',
  'Line command (ISPF)',
  'Logical Subsystem (LSS)',
  'Logical volume',
  'LSS',
  'Member list (ISPF)',
  'Panel (ISPF)',
  'PDF',
  'Port',
  'Primary command (ISPF)',
  'Program',
  'Program Development Facility (PDF)',
  'Quality of Service (QoS)',
  'Remote Procedure Call (RPC)',
  'RPC',
  'Screen',
  'Search-For (ISPF)',
  'Server',
  'Session',
  'Staging',
  'SuperC (ISPF)',
  'System Management Facility (SMF)',
  'System Modification Program',
  'Target',
  'Transaction Processing Facility (TPF)',
])

const ignoredShortAliases = new Set([
  'AC',
  'AI',
  'AMP',
  'ARC',
  'ASIC',
  'CSS',
  'DAT',
  'EAM',
  'EAV',
  'ECC',
  'EPS',
  'ESE',
  'FC',
  'ID',
  'IML',
  'IP',
  'IT',
  'KB',
  'LCU',
  'LUN',
  'OK',
  'PC',
  'PDF',
  'PSU',
  'RPC',
  'SAID',
  'SAM',
  'SES',
  'SIM',
  'SMP',
  'SPI',
  'SSID',
  'TB',
  'TPF',
  'TSE',
  'TW',
  'US',
])

await mkdir(targetGlossary, { recursive: true })
await mkdir(referencesDir, { recursive: true })
await mkdir(handoffDir, { recursive: true })

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function normalizeText(value) {
  return value.normalize('NFKC')
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

function parseGlossaryEntries(markdown, letter) {
  const normalized = markdown.replace(/\r\n/g, '\n')
  const headings = []
  const pattern = /^##\s+(.+)$/gm
  let match
  while ((match = pattern.exec(normalized))) {
    headings.push({
      term: match[1].trim(),
      start: match.index,
    })
  }

  return headings.map((heading, index) => {
    const end = index + 1 < headings.length ? headings[index + 1].start : normalized.length
    return {
      letter,
      term: heading.term,
      markdown: normalized.slice(heading.start, end).trim(),
    }
  })
}

function termAliases(term) {
  const aliases = new Set([term])
  const withoutParentheses = term.replace(/\s*\([^)]*\)/g, '').trim()
  if (withoutParentheses) aliases.add(withoutParentheses)

  for (const match of term.matchAll(/\(([^)]{2,48})\)/g)) {
    const value = match[1].trim()
    if (/^[A-Z][A-Z0-9/.-]{1,14}$/.test(value)) aliases.add(value)
    if (/^[A-Z][A-Za-z0-9 /.-]{2,28}$/.test(value)) aliases.add(value)
  }

  return [...aliases].filter(Boolean)
}

function hasCoursePhrase(corpus, alias) {
  const normalizedAlias = normalizeText(alias)
  if (normalizedAlias.length < 3) return false
  if (ignoredShortAliases.has(normalizedAlias)) return false

  const asciiPhrase = /^[A-Za-z0-9][A-Za-z0-9./+ -]+$/.test(normalizedAlias)
  if (asciiPhrase) {
    const pattern = new RegExp(`(^|[^A-Za-z0-9])${escapeRegExp(normalizedAlias)}([^A-Za-z0-9]|$)`, 'i')
    return pattern.test(corpus.original)
  }

  return corpus.lower.includes(normalizedAlias.toLowerCase())
}

function rewriteLinks(markdown) {
  return markdown
    .replace(/\]\((\.\/)?README(\.md)?(#[^)]+)?\)/g, (_, _prefix, _ext, hash = '') => `](./${hash})`)
    .replace(/\]\((\.\/)?([a-z]\.md)(#[^)]+)?\)/g, (_, _prefix, file, hash = '') => `](./${file.replace('.md', '')}${hash})`)
}

const sourceEntries = []
for (const letter of letters) {
  const sourcePath = path.join(sourceGlossary, `${letter}.md`)
  const markdown = await readFile(sourcePath, 'utf8')
  sourceEntries.push(...parseGlossaryEntries(markdown, letter))
}

const recursiveCourseFiles = []
for (const dir of courseContentRoots) {
  recursiveCourseFiles.push(...await listFiles(dir, (file) => /\.(md|json|vtt)$/i.test(file)))
}

const readableCourseFiles = [...recursiveCourseFiles, ...courseContentFiles]
  .filter((file, index, files) => existsSync(file) && files.indexOf(file) === index)

const courseCorpusText = normalizeText((await Promise.all(
  readableCourseFiles.map((file) => readFile(file, 'utf8')),
)).join('\n'))
const corpus = {
  original: courseCorpusText,
  lower: courseCorpusText.toLowerCase(),
}

const keptEntries = []
const excludedEntries = []
const keptAliases = new Map()

for (const entry of sourceEntries) {
  if (excludedTerms.has(entry.term)) {
    excludedEntries.push({ ...entry, reason: 'manual exclusion' })
    continue
  }

  if (alwaysIncludeTerms.has(entry.term)) {
    keptEntries.push({ ...entry, reason: 'course core term' })
    for (const alias of termAliases(entry.term)) keptAliases.set(alias, entry.term)
    continue
  }

  const matchedAlias = termAliases(entry.term).find((alias) => hasCoursePhrase(corpus, alias))
  excludedEntries.push({
    ...entry,
    reason: matchedAlias
      ? `matched "${matchedAlias}" but not selected for this course glossary`
      : 'not found in course corpus',
  })
}

const crossReferenceEntries = []
for (const entry of sourceEntries) {
  if (keptEntries.some((kept) => kept.term === entry.term) || excludedTerms.has(entry.term)) continue
  if (!/^##\s+[^\n]+\n\n參見/.test(entry.markdown)) continue

  const aliases = termAliases(entry.term)
  const shouldKeep = aliases.some((alias) => keptAliases.has(alias) || alwaysIncludeTerms.has(alias))
  if (shouldKeep && !ignoredShortAliases.has(entry.term)) {
    crossReferenceEntries.push({ ...entry, reason: 'cross-reference to kept course term' })
  }
}

const finalEntries = [...keptEntries, ...crossReferenceEntries]
  .filter((entry, index, entries) => entries.findIndex((candidate) => candidate.term === entry.term) === index)
  .sort((a, b) => a.letter.localeCompare(b.letter) || a.term.localeCompare(b.term, 'en'))

const finalByLetter = new Map()
for (const entry of finalEntries) {
  if (!finalByLetter.has(entry.letter)) finalByLetter.set(entry.letter, [])
  finalByLetter.get(entry.letter).push(entry)
}

for (const oldFile of await readdir(targetGlossary)) {
  if (/^[a-z]\.md$/.test(oldFile)) await rm(path.join(targetGlossary, oldFile))
}

for (const [letter, entries] of finalByLetter) {
  const body = [
    `# IBM Z 詞彙表：${letter.toUpperCase()}`,
    '',
    '[返回詞彙表索引](./)',
    '',
    ...entries.flatMap((entry) => [rewriteLinks(entry.markdown), '']),
  ].join('\n')
  await writeFile(path.join(targetGlossary, `${letter}.md`), body, 'utf8')
}

const letterLinks = [...finalByLetter.keys()]
  .sort()
  .map((letter) => `- [${letter.toUpperCase()}](./${letter})`)
  .join('\n')

await writeFile(path.join(targetGlossary, 'index.md'), `# IBM Z 詞彙表\n\n本詞彙表整理 IBM Z 與 z/OS 課程中提及或直接相關的英文術語，並搭配繁體中文解釋。完整來源詞彙庫仍保留於本機參考資料中；正式網站僅列出本課程學習者需要查閱的項目。\n\n目前收錄 ${finalEntries.length} 個課程相關詞彙。\n\n## 依字母查閱\n\n${letterLinks}\n`, 'utf8')

const readme = await readFile(path.join(sourceGlossary, 'README.md'), 'utf8')
await writeFile(path.join(referencesDir, 'glossary-source-readme.md'), readme, 'utf8')

const terminologyGuide = path.join(sourceRoot, 'docs', '01-concepts', 'terminology-guide.md')
await copyFile(terminologyGuide, path.join(referencesDir, 'terminology-guide.md'))

await writeFile(path.join(referencesDir, 'README.md'), `# References\n\nLocal source project:\n\n\`${sourceRoot}\`\n\nImported source files:\n\n- \`docs/01-concepts/ibm-z-glossary/*.md\`\n- \`docs/01-concepts/terminology-guide.md\`\n\nThe public glossary in \`docs/glossary/\` is filtered to terms that are mentioned in or directly relevant to this Introduction to IBM z/OS course. The original PDF is intentionally not copied into this public repo by default:\n\n- \`${path.join(sourceRoot, 'IBM-Z-Glossary-of-Terms.pdf')}\`\n\n`, 'utf8')

const keptReport = finalEntries
  .map((entry) => `- ${entry.term} (${entry.reason})`)
  .join('\n')

const excludedReport = excludedEntries
  .filter((entry) => !finalEntries.some((kept) => kept.term === entry.term))
  .map((entry) => `- ${entry.term} (${entry.reason})`)
  .join('\n')

await writeFile(path.join(handoffDir, 'glossary-relevance-report.md'), `# Glossary Relevance Report\n\nGenerated by \`npm run glossary:import\`.\n\nSource glossary entries: ${sourceEntries.length}\nCourse content files scanned: ${readableCourseFiles.length}\nPublished course glossary entries: ${finalEntries.length}\nExcluded source glossary entries: ${sourceEntries.length - finalEntries.length}\n\n## Published Terms\n\n${keptReport}\n\n## Excluded Terms\n\n${excludedReport}\n`, 'utf8')

console.log(`Imported and filtered ${sourceEntries.length} source glossary entries.`)
console.log(`Published ${finalEntries.length} course-relevant glossary entries into docs/glossary.`)
console.log('Reference notes written to references/.')
console.log('Relevance report written to handoff/glossary-relevance-report.md.')
