# Release Checklist

Use this checklist before publishing course content changes.

## Local Verification

```powershell
npm ci
npm run verify:release
```

- Confirm `npm run verify:release` completes successfully.
- Confirm `npm run site:check` passes; this is included in `npm run verify:release`.
- Confirm the public-page hygiene checks return no project planning, TODO, or deployment notes.
- Confirm required public pages are present: home, course, videos, practice, labs, glossary, and license notes.
- Confirm internal links, video/subtitle inventory, practice question count, and Lab metadata pass the automated checks.
- Confirm practice question edits pass `npm run practice:check`; this is included in `npm run verify:release`.
- Run `npm run subtitles:wrap` before verification after editing subtitle text.
- If subtitles changed, also run `npm run subtitles:audit` and inspect the generated report.
- If video HLS assets changed, redeploy `docs/public` to the media Pages project before publishing the course site.

## GitHub Pages

- Push to `main`.
- Confirm the `Deploy VitePress site to Pages` workflow completes successfully.
- Spot-check `https://nicholas-yahung-chien.github.io/introduction-to-ibm-zos-zh-tw/course/`.
- Confirm course links include the `/introduction-to-ibm-zos-zh-tw/` base path.

## Cloudflare Pages

- Confirm the Cloudflare Pages project points to:
  - Repository: `nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw`
  - Production branch: `main`
  - Build command: `npm ci && npm run build:cloudflare`
  - Build output directory: `docs/.vitepress/dist`
- Manual deployment command:

```powershell
npm run deploy:cloudflare
```

- Spot-check `https://introduction-to-ibm-zos-zh-tw.pages.dev/course/`.
- Confirm media playlists load from `https://introduction-to-ibm-zos-media.pages.dev`.
