# Introduction to IBM z/OS 台灣繁體中文版交付筆記

本文件是本地與 Git repo 內的交付封版紀錄，不屬於 VitePress 正式網站內容，也不要從 `docs/` 內的公開頁面連結到本文件。

## 交付狀態

- 交付日期：2026-05-21
- 目前功能基準 commit：`8412cc8` (`Add lab overview page`)
- 第一版驗收 tag：`v1.0.0-first-edition`
- 第一版驗收 commit：`2ce201d`
- GitHub repo：`https://github.com/nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw`
- IBM Learn 原課程：`https://learn.ibm.com/course/view.php?id=6815`
- 課程代碼：`DL10999G`
- 語系：`zh-Hant-TW`

## 正式網站網址

- Cloudflare Pages：`https://introduction-to-ibm-zos-zh-tw.pages.dev/`
- GitHub Pages：`https://nicholas-yahung-chien.github.io/introduction-to-ibm-zos-zh-tw/`
- 媒體 CDN / HLS host：`https://introduction-to-ibm-zos-media.pages.dev/`

## 本次交付範圍

- VitePress 靜態網站。
- 課程首頁、三個主要單元頁、影片總覽、閱讀頁、詞彙表、授權資訊頁。
- 18 支課程影片的外部 HLS 播放。
- 繁體中文字幕 WebVTT 與英文 WebVTT。
- 每支影片的繁體中文摘要、重點與術語。
- 54 題靜態互動練習題：即時回饋、不計分、不保存作答紀錄。
- Lab 與互動實作說明頁：僅描述 IBM Learn 原課程活動並指向原課程，不重建 Lab 環境。

## 媒體來源與處理方式

- 影片來源為 IBM Learn 課程授權範圍內的 Kaltura 影片。
- 本地保留下載與處理腳本：
  - `scripts/download-kaltura-videos.mjs`
  - `scripts/generate-hls.mjs`
- HLS 內容在本地位於 `docs/public/hls/`，目前約 1,022 個檔案、825.3 MB。
- HLS 不提交到 Git，網站建置時會由 `scripts/prune-dist-media.mjs` 從 `docs/.vitepress/dist` 移除，正式網站透過 `VITE_MEDIA_BASE_URL` 指向獨立媒體 host。
- 媒體 host 為獨立 Cloudflare Pages 專案：`introduction-to-ibm-zos-media`。

## 字幕處理方式

- 英文逐字稿與英文 WebVTT 由授權影片產生，保留於 `data/transcripts/` 與 `docs/public/subtitles/*.en.vtt`。
- 繁體中文字幕位於 `docs/public/subtitles/*.zh-Hant-TW.vtt`。
- 主要流程：
  - `npm run subtitles:transcribe`
  - `npm run subtitles:translate`
  - `npm run subtitles:wrap`
  - `npm run subtitles:check`
  - `npm run subtitles:audit`
- 字幕修正後需更新 `docs/.vitepress/theme/components/VideoLesson.vue` 內的 `subtitleVersion`，讓瀏覽器重新抓取新版字幕。
- 字幕品質曾針對 Kaltura `1_vb8qf96d` 的時間軸與長字幕問題做完整盤查與修正，後續驗收時影片與字幕已確認可播放且時間軸可接受。

## 部署方式

GitHub Pages：

```powershell
git push origin main
```

GitHub Actions 會使用 `.github/workflows/deploy-pages.yml` 建置與發布。GitHub Pages 的 VitePress base 是 `/introduction-to-ibm-zos-zh-tw/`。

Cloudflare Pages：

```powershell
$env:CLOUDFLARE_ACCOUNT_ID = [Environment]::GetEnvironmentVariable('CLOUDFLARE_ACCOUNT_ID', 'User')
$env:CLOUDFLARE_API_TOKEN = [Environment]::GetEnvironmentVariable('CLOUDFLARE_API_TOKEN', 'User')
npm run deploy:cloudflare
```

Cloudflare Pages 的 VitePress base 是 `/`。Cloudflare token 不應寫入 repo 或文件，只使用環境變數。

本地開發：

```powershell
npm run dev -- --port 5173
```

預期本機網址：`http://127.0.0.1:5173/introduction-to-ibm-zos-zh-tw/`

## 驗證紀錄

最近一次完整驗證在 2026-05-21 完成，包含：

```powershell
npm run verify:release
```

此命令會執行：

- `npm run build:github`
- `npm run build:cloudflare`
- `npm run subtitles:check`
- `npm run content:quality`
- `npm run practice:check`

最近一次公開部署檢查：

- Cloudflare `/labs/`：HTTP 200，頁面包含「Lab 與互動實作」與「安全補充互動活動」。
- GitHub Pages `/labs/`：HTTP 200，頁面包含「Lab 與互動實作」與「安全補充互動活動」。
- GitHub Actions `Add lab overview page` workflow：success。

本地瀏覽器驗證：

- `/practice/`：54 題可渲染；單選題即時回饋；多選題需按「檢查答案」後才顯示解析。
- `/labs/`：1 個 Lab-style 活動可渲染；IBM Learn 原活動連結正確；手機寬度無水平溢出。

## 已知限制

- 本站不保存學習紀錄、答題紀錄、分數或 IBM Learn 完成狀態。
- 練習題是靜態互動，不等同於 IBM Learn 的正式測驗、badge quiz 或認證流程。
- Lab 與 H5P 活動僅提供說明與原課程連結，實際互動需回到 IBM Learn。
- Forum、certificate、survey、badge claim 等 Moodle 流程不在本站重建。
- HLS 媒體體積較大，媒體更新時需同步維護獨立媒體 host。
- `data/captured/` 內可能含有登入後擷取到的審閱 URL 或 attempt id，這些資料只作為本地追溯用途，不應公開呈現在網站上。

## 後續 TODO

- 準備正式交付摘要，供 IBM 台灣團隊內部審閱。
- 做一次全站公開文字巡檢，確認沒有內部 TODO、規劃語氣或範圍討論出現在正式頁。
- 補維護指南，說明如何更新影片、字幕、詞彙表、練習題與 Lab metadata。
- 若 IBM Learn 原課程新增 Lab 或互動活動，更新 `data/labs.json` 與 `/labs/`。
- 若練習題內容有審稿修正，更新 `data/practice-questions.json` 並執行 `npm run practice:check`。
- 評估是否將大型 HLS 媒體改由更正式的物件儲存或 CDN 管理，以降低 Pages 專案承載壓力。

## 重要維護檔案

- 維護流程指南：`handoff/maintenance-guide.md`
- 課程模板化與經驗傳承規劃：`handoff/course-template-playbook.md`
- 課程 manifest：`data/course-manifest.json`
- 影片摘要：`data/lesson-notes.json`
- 練習題：`data/practice-questions.json`
- 練習題來源清單：`data/practice-sources.json`
- Lab metadata：`data/labs.json`
- VitePress 設定：`docs/.vitepress/config.ts`
- 影片元件：`docs/.vitepress/theme/components/VideoLesson.vue`
- 練習題元件：`docs/.vitepress/theme/components/PracticeQuestions.vue`
- Lab 元件：`docs/.vitepress/theme/components/LabList.vue`
- 公開內容品質檢查：`scripts/check-content-quality.mjs`
- Release 檢查清單：`RELEASE-CHECKLIST.md`
