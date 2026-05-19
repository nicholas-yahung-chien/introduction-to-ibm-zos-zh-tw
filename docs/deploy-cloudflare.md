# Cloudflare Pages 部署

本專案可以同時部署到 GitHub Pages 與 Cloudflare Pages。GitHub Pages 使用 repo path base，Cloudflare Pages 使用根目錄 base。

## 建議設定

在 Cloudflare Pages 建立 GitHub integration project：

- Repository: `nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw`
- Production branch: `main`
- Build command: `npm ci && npm run build:cloudflare`
- Build output directory: `docs/.vitepress/dist`
- Node.js version: `22`

Cloudflare Pages 免費方案目前符合本課程第一版需求：HLS 影片約 1,022 個檔案、約 825 MB，最大單檔約 3.1 MB，低於 Pages 免費方案的 20,000 檔案與 25 MiB 單檔限制。

## 影片與字幕

影片使用自管 HLS：

- HLS playlist: `/hls/{slug}/index.m3u8`
- HLS segments: `/hls/{slug}/segment_0000.ts`
- 字幕: `/subtitles/{slug}.zh-Hant-TW.vtt`

`docs/public/_headers` 會對 HLS、字幕與打包後的 assets 加上長效快取。HLS segment 檔名由內容產生流程固定；如果重新產生 HLS，請同步更新 `VideoLesson.vue` 的 `mediaVersion` 以避免使用者拿到舊快取。

## 可選：GitHub Actions 直傳

若 Cloudflare 的 Git integration 對 Git LFS 行為不穩，改用手動 GitHub Actions workflow：

1. 在 GitHub repo secrets 加入 `CLOUDFLARE_ACCOUNT_ID`。
2. 在 GitHub repo secrets 加入 `CLOUDFLARE_API_TOKEN`，權限至少需要 Cloudflare Pages deploy。
3. 到 GitHub Actions 手動執行 `Deploy VitePress site to Cloudflare Pages`。

這個 workflow 會用 `actions/checkout` 的 `lfs: true` 取回真實 HLS segment，再以 Wrangler direct upload 部署。

## 可選：外部媒體網域

若未來要把影片搬到 R2 或其他 CDN，可以在建置時設定：

```powershell
$env:VITE_MEDIA_BASE_URL = "https://media.example.com"
npm run build:cloudflare
```

播放器會從該網域讀取 `/hls/...` 與 `/media/...`，字幕仍由同一個靜態站提供。
