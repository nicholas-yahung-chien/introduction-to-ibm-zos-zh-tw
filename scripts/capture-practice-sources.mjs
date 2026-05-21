import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { findDebugPage, evaluateInPage } from './cdp-client.mjs'

const root = process.cwd()
const outputDir = path.join(root, 'data', 'captured')
const outputPath = path.join(outputDir, 'practice-source-extract.json')

const expression = String.raw`(async () => {
  const sourceConfigs = [
    {
      id: 'checkpoint-1',
      type: 'quiz',
      title: 'Checkpoint 1',
      sourceUrl: 'https://learn.ibm.com/mod/quiz/view.php?id=96088',
      sectionSlug: 'mainframe-environment',
      sectionTitle: '大型主機環境',
      reviewPath: '/course/mainframe-environment'
    },
    {
      id: 'checkpoint-2',
      type: 'quiz',
      title: 'Checkpoint 2',
      sourceUrl: 'https://learn.ibm.com/mod/quiz/view.php?id=101250',
      sectionSlug: 'mainframe-infrastructure',
      sectionTitle: '大型主機基礎架構',
      reviewPath: '/course/mainframe-infrastructure'
    },
    {
      id: 'checkpoint-3',
      type: 'quiz',
      title: 'Checkpoint 3',
      sourceUrl: 'https://learn.ibm.com/mod/quiz/view.php?id=101251',
      sectionSlug: 'mainframe-security',
      sectionTitle: '大型主機安全',
      reviewPath: '/course/mainframe-security'
    },
    {
      id: 'badge-quiz',
      type: 'quiz',
      title: 'Badge quiz',
      sourceUrl: 'https://learn.ibm.com/mod/quiz/view.php?id=348797',
      sectionSlug: 'course',
      sectionTitle: '課程整體',
      reviewPath: '/course/'
    },
    {
      id: 'security-addendum',
      type: 'h5p',
      title: 'Security Addendum',
      sourceUrl: 'https://learn.ibm.com/mod/hvp/view.php?id=129741',
      sectionSlug: 'mainframe-security',
      sectionTitle: '大型主機安全',
      reviewPath: '/course/mainframe-security'
    }
  ]

  const clean = (value) => (value || '').replace(/\s+/g, ' ').trim()
  const stripChoicePrefix = (value) => clean(value).replace(/^[a-z]\.\s+/i, '')

  const fetchDocument = async (url) => {
    const response = await fetch(url, { credentials: 'include' })
    const html = await response.text()
    return {
      response,
      html,
      doc: new DOMParser().parseFromString(html, 'text/html')
    }
  }

  const chooseBestReviewUrl = (doc) => {
    const rows = Array.from(doc.querySelectorAll('table tbody tr'))
    const scoredRows = rows.map((row) => {
      const review = Array.from(row.querySelectorAll('a[href*="review.php"]')).at(-1)
      const text = clean(row.innerText)
      const gradeMatch = text.match(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/)
      return review ? {
        href: review.href,
        text,
        grade: gradeMatch ? Number(gradeMatch[1]) : -1,
        max: gradeMatch ? Number(gradeMatch[2]) : -1
      } : null
    }).filter(Boolean)
    scoredRows.sort((a, b) => (b.grade - a.grade) || (b.max - a.max))
    return scoredRows[0] || null
  }

  const parseQuizReview = (config, reviewUrl, doc) => {
    const questions = Array.from(doc.querySelectorAll('.que')).map((questionNode, index) => {
      const qtext = clean(questionNode.querySelector('.qtext')?.innerText)
      const choices = Array.from(questionNode.querySelectorAll('.answer > div, .answer .r0, .answer .r1')).map((choiceNode, choiceIndex) => {
        const letter = String.fromCharCode(97 + choiceIndex)
        return {
          id: letter,
          text: stripChoicePrefix(choiceNode.innerText),
          isCorrect: /\bcorrect\b/.test(choiceNode.className)
        }
      }).filter((choice) => choice.text)
      const rightAnswer = clean(questionNode.querySelector('.rightanswer')?.innerText).replace(/^The correct answer is:\s*/i, '')
      const correctChoiceIds = choices
        .filter((choice) => choice.isCorrect || clean(choice.text) === rightAnswer)
        .map((choice) => choice.id)
      const feedback = clean(questionNode.querySelector('.outcome')?.innerText)
        .replace(/^Feedback\s*/i, '')
        .replace(/^Your answer is correct\.\s*/i, '')

      return {
        sourceId: config.id,
        sourceTitle: config.title,
        sourceType: 'quiz-review',
        sourceUrl: config.sourceUrl,
        reviewUrl,
        sectionSlug: config.sectionSlug,
        sectionTitle: config.sectionTitle,
        reviewPath: config.reviewPath,
        index: index + 1,
        prompt: qtext,
        choices: choices.map(({ id, text }) => ({ id, text })),
        correctChoiceIds,
        correctAnswerText: rightAnswer,
        feedback
      }
    })
    return questions
  }

  const parseH5PContent = async (config, viewDoc, viewHtml) => {
    const integrationMatch = viewHtml.match(/var H5PIntegration = (\{[\s\S]*?\});\s*\/\/\]\]>/)
    const integration = integrationMatch ? JSON.parse(integrationMatch[1]) : null
    const contentKey = integration?.contents ? Object.keys(integration.contents)[0] : ''
    const contentId = contentKey.replace(/^cid-/, '')
    const contentEntry = contentKey ? integration.contents[contentKey] : null
    const contentJsonUrl = contentId
      ? 'https://learn.ibm.com/pluginfile.php/' + contentId + '/mod_hvp/content/content.json'
      : ''
    let content = null
    if (contentEntry?.jsonContent) {
      content = JSON.parse(contentEntry.jsonContent)
    } else if (contentJsonUrl) {
      const contentResponse = await fetch(contentJsonUrl, { credentials: 'include' })
      content = await contentResponse.json()
    }
    if (!content) return { contentId, questions: [], warning: 'Unable to locate H5P content JSON.' }
    const questions = []
    const seenQuestionKeys = new Set()

    const collect = (node, trail = []) => {
      if (!node || typeof node !== 'object') return
      const params = node.params || node
      const library = node.library || ''
      if (params.question || params.answers || params.alternatives || params.choices) {
        const questionKey = clean(params.question || JSON.stringify(params.answers || params.alternatives || params.choices || []))
        if (!seenQuestionKeys.has(questionKey)) {
          seenQuestionKeys.add(questionKey)
          questions.push({
            sourceId: config.id,
            sourceTitle: config.title,
            sourceType: 'h5p',
            sourceUrl: config.sourceUrl,
            h5pContentUrl: contentJsonUrl,
            sectionSlug: config.sectionSlug,
            sectionTitle: config.sectionTitle,
            reviewPath: config.reviewPath,
            index: questions.length + 1,
            library,
            trail,
            raw: params
          })
        }
      }
      for (const [key, value] of Object.entries(node)) {
        if (Array.isArray(value)) value.forEach((item, index) => collect(item, [...trail, key + '[' + index + ']']))
        else if (value && typeof value === 'object') collect(value, [...trail, key])
      }
    }

    collect(content)
    return { contentId, contentJsonUrl, questions }
  }

  const results = {
    capturedAt: new Date().toISOString(),
    courseUrl: location.href,
    sources: [],
    questions: []
  }

  for (const config of sourceConfigs) {
    const { response, html, doc } = await fetchDocument(config.sourceUrl)
    if (config.type === 'quiz') {
      const bestReview = chooseBestReviewUrl(doc)
      const source = {
        ...config,
        status: bestReview ? 'captured-from-review' : 'review-not-found',
        httpStatus: response.status,
        reviewUrl: bestReview?.href || '',
        reviewSummary: bestReview?.text || ''
      }
      results.sources.push(source)
      if (bestReview?.href) {
        const review = await fetchDocument(bestReview.href)
        results.questions.push(...parseQuizReview(config, bestReview.href, review.doc))
      }
    } else if (config.type === 'h5p') {
      const h5p = await parseH5PContent(config, doc, html)
      results.sources.push({
        ...config,
        status: h5p.questions.length ? 'captured-from-h5p-json' : 'h5p-question-not-found',
        httpStatus: response.status,
        contentId: h5p.contentId,
        contentJsonUrl: h5p.contentJsonUrl || '',
        warning: h5p.warning || ''
      })
      results.questions.push(...h5p.questions)
    }
  }

  return results
})()`

await mkdir(outputDir, { recursive: true })

const page = await findDebugPage((candidate) => candidate.url.includes('learn.ibm.com/course/view.php?id=6815'))
const capture = await evaluateInPage(page, expression)

await writeFile(outputPath, JSON.stringify(capture, null, 2), 'utf8')

console.log(`Captured ${capture.questions.length} practice source question(s) from ${capture.sources.length} source(s).`)
console.log(path.relative(root, outputPath))
