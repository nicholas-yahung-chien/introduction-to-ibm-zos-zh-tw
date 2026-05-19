# Introduction to IBM z/OS 繁體中文化課程

這個專案用 VitePress 建置 IBM 授權課程 **Introduction to IBM z/OS / DL10999G** 的台灣繁體中文靜態版本。

第一版範圍：

- 課程章節與閱讀頁內容繁體中文化
- 18 支課程影片，採自管 MP4 + `zh-Hant-TW.vtt` 網頁字幕 track
- IBM Z 詞彙表匯入與課程用語一致化
- 排除 quiz、forum、certificate、survey 與 badge claim

## 開發

```powershell
npm install
npm run dev
```

## 重要素材

影片素材不直接提交到一般 Git。預設流程會將授權下載的 MP4 放在 `media/`，並由靜態站透過部署環境或外部媒體儲存提供。

```powershell
npm run capture:course
npm run glossary:import
npm run download:videos -- --dry-run
npm run subtitles:check
```

## 授權備註

請參考 [LICENSE-NOTES.md](./LICENSE-NOTES.md)。正式公開前，需由 IBM 台灣確認課程內容、影片、字幕與詞彙整理的公開授權範圍。

