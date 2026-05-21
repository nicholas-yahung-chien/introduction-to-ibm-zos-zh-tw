# Second Phase Practice Specification

This file defines the planned practice-question experience for a future phase. It is a repository planning record only; do not link it from the public VitePress site.

## Decision Summary

- Practice questions will be static, client-side interactive learning checks.
- All practice questions will be collected on one public page, expected path: `/practice/`.
- Questions may come from quiz banks, checkpoint activities, or short in-video/inter-video interactions, subject to authorization.
- Selecting an answer immediately reveals feedback.
- No scoring.
- No persisted answer history.
- No login, account state, certificate, badge, or LMS completion behavior.
- Each question includes an explanation and a remediation pointer to the relevant video or lesson section.

## Learner Experience

Each question should display:

- Question prompt.
- One or more answer choices.
- Immediate answer feedback after selection.
- Correct answer indicator.
- Short explanation.
- Review guidance for incorrect answers, such as "Review: Crypto Express Key Management" or "Review: Mainframe Operating Systems".
- Source reference for traceability, kept subtle and learner-facing only when useful.

The practice page should communicate by behavior, not by exam language. Avoid labels such as "final quiz", "score", "pass", "fail", "badge", or "certification".

## Interaction Rules

- A learner can answer each question in any order.
- After selecting an answer, the question shows whether the selected option is correct.
- The learner can change the selection and see updated feedback.
- The page does not calculate a total score.
- The page does not write to local storage, cookies, analytics events, or remote APIs.
- Reloading the page resets all selections.

## Recommended Data Shape

Store question data outside Vue components in `data/practice-questions.json`. Track source activities and capture status in `data/practice-sources.json`.

```json
[
  {
    "id": "checkpoint-1-001",
    "section": "大型主機環境",
    "lessonSlug": "computer-architecture",
    "lessonTitle": "電腦架構",
    "sourceType": "quiz-review",
    "sourceUrl": "https://learn.ibm.com/mod/quiz/view.php?id=96088",
    "sourceReference": "checkpoint-1",
    "prompt": "Question text goes here.",
    "choices": [
      { "id": "a", "text": "Choice A" },
      { "id": "b", "text": "Choice B" }
    ],
    "correctChoiceIds": ["a"],
    "explanation": "Explain why the answer is correct.",
    "review": {
      "label": "複習：電腦架構",
      "coursePath": "/course/mainframe-environment",
      "videoEntryId": "1_vb8qf96d",
      "hint": "Return to the section that introduces computer architecture foundations."
    }
  }
]
```

## Known Source Activities

- Checkpoint 1: `https://learn.ibm.com/mod/quiz/view.php?id=96088`
- Checkpoint 2: `https://learn.ibm.com/mod/quiz/view.php?id=101250`
- Security Addendum: `https://learn.ibm.com/mod/hvp/view.php?id=129741`
- Checkpoint 3: `https://learn.ibm.com/mod/quiz/view.php?id=101251`
- Badge quiz: `https://learn.ibm.com/mod/quiz/view.php?id=348797`

In-video or between-video short questions should be recorded with the closest source activity, source video, or course section.

The source inventory is stored in `data/practice-sources.json`. The first authorized capture normalized 54 static practice questions from Checkpoint 1, Checkpoint 2, Security Addendum, Checkpoint 3, and Badge quiz into `data/practice-questions.json`.

## Implementation Plan

1. Confirm authorization for using quiz and interaction question text in the static course site.
2. Capture source question data with `npm run practice:capture`.
3. Translate and normalize question data into `data/practice-questions.json` with `npm run practice:translate`.
4. Add a VitePress page under `docs/practice/index.md`.
5. Add a Vue component for local, non-persistent answer selection.
6. Add the practice page to navigation only after content authorization and QA are complete.
7. Run `npm run verify:release`.
8. Run `npm run practice:check` whenever practice data changes.

## QA Checklist

- Every question has at least one defined correct answer; multi-select questions use multiple `correctChoiceIds`.
- Every question has an explanation.
- Every incorrect answer path points to a concrete video, unit, or reading page.
- No score, pass/fail, badge, certificate, progress persistence, or user identity is shown.
- Reloading the page clears selections.
- The practice page works without network calls other than normal static asset loading.
