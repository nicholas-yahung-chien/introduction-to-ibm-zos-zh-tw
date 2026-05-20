# Second Phase Labs Specification

This file defines the planned Lab handling for a future phase. It is a repository planning record only; do not link it from the public VitePress site.

## Decision Summary

- Labs are not part of the accepted first edition.
- Future Lab content should be static descriptive guidance only.
- The public site may describe what Lab exercises the IBM Learn course provides.
- The public site should point learners back to the original IBM Learn course for Lab execution.
- Do not rebuild the Lab environment in this repository.
- Do not copy interactive H5P behavior into the static site unless a separate authorization and implementation plan is approved.

## Learner Experience

The future public Lab page, expected path `/labs/`, should explain:

- Which Lab or interactive exercises are available in the original course.
- What each Lab helps learners practice.
- Which course videos or topics should be completed first.
- That the actual Lab should be launched from the original IBM Learn course.
- The original course or activity link.

The page should avoid implying that this static site hosts the Lab environment.

## Recommended Data Shape

Store Lab metadata outside page copy, likely as `data/labs.json`.

```json
[
  {
    "id": "security-addendum",
    "title": "Security Addendum",
    "sourceUrl": "https://learn.ibm.com/mod/hvp/view.php?id=129741",
    "type": "h5p",
    "status": "external-reference",
    "summary": "Static description of what the learner can practice in the original activity.",
    "recommendedBefore": [
      "z/OS 安全",
      "交易層級安全",
      "Crypto Express 金鑰管理"
    ],
    "publicGuidance": "Use the original IBM Learn course to launch this activity."
  }
]
```

## Known Lab Or Interactive Source

- Security Addendum: `https://learn.ibm.com/mod/hvp/view.php?id=129741`

Additional Lab-style activities should be added only after source-course review.

## Implementation Plan

1. Review the original IBM Learn course for Lab and H5P activities.
2. Capture only metadata needed for learner guidance: title, purpose, prerequisite lessons, source URL.
3. Create `data/labs.json`.
4. Add `docs/labs/index.md` with a static explanatory page.
5. Add a simple component only if repeated Lab metadata needs consistent rendering.
6. Add the Lab page to navigation only after content authorization and QA are complete.
7. Run `npm run verify:release`.

## Out Of Scope

- Embedded Lab runtime.
- H5P reproduction.
- Credentialed access automation.
- Learner progress tracking.
- Lab result capture.
- Screenshots or copied interactive assets unless separately authorized.

## QA Checklist

- Every listed Lab has an original IBM Learn source link.
- Every listed Lab has a clear learning purpose.
- Every listed Lab has prerequisite course topics.
- Page copy clearly says the Lab is completed in the original IBM Learn course.
- No Lab instructions require credentials or environment details not available to learners.
