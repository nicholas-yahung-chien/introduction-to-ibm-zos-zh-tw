# Project TODO and Planning Notes

This file is for project planning only. It should not be linked from the public VitePress course pages.

## First Edition Scope

- First-edition signoff is recorded in `FIRST-EDITION-SIGNOFF.md`.
- Include course videos, Traditional Chinese subtitles, lesson summaries, static reading pages, and the IBM Z glossary.
- Glossary terms have been confirmed and the current translations can be used as-is for the first edition.
- Keep public learner pages focused on course content. Avoid publishing implementation notes, deployment notes, scope tradeoffs, or internal TODO text in `docs/`.
- Exclude forum, certificate, survey, badge claim, and other Moodle workflow features from the static learner experience.

## First Edition Acceptance Checklist

- Public pages should provide learner-facing orientation, unit goals, suggested viewing order, and completion checks.
- Main course pages should avoid project planning language and should not mention quiz or lab exclusions.
- Video pages should keep lazy loading enabled so multiple videos on one page do not immediately consume bandwidth.
- Each video should have a Traditional Chinese subtitle track and a lesson summary.
- Reading pages should summarize the source activity and explain how learners should use the reference.
- Before publishing a content update, run the site build, subtitle checks, and a quick public-page text hygiene scan.

## Future Scope

- Practice-question requirements are specified in `SECOND-PHASE-PRACTICE-SPEC.md`.
- Practice-question source inventory is stored in `data/practice-sources.json`; authorized normalized practice items are stored in `data/practice-questions.json`.
- Question banks are confirmed as future scope, but not part of the first edition.
- Future quiz work needs a separate plan for authorization, question presentation, answer visibility, scoring, validation workflow, and whether the static site should host questions at all.
- Known quiz activities:
  - Checkpoint 1: `https://learn.ibm.com/mod/quiz/view.php?id=96088`
  - Checkpoint 2: `https://learn.ibm.com/mod/quiz/view.php?id=101250`
  - Checkpoint 3: `https://learn.ibm.com/mod/quiz/view.php?id=101251`
  - Badge quiz: `https://learn.ibm.com/mod/quiz/view.php?id=348797`

## Lab and Interactive Content

- Lab handling requirements are specified in `SECOND-PHASE-LABS-SPEC.md`.
- Lab-style activities and H5P interactive content are not part of the first edition.
- Security Addendum is currently represented in the manifest as future scope:
  - `https://learn.ibm.com/mod/hvp/view.php?id=129741`
- Future options:
  - rewrite as static step-by-step material,
  - rebuild as an interactive web activity,
  - keep as an external IBM Learn reference,
  - or omit if licensing or environment dependencies make it unsuitable.

## Subtitle Workflow

- Generate English transcripts and `*.en.vtt` from authorized MP4 files with local `faster-whisper`.
- Translate to `*.zh-Hant-TW.vtt` using OpenAI and the Taiwan terminology guidance.
- Validate with:

```powershell
npm run subtitles:check
npm run subtitles:audit
```

- After any subtitle change, update the subtitle cache version in `docs/.vitepress/theme/components/VideoLesson.vue`.

## Deployment Notes

- GitHub Pages uses `/introduction-to-ibm-zos-zh-tw/` as the VitePress base.
- Cloudflare Pages uses `/` as the VitePress base.
- Release checks are documented in `RELEASE-CHECKLIST.md`.
- GitHub Actions uses `npm ci`, Node.js 22 for project builds, current Node 24-compatible action versions, and `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24`.
- Suggested Cloudflare Pages settings:
  - Repository: `nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw`
  - Production branch: `main`
  - Build command: `npm ci && npm run build:cloudflare`
  - Build output directory: `docs/.vitepress/dist`
  - Node.js version: `22`
- Course media is hosted by the dedicated Cloudflare Pages media project:
  - `https://introduction-to-ibm-zos-media.pages.dev`
- Build scripts set `VITE_MEDIA_BASE_URL` to the media project so CI does not need Git LFS objects.
- Current HLS media footprint is roughly 1,022 files and 825 MB, with maximum segment size around 3.1 MB.
- Local generated HLS files may remain under `docs/public/hls/`, but that directory is ignored, pruned from site builds, and should be redeployed to the media project when media changes.

## Public Page Hygiene

- Public pages should not mention internal project phases, TODOs, deployment details, or delayed implementation decisions.
- If a planning note is useful to retain, add it here instead of to `docs/`.
- Course pages may mention source URLs and learning context, but should avoid exposing internal production decisions.
