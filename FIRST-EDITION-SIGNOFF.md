# First Edition Signoff

This file records the accepted first-edition delivery state for the IBM z/OS Traditional Chinese course site. It is a repository planning and handoff record only; do not link it from the public VitePress site.

## Signoff Status

- Status: accepted by project owner
- Signoff date: 2026-05-21
- Baseline commit: `2ce201d`
- Baseline tag: `v1.0.0-first-edition`
- Course source: `https://learn.ibm.com/course/view.php?id=6815`
- Course code: `DL10999G`
- Locale: `zh-Hant-TW`

## Public Delivery URLs

- Cloudflare Pages: `https://introduction-to-ibm-zos-zh-tw.pages.dev/`
- GitHub Pages: `https://nicholas-yahung-chien.github.io/introduction-to-ibm-zos-zh-tw/`
- Media host: `https://introduction-to-ibm-zos-media.pages.dev/`

## Included Scope

- VitePress static course site.
- Course landing page and learner-facing unit pages.
- 18 course videos delivered through external HLS media.
- Traditional Chinese WebVTT subtitle tracks.
- English WebVTT subtitle tracks retained for traceability.
- Lesson summaries and key terms for each video.
- Static reading pages for the course reading activities.
- IBM Z glossary using the approved existing translations.
- Release checklist and automated quality checks.

## Accepted Quality Gates

- `npm run verify:release`
- `npm run subtitles:audit`
- Public-page hygiene scan described in `RELEASE-CHECKLIST.md`
- GitHub Pages workflow deployment
- Cloudflare Pages production deployment

The first-edition baseline passed release verification, subtitle presence checks, content quality checks, and subtitle alignment audit with 18 videos and 0 issues.

## Excluded From First Edition

- Quiz, checkpoint, badge quiz, and formal assessment flows.
- Forum, certificate, survey, badge claim, and Moodle learner-state workflows.
- Lab execution environment or replicated H5P interactive content.
- Login-dependent learner progress tracking.
- Scoring, answer persistence, or result history.

## Media And Deployment Notes

- Course media is hosted by the dedicated Cloudflare Pages media project.
- Site builds use `VITE_MEDIA_BASE_URL=https://introduction-to-ibm-zos-media.pages.dev`.
- Local generated HLS files may exist under `docs/public/hls/`, but they are ignored by Git and pruned from site builds.
- Cloudflare Pages uses `/` as the VitePress base.
- GitHub Pages uses `/introduction-to-ibm-zos-zh-tw/` as the VitePress base.

## Follow-On Work

- Second-phase practice questions are specified in `SECOND-PHASE-PRACTICE-SPEC.md`.
- Second-phase Lab handling is specified in `SECOND-PHASE-LABS-SPEC.md`.
- These second-phase planning documents are not public course pages.
