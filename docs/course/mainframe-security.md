# 大型主機安全

本單元介紹 z/OS 安全概念、交易層級安全、Crypto Express、IOCDS、啟動設定檔與 IPL 流程。

## 學習脈絡

大型主機安全不只是在應用程式外面加上一層控制，而是從身分、權限、資料保護、硬體加密、I/O 組態到系統啟動流程共同構成的治理能力。本單元會把安全與系統初始化放在一起看，協助你理解平台如何從啟動開始就建立受控環境。

## 本章目標

- 理解 z/OS 安全如何涵蓋存取控制、資料保護與可用性。
- 說明 IBM Z 如何透過硬體與軟體支援加密與金鑰管理。
- 認識 IOCDS、啟動設定檔與 IPL 在系統初始化中的角色。

## 觀看順序

1. 先看「z/OS 安全」與「交易層級安全」，建立安全模型與資料保護概念。
2. 再看「Crypto Express 金鑰管理」，理解硬體支援如何降低金鑰暴露風險。
3. 最後看「IOCDS」、「啟動設定檔」與「對作業系統執行 IPL」，把安全與系統啟動流程接起來。

## 影片

<VideoLesson title="z/OS 安全" entry-id="1_b3hd3sa0" source-url="https://learn.ibm.com/mod/video/view.php?id=96601" video-src="/media/zos-security.mp4" subtitle-src="/subtitles/zos-security.zh-Hant-TW.vtt" />

<LessonNotes slug="zos-security" />

<VideoLesson title="交易層級安全" entry-id="1_1ndlj8bd" source-url="https://learn.ibm.com/mod/video/view.php?id=96603" video-src="/media/transaction-level-security.mp4" subtitle-src="/subtitles/transaction-level-security.zh-Hant-TW.vtt" />

<LessonNotes slug="transaction-level-security" />

<VideoLesson title="Crypto Express 金鑰管理" entry-id="1_52mzshqn" source-url="https://learn.ibm.com/mod/video/view.php?id=96608" video-src="/media/crypto-express-key-management.mp4" subtitle-src="/subtitles/crypto-express-key-management.zh-Hant-TW.vtt" />

<LessonNotes slug="crypto-express-key-management" />

<VideoLesson title="IOCDS" entry-id="1_5hs3mb8z" source-url="https://learn.ibm.com/mod/video/view.php?id=96610" video-src="/media/iocds.mp4" subtitle-src="/subtitles/iocds.zh-Hant-TW.vtt" />

<LessonNotes slug="iocds" />

<VideoLesson title="啟動設定檔" entry-id="1_hchvg5wh" source-url="https://learn.ibm.com/mod/video/view.php?id=96611" video-src="/media/activation-profiles.mp4" subtitle-src="/subtitles/activation-profiles.zh-Hant-TW.vtt" />

<LessonNotes slug="activation-profiles" />

<VideoLesson title="對作業系統執行 IPL" entry-id="1_c1w1vq9x" source-url="https://learn.ibm.com/mod/video/view.php?id=96613" video-src="/media/ipling-an-operating-system.mp4" subtitle-src="/subtitles/ipling-an-operating-system.zh-Hant-TW.vtt" />

<LessonNotes slug="ipling-an-operating-system" />

## 閱讀材料

- [z/OS MVS 系統初始化邏輯與 IPL](./readings/zos-mvs-ipl)

## 本章完成檢核

- 能說明 z/OS 安全涵蓋身分、權限、資料保護與稽核等面向。
- 能區分 CPACF、Crypto Express 與不同金鑰型態在加密中的角色。
- 能描述 IOCDS、啟動設定檔與 IPL 如何影響系統初始化。
