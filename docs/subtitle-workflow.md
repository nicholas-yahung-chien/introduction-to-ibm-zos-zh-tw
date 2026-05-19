# 字幕工作流

第一版字幕採兩段式流程：

1. 使用本機 `faster-whisper` 對授權 MP4 產生英文逐字稿與 `*.en.vtt`。
2. 使用 OpenAI API 依台灣繁中用語表翻譯成 `*.zh-Hant-TW.vtt`，再由 IBM 台灣審稿。

## 產生英文字幕

```powershell
python scripts/transcribe_videos.py --model small.en --device auto
```

若要先測試第一支影片：

```powershell
python scripts/transcribe_videos.py --model tiny.en --limit 1
```

## 翻譯中文字幕

需要設定 `OPENAI_API_KEY`：

```powershell
$env:OPENAI_API_KEY = '...'
python scripts/translate_subtitles_openai.py --model gpt-4.1-mini
```

## 檢查缺漏

```powershell
npm run subtitles:check
```

