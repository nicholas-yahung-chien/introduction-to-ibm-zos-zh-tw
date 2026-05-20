# Release Checklist

Use this checklist before publishing course content changes.

## Local Verification

```powershell
npm ci
npm run verify:release
rg -n "TODO|待補|等待課程|等待.*補|第一版|未納入|不納入|題庫|測驗|Cloudflare|GitHub Pages|Git LFS|R2" docs --glob "*.md" --glob "*.vue" --glob "*.ts"
```

- Confirm `npm run verify:release` completes successfully.
- Confirm the public-page hygiene scan returns no project planning or deployment notes.
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
