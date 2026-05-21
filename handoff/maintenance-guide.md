# 維護流程指南

本文件供 IBM 台灣團隊與後續維護者使用。它是 repo 內的交接文件，不屬於 VitePress 正式網站內容，也不要從 `docs/` 公開頁面連結到本文件。

## 維護原則

- 正式學習者頁面只放課程內容、學習指引、授權資訊與原課程連結。
- 規劃、TODO、部署細節、token、登入 session、attempt id 等資訊只放在 repo 內部文件或本機資料，不放到 `docs/` 公開頁。
- 每次內容異動後先跑 `npm run verify:release`，確認建置、公開頁、字幕、內容品質與練習題檢查都通過。
- 任何 Cloudflare、OpenAI、GitHub token 都只透過環境變數提供，不寫入 repo。
- 若更動影片或字幕，務必在本機與公開站各做一次播放抽查。

## 常用命令

```powershell
npm ci
npm run dev -- --port 5173
npm run verify:release
npm run deploy:cloudflare
```

常用檢查：

```powershell
npm run site:check
npm run content:quality
npm run subtitles:check
npm run subtitles:audit
npm run practice:check
```

## 更新字幕

字幕檔位置：

- 英文字幕：`docs/public/subtitles/*.en.vtt`
- 繁體中文字幕：`docs/public/subtitles/*.zh-Hant-TW.vtt`
- 英文逐字稿：`data/transcripts/*.en.json`

建議流程：

1. 確認影片來源與授權狀態沒有變更。
2. 若要重新產生英文逐字稿，執行：

```powershell
npm run subtitles:transcribe
```

3. 若要重新翻譯中文字幕，確認 `OPENAI_API_KEY` 已在環境變數中，再執行：

```powershell
npm run subtitles:translate
```

4. 翻譯後進行字幕行寬整理：

```powershell
npm run subtitles:wrap
```

5. 跑字幕檢查與時間軸盤查：

```powershell
npm run subtitles:check
npm run subtitles:audit
```

6. 若有改到中文字幕內容，更新 `docs/.vitepress/theme/components/VideoLesson.vue` 內的 `subtitleVersion`，避免瀏覽器快取舊字幕。
7. 本機開啟影片頁，至少抽查：
   - 影片可播放。
   - 繁體中文字幕預設顯示。
   - 有修正過的時間點字幕能對上聲音。
   - 長字幕不會造成後續字幕跳脫。
8. 跑完整驗證：

```powershell
npm run verify:release
```

注意事項：

- WebVTT cue 的時間軸不要因文字換行而改動。
- 若只修文字，不要重排 cue 時間。
- 若發現整段字幕從某時間點後全部錯位，優先比對英文 VTT 與原影片，而不是只修單一句。
- 字幕過長時先換行，避免把一大段內容合併到單一 cue。

## 更新影片

影片來源資料主要在：

- `data/course-manifest.json`
- `data/video-assets.json`
- `docs/public/manifest/video-assets.json`
- `docs/public/hls/<video-slug>/index.m3u8`

建議流程：

1. 在 `data/course-manifest.json` 確認影片 activity 的 `slug`、`title`、`titleZh`、`sourceUrl`、`kaltura.entryId`。
2. 下載或更新授權影片 metadata：

```powershell
npm run download:videos
```

3. 產生 HLS：

```powershell
npm run generate:hls
```

4. 確認每支影片都有：
   - `docs/public/hls/<slug>/index.m3u8`
   - `docs/public/subtitles/<slug>.en.vtt`
   - `docs/public/subtitles/<slug>.zh-Hant-TW.vtt`
   - `data/lesson-notes.json` 對應摘要
   - `docs/public/manifest/video-assets.json` 對應 metadata
5. 跑：

```powershell
npm run site:check
npm run subtitles:check
npm run verify:release
```

6. 若 HLS 檔案有變更，先重新部署媒體 host，再部署課程網站。

注意事項：

- `docs/public/hls/` 體積很大，不提交到 Git。
- 課程網站建置會透過 `scripts/prune-dist-media.mjs` 移除 dist 裡的 HLS，正式播放由 `VITE_MEDIA_BASE_URL` 指向媒體 host。
- 若影片 slug 改名，字幕、HLS、lesson notes、practice review hint 都可能要同步更新。

## 更新詞彙表

主要位置：

- 詞彙來源或匯入流程：`scripts/import-glossary.mjs`
- 正式頁面：`docs/glossary/`
- 詞彙參考：`references/terminology-guide.md`

建議流程：

1. 確認新的詞彙來源與授權。
2. 若來源格式與既有匯入腳本一致，執行：

```powershell
npm run glossary:import
```

3. 若手動修詞彙頁，保持每個英文字母分頁的格式一致：
   - `## English Term`
   - 下方放台灣繁體中文說明。
4. 避免把 glossary 當成專案筆記使用；只保留學習者需要的術語與說明。
5. 跑：

```powershell
npm run content:quality
npm run verify:release
```

注意事項：

- 詞彙表中的既有譯詞已經過審核，除非有新的審稿決議，維持現有譯詞。
- IBM 產品名、元件名與縮寫通常保留英文。
- 若詞彙會影響字幕或練習題，也要同步修正相關檔案。

## 更新互動練習題

主要位置：

- 練習題資料：`data/practice-questions.json`
- 來源清單：`data/practice-sources.json`
- 擷取腳本：`scripts/capture-practice-sources.mjs`
- 翻譯腳本：`scripts/translate-practice-questions.py`
- 前端元件：`docs/.vitepress/theme/components/PracticeQuestions.vue`

建議流程：

1. 確認題目來源已授權可轉為靜態互動練習。
2. 若要重新擷取 IBM Learn 題目，需先以授權 session 登入，再執行：

```powershell
npm run practice:capture
```

3. 若要重新翻譯或正規化，確認 `OPENAI_API_KEY` 已在環境變數中，再執行：

```powershell
npm run practice:translate
```

4. 手動審閱 `data/practice-questions.json`：
   - `prompt` 是否自然。
   - `choices` 是否完整。
   - `correctChoiceIds` 是否正確。
   - `explanation` 是否能解釋答案。
   - `review.hint` 是否指向適合複習的課程頁。
5. 多選題應讓 `correctChoiceIds` 包含多個 id；前端會要求學習者按「檢查答案」後才顯示解析。
6. 跑：

```powershell
npm run practice:check
npm run site:check
npm run verify:release
```

注意事項：

- 本站練習題不計分、不保存作答紀錄、不提供 badge 或 certificate 行為。
- 不要把正式測驗、attempt、pass/fail、badge quiz 文案搬到公開頁。
- `data/captured/practice-source-extract.json` 可能含登入後擷取資訊，只作本地追溯，不應公開呈現。

## 更新 Lab 與互動實作說明

主要位置：

- Lab metadata：`data/labs.json`
- Lab 頁：`docs/labs/index.md`
- Lab 元件：`docs/.vitepress/theme/components/LabList.vue`

建議流程：

1. 在 IBM Learn 原課程確認是否新增 Lab、H5P 或其他互動活動。
2. 在 `data/labs.json` 新增一筆 metadata：
   - `id`
   - `title`
   - `titleZh`
   - `type`
   - `sourceUrl`
   - `courseUrl`
   - `section`
   - `summary`
   - `learningPurpose`
   - `recommendedBefore`
   - `launchGuidance`
3. 確認 `sourceUrl` 指向 IBM Learn 原活動。
4. 不重建 Lab runtime，不複製互動內容，不要求本站保存學習者狀態。
5. 跑：

```powershell
npm run site:check
npm run verify:release
```

## 重新部署

部署前：

```powershell
npm run verify:release
git status --short --branch
```

GitHub Pages：

```powershell
git push origin main
```

Cloudflare Pages：

```powershell
$env:CLOUDFLARE_ACCOUNT_ID = [Environment]::GetEnvironmentVariable('CLOUDFLARE_ACCOUNT_ID', 'User')
$env:CLOUDFLARE_API_TOKEN = [Environment]::GetEnvironmentVariable('CLOUDFLARE_API_TOKEN', 'User')
npm run deploy:cloudflare
```

部署後抽查：

- `https://introduction-to-ibm-zos-zh-tw.pages.dev/`
- `https://introduction-to-ibm-zos-zh-tw.pages.dev/course/`
- `https://introduction-to-ibm-zos-zh-tw.pages.dev/videos/`
- `https://introduction-to-ibm-zos-zh-tw.pages.dev/practice/`
- `https://introduction-to-ibm-zos-zh-tw.pages.dev/labs/`
- `https://nicholas-yahung-chien.github.io/introduction-to-ibm-zos-zh-tw/`

若 GitHub Pages 和 Cloudflare Pages 顯示不同內容，先確認：

- `main` 是否已推送。
- GitHub Actions 是否完成。
- Cloudflare 是否部署到 production branch。
- VitePress base 是否正確。
- 瀏覽器快取是否需要清除。

## 發布前最後檢查

- `npm run verify:release` 通過。
- 公開頁沒有內部規劃、TODO、部署細節或 token。
- 影片、字幕、練習題、Lab metadata 都被 `site:check` 檢查到。
- 若修改字幕或影片，至少抽查一支受影響影片。
- 若修改練習題，至少抽查單選題與多選題互動。
- 若修改導覽，抽查首頁、課程頁、影片頁、練習頁、Lab 頁、詞彙表、授權頁。

## 詞彙表收斂

正式網站的詞彙表不是完整 IBM Z glossary，而是只發布本課程提及或直接相關的項目。

維護流程：

```powershell
npm run glossary:import
```

此指令會從本機來源專案重新讀取 IBM Z glossary，掃描課程頁、字幕、逐字稿、練習題與 Lab metadata，然後只輸出課程相關詞彙到 `docs/glossary/`。完整來源說明仍保留在 `references/`，篩選結果與排除原因會寫入 `handoff/glossary-relevance-report.md`。

更新後請執行：

```powershell
npm run site:check
npm run verify:release
```

`site:check` 會確認詞彙表不是完整來源詞彙庫，並檢查必要課程詞彙仍存在。
