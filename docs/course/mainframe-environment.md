# 大型主機環境

本單元介紹電腦架構、大型主機架構、虛擬化，以及 z/OS 作為大型主機作業系統的角色。建議先看完五支影片，再閱讀「深入認識 z/OS」補充頁。

## 學習脈絡

如果把 z/OS 看成企業核心工作負載的執行環境，本單元就是先回答「它跑在哪裡」以及「作業系統為什麼重要」。課程會先從一般電腦架構說起，再逐步轉到大型主機如何透過架構設計、虛擬化與專用作業系統支援大量交易與高可靠性需求。

## 本章目標

- 從一般電腦架構過渡到大型主機架構。
- 理解 LPAR、處理器類型與 I/O 資源如何支援虛擬化。
- 區分作業系統的一般職責與大型主機作業系統的特殊需求。

## 觀看順序

1. 「電腦架構」與「大型主機架構」建立硬體與系統設計基礎。
2. 「虛擬化」說明 IBM Z 如何分割與管理實體資源。
3. 「什麼是作業系統？」與「大型主機作業系統」把硬體能力連到 z/OS 的角色。

## 影片

<VideoLesson title="電腦架構" entry-id="1_vb8qf96d" source-url="https://learn.ibm.com/mod/video/view.php?id=95222" video-src="/media/computer-architecture.mp4" subtitle-src="/subtitles/computer-architecture.zh-Hant-TW.vtt" />

<LessonNotes slug="computer-architecture" />

<VideoLesson title="大型主機架構" entry-id="1_7e45b5a8" source-url="https://learn.ibm.com/mod/video/view.php?id=95223" video-src="/media/mainframe-architecture.mp4" subtitle-src="/subtitles/mainframe-architecture.zh-Hant-TW.vtt" />

<LessonNotes slug="mainframe-architecture" />

<VideoLesson title="虛擬化" entry-id="1_1fl2qymd" source-url="https://learn.ibm.com/mod/video/view.php?id=95225" video-src="/media/virtualization.mp4" subtitle-src="/subtitles/virtualization.zh-Hant-TW.vtt" />

<LessonNotes slug="virtualization" />

<VideoLesson title="什麼是作業系統？" entry-id="1_jicvw3wr" source-url="https://learn.ibm.com/mod/video/view.php?id=96085" video-src="/media/what-is-an-operating-system.mp4" subtitle-src="/subtitles/what-is-an-operating-system.zh-Hant-TW.vtt" />

<LessonNotes slug="what-is-an-operating-system" />

<VideoLesson title="大型主機作業系統" entry-id="1_q1drndng" source-url="https://learn.ibm.com/mod/video/view.php?id=96086" video-src="/media/mainframe-operating-systems.mp4" subtitle-src="/subtitles/mainframe-operating-systems.zh-Hant-TW.vtt" />

<LessonNotes slug="mainframe-operating-systems" />

## 閱讀材料

- [深入認識 z/OS](./readings/diving-deeper-into-zos)

## 本章完成檢核

- 能用自己的話說明大型主機架構與一般分散式伺服器的主要差異。
- 能解釋 LPAR 為什麼是理解 IBM Z 虛擬化的核心概念。
- 能說明 z/OS 不只是「介面」，而是管理資源、工作與安全邊界的平台。
