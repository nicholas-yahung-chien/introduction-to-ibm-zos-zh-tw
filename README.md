# Introduction to IBM z/OS 台灣繁體中文課程

這個 repository 使用 VitePress 建置 IBM 授權課程 **Introduction to IBM z/OS / DL10999G** 的台灣繁體中文化靜態教材。

目前內容包含：

- 課程章節頁、閱讀頁與影片摘要
- 18 支課程影片的外部 HLS 媒體與 `zh-Hant-TW.vtt` 網頁字幕 track
- IBM Z 詞彙表
- Learn activity URL、Kaltura entry ID 與素材處理 manifest

## 開發

```powershell
npm install
npm run dev
```

## 建置

```powershell
npm run verify:release
npm run build:github
npm run build:cloudflare
```

GitHub Pages 使用 `/introduction-to-ibm-zos-zh-tw/` base；Cloudflare Pages 使用 `/` base。內部規劃、部署筆記與後續 TODO 請見本地端 `PROJECT-TODO.md`。

發布前檢查請見 `RELEASE-CHECKLIST.md`。

影片 HLS 媒體由獨立 Cloudflare Pages 專案提供：`https://introduction-to-ibm-zos-media.pages.dev`。建置腳本會透過 `VITE_MEDIA_BASE_URL` 指向該媒體站，避免 GitHub Actions 下載 Git LFS 媒體物件。

## 素材處理

```powershell
npm run capture:course
npm run glossary:import
npm run download:videos -- --dry-run
npm run subtitles:check
npm run subtitles:audit
```

## 授權

授權與使用範圍請依 IBM 課程授權與內部審核結果為準。詳細授權備註請見 `LICENSE-NOTES.md`。
