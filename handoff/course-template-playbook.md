# 課程網站範本化與經驗傳承規劃

本文件把 `Introduction to IBM z/OS` 台灣繁體中文化網站的架設經驗整理成可重複套用的模板。它供後續其他 IBM Learn 課程中文化、靜態化與交付使用，不屬於正式網站內容。

## 目標

- 把單一課程專案經驗轉成可複製的工作流。
- 降低下一門課的探索成本。
- 保留授權、擷取、翻譯、媒體、字幕、互動練習、Lab 說明、部署與驗收的注意事項。
- 讓 IBM 台灣團隊可用同一套品質門檻驗收後續課程網站。

## 可重複使用的標準架構

建議每一門課使用類似結構：

```text
course-site/
  data/
    course-manifest.json
    lesson-notes.json
    practice-questions.json
    practice-sources.json
    labs.json
    transcripts/
  docs/
    .vitepress/
    course/
    videos/
    practice/
    labs/
    glossary/
    license-notes.md
    index.md
    public/
      subtitles/
      manifest/
  handoff/
    first-release.md
    maintenance-guide.md
    course-template-playbook.md
  scripts/
  references/
  RELEASE-CHECKLIST.md
  package.json
```

## 建站階段模板

### 1. 授權與範圍確認

必要問題：

- 課程是否對外免費公開？
- 是否已取得內容、影片、字幕、題目、Lab metadata 的使用授權？
- 允許公開在哪裡：GitHub Pages、Cloudflare Pages、企業內部網站或其他平台？
- 是否可擷取影片？是否可改掛中文字幕？
- 題庫、測驗、badge、certificate 是否可改成靜態互動練習？
- Lab 是否只能描述與導回原課程？

產出：

- 授權紀錄與使用範圍。
- 第一版包含/不包含範圍。
- 公開網站與本地交付文件的分界。

### 2. 課程結構擷取

目標是得到一份可維護的 manifest。

建議欄位：

- course id、course code、title、sourceUrl、locale。
- section slug、英文標題、中文標題。
- activity type：video、page、quiz、hvp、forum、certificate、survey、url。
- activity slug、title、titleZh、sourceUrl。
- video 的 Kaltura partnerId、uiconfId、entryId。

產出：

- `data/course-manifest.json`
- `data/captured/course-capture.json`

注意事項：

- 不要把 login-only attempt URL 放到公開頁。
- forum、certificate、survey、badge claim 通常只保留在本地盤點，不重建成公開功能。
- slug 一旦確定，後續字幕、HLS、摘要、練習題複習連結都會依賴它。

### 3. 靜態網站骨架

建議技術：

- VitePress
- Vue components
- Cloudflare Pages
- GitHub Pages

必要頁面：

- 首頁：課程定位與主要入口。
- 課程頁：單元順序、影片與閱讀材料。
- 影片頁：影片總覽與手動載入。
- 詞彙表：課程術語與審核譯詞。
- 授權資訊：原課程來源與使用脈絡。
- 互動練習：若授權允許。
- Lab 與互動實作：只描述活動並導回原課程。

重要設計決策：

- 不做 landing page 式行銷頁，第一屏要直接幫助學習者開始學習。
- 多影片同頁時使用 lazy loading / manual loading，避免網路不穩時卡頓。
- 保持教材型 UI：清楚、可掃描、低裝飾。

### 4. 影片與字幕流程

標準流程：

1. 盤點每支影片的 Kaltura entry id。
2. 下載授權影片或取得可用媒體 URL。
3. 產生 HLS。
4. 產生英文逐字稿與英文 VTT。
5. 翻譯繁體中文字幕。
6. 用詞彙表與台灣用語做術語校正。
7. 包裝字幕行寬。
8. 跑字幕存在性與時間軸盤查。
9. 抽查播放器與字幕。

建議保留的檢查：

- 每支影片有 `.en.vtt`。
- 每支影片有 `.zh-Hant-TW.vtt`。
- 每支影片有 HLS playlist。
- 字幕沒有空 cue。
- 中文字幕單行長度可讀。
- 修改字幕後更新 cache version。

已知風險：

- 自動轉錄可能誤聽 IBM Z 術語。
- 翻譯後長句可能讓字幕看似與畫面跳脫。
- 單一影片局部時間軸錯位常會一路影響後續 cue，需要整段盤查。

### 5. 繁體中文內容與術語

建議流程：

- 先建立術語基準。
- 先翻譯字幕，再整理影片摘要。
- 重要詞彙保留英文縮寫並提供中文說明。
- 若已有審核詞彙表，直接採用，不另創譯詞。

注意事項：

- 台灣繁體中文不只是簡繁轉換；需要修正中國大陸用語。
- IBM 產品名與專有名詞不應過度翻譯。
- 同一術語在字幕、摘要、詞彙表、練習題中要一致。

### 6. 練習題模板

適用條件：

- 已授權可使用題目。
- 目標是學習確認，不是正式評量。

建議互動模式：

- 單選：點選後立即顯示解析。
- 多選：先勾選多個選項，再按「檢查答案」。
- 不計分。
- 不保存作答紀錄。
- 答錯時提示回到哪個影片或單元複習。

資料欄位：

- `id`
- `section`
- `lessonSlug`
- `lessonTitle`
- `sourceType`
- `sourceUrl`
- `sourceReference`
- `prompt`
- `choices`
- `correctChoiceIds`
- `explanation`
- `review`

注意事項：

- 不公開 pass/fail、badge、certificate、attempt 等正式測驗語氣。
- 題目來源 URL 可以保留，但學習者互動只呈現練習用途。
- 題目翻譯後要人工確認正確答案沒有被改壞。

### 7. Lab 與互動實作模板

適用條件：

- 原課程有 H5P、Lab、互動活動或需要特定登入環境的實作。
- 本站不重建環境。

建議公開內容：

- 活動名稱。
- 所屬單元。
- 活動類型。
- 學習目的。
- 建議先完成哪些影片。
- 原 IBM Learn 活動連結。
- 明確說明需回原課程完成。

不要公開：

- Lab runtime。
- 登入流程細節。
- 題目 attempt id。
- 學習者狀態或結果。

### 8. 自動化品質門檻

後續課程建議一開始就建立這些 gate：

- `subtitles:check`
- `subtitles:audit`
- `content:quality`
- `practice:check`
- `site:check`
- `verify:release`

`site:check` 至少應檢查：

- 必要公開頁存在。
- 內部連結不破。
- 公開頁無內部規劃語氣。
- 影片清單完整。
- 字幕清單完整。
- 練習題數量與來源一致。
- Lab metadata 完整。

### 9. 部署模板

GitHub Pages：

- 適合公開 repo。
- 需要 base path，例如 `/repo-name/`。
- 由 GitHub Actions 自動部署。

Cloudflare Pages：

- 適合作為主要正式站。
- base path 使用 `/`。
- 可分離課程網站與大型媒體 host。

媒體 host：

- 大影片/HLS 不建議提交 Git。
- 可用獨立 Cloudflare Pages media project 或其他物件儲存/CDN。
- 課程站用 `VITE_MEDIA_BASE_URL` 指向媒體 host。

### 10. 驗收模板

內容驗收：

- 首頁定位清楚。
- 單元順序正確。
- 所有影片可播放。
- 中文字幕預設可用。
- 詞彙用語一致。
- 練習題互動正確。
- Lab 頁只描述活動並導回原課程。
- 授權資訊清楚。

技術驗收：

- `npm run verify:release` 通過。
- GitHub Pages workflow success。
- Cloudflare production deployment success。
- 手機寬度無水平溢出。
- 多影片頁不會一進頁就大量載入影片。

交付驗收：

- `handoff/first-release.md`
- `handoff/maintenance-guide.md`
- `handoff/course-template-playbook.md`
- `RELEASE-CHECKLIST.md`
- 最新 commit 與公開網址紀錄。

## 下一門課建議啟動清單

1. 建立 repo 與 Cloudflare Pages project。
2. 確認授權與公開範圍。
3. 擷取 course manifest。
4. 建立 VitePress 基礎頁。
5. 下載或掛載影片。
6. 產生 HLS 與字幕。
7. 建立 lesson notes。
8. 匯入或建立詞彙表。
9. 決定是否納入練習題。
10. 決定 Lab / H5P 只描述或另行實作。
11. 加上自動檢查。
12. 部署與驗收。
13. 補 handoff 文件。

## 可抽成共用模板的項目

- VitePress config 範本。
- `VideoLesson.vue` lazy loading 元件。
- `CourseManifest.vue` 活動清單元件。
- `PracticeQuestions.vue` 靜態練習題元件。
- `LabList.vue` Lab metadata 元件。
- `check-public-site.mjs` release gate。
- `check-content-quality.mjs` 內容品質檢查。
- `check-subtitles.mjs` 字幕存在性檢查。
- `RELEASE-CHECKLIST.md`。
- `handoff/maintenance-guide.md`。

## 經驗教訓

- 一開始就分清楚公開頁與內部交付文件，可以避免把 TODO 或實作細節放上正式站。
- 課程 manifest 是整個專案的中樞，越早穩定越好。
- 影片 slug 要穩定，後續所有資產都依賴它。
- 多影片同頁必須 lazy load。
- 字幕問題不能只看使用者回報的單點，要做整段與全站盤查。
- 題目要用學習練習語氣，不要把正式測驗語氣帶到靜態站。
- Lab 最安全的第一版做法是 metadata + 原課程連結。
- release gate 要比人工記憶可靠，把會忘的檢查寫成 script。
