# Project TODO and Planning Notes

This file is for project planning only. It should not be linked from the public VitePress course pages.

## First Edition Scope

- Include course videos, Traditional Chinese subtitles, lesson summaries, static reading pages, and the IBM Z glossary.
- Keep public learner pages focused on course content. Avoid publishing implementation notes, deployment notes, scope tradeoffs, or internal TODO text in `docs/`.
- Exclude forum, certificate, survey, badge claim, and other Moodle workflow features from the static learner experience.

## Future Scope

- Question banks are confirmed as future scope, but not part of the first edition.
- Future quiz work needs a separate plan for authorization, question presentation, answer visibility, scoring, review workflow, and whether the static site should host questions at all.
- Known quiz activities:
  - Checkpoint 1: `https://learn.ibm.com/mod/quiz/view.php?id=96088`
  - Checkpoint 2: `https://learn.ibm.com/mod/quiz/view.php?id=101250`
  - Checkpoint 3: `https://learn.ibm.com/mod/quiz/view.php?id=101251`
  - Badge quiz: `https://learn.ibm.com/mod/quiz/view.php?id=348797`

## Lab and Interactive Content

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
- Suggested Cloudflare Pages settings:
  - Repository: `nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw`
  - Production branch: `main`
  - Build command: `npm ci && npm run build:cloudflare`
  - Build output directory: `docs/.vitepress/dist`
  - Node.js version: `22`
- Current HLS media footprint is roughly 1,022 files and 825 MB, with maximum segment size around 3.1 MB.
- If media is moved to R2 or another CDN later, set `VITE_MEDIA_BASE_URL` before building.

## Public Page Hygiene

- Public pages should not mention internal project phases, TODOs, deployment details, or delayed implementation decisions.
- If a planning note is useful to retain, add it here instead of to `docs/`.
- Course pages may mention source URLs and learning context, but should avoid exposing internal production decisions.
