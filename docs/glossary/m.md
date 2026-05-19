# IBM Z 詞彙表：M

[返回詞彙表索引](./)

## Machine Reported Product Data (MRPD)

產品資料由機器收集並傳送到目的地，例如 IBM 支援伺服器或 RETAIN。這些記錄可能包括諸如特徵代碼資訊和產品邏輯設定資訊之類的資訊。

## Machine code

由電腦中央處理單元 (CPU) 直接執行的一組指令。

## MacVTap

MacVTap 是一個新的裝置驅動程式，旨在簡化虛擬橋接網路。

## Mainframe

電腦，通常位於電腦中心，具有廣泛的功能和資源，其他電腦可以連接到該電腦，以便它們可以共享設施。 (T)

## Management console

參見硬體管理控制台。

## Management Information Base (MIB)

1) 可以透過網路管理協定存取的物件的集合。 2) MIB記錄符合國際標準化組織(ISO)定義的開放系統互連(OSI)標準，用於資訊交換。另參見簡單網路管理協定。

## Master storage system

控制全域鏡像會話中一致性群組所建立的實體單元。主儲存系統向從儲存系統發送命令。一個儲存系統只能是一個全域鏡像會話的主系統。與從屬儲存系統比較。

## Maximum consistency group drain time

以秒為單位的值，指示在遠端站點形成目前一致性群組時從本機站點寫入到遠端站點的最長時間。當超過該時間時，目前形成一致性組的嘗試結束，並開始另一次嘗試。如果超過此時間五次，則在下次嘗試形成一致性組時將忽略此最大時間。預設值是四分鐘或一致性組間隔時間（如果該值設為零）的兩倍中的較大者。

## Maximum coordination time

以毫秒為單位的值，指示在協調全域鏡像會話的主磁碟區期間允許主機 I/O 延遲的最長時間。如果該值設為零，則預設值為 50 毫秒。

## MB

參見兆位元組。

## MC

參見硬體管理控制台。

## MCU

參見多缸裝置。

## Medium

對於儲存系統來說，是指儲存資料的磁碟表面。

## Megabyte (MB)

1) 對於處理器儲存、真實和虛擬儲存以及通道磁碟區，220 或 1 048 576 位元組。 2) 對於磁碟儲存容量和通訊量，1 000 000 位元組。

## Memory

也稱為儲存，是一種由電腦組件和用於保留數位資料的記錄媒體組成的技術。它是電腦的核心功能和基本組成部分。

## MFT

參見具有固定數量任務的多道程式設計。

## Miscellaneous Equipment Specification (MES)

任何伺服器硬體變更（新增、改進、刪除或這些的任意組合）。伺服器的序號不

## Metro Global Mirror

三站點、高可用性、災難復原解決方案。 Metro Global Mirror 使用同步複製在本地站點和中間站點之間鏡像資料，並使用異步複製將資料從中間站點鏡像到遠端站點。級聯解決方案，Metro Mirror 將資料同步複製到目標站點。此高速鏡像目標是將資料非同步複製到第三個站點的全域鏡像的來源磁碟區。當中間站點不參與生產站點發生的災難時，此解決方案有可能提供全域鏡像距離內無資料遺失的災難復原。

## Metro Mirror

儲存伺服器的功能，用於在同一儲存伺服器或另一儲存伺服器上維護邏輯磁碟區的一致副本。任何連接的主機在主邏輯磁碟區上啟動的所有修改也會在輔助邏輯磁碟區上處理。另參見遠端鏡像和複製以及全域複製。

## MIB

參見管理資訊庫。

## Microcode

一種在電腦的硬體和體系結構層級之間強加解釋器的技術。因此，微代碼是硬體級指令層，其在許多數位處理元件中實現更高層級的機器碼指令或內部狀態機排序。微碼用於通用中央處理單元 (CPU) 以及更專用的處理器。以及其他硬體中。微代碼通常駐留在特殊的高速記憶體中，並將機器指令、狀態機資料或其他輸入轉換為詳細的電路級操作序列。它將機器指令與底層電子裝置分開，以便可以更自由地設計和更改指令。它還有助於建立複雜的多步驟指令，同時降低電腦電路的複雜性。

## Microsoft Hyper-V

程式碼名為 Viridian，以前稱為 Windows Server Virtualization，是一個本機虛擬機器管理程式；它可以在執行 Windows 的 x86-64 系統上建立虛擬機器。

## Migration

以不同類型的系統或子系統取代系統或子系統，例如以光纖通道主機介面卡取代 SCSI 主機介面卡。在有關 DS8000 系列的資料遷移中，將資料從一個儲存系統傳輸到另一個儲存系統，例如從 3390 傳輸到 DS8000 系列。

## MIH

參見遺失中斷處理程式。

## Million Service Units (MSUs)

是對電腦在一小時內可以執行的處理工作量的測量。它反映了 IBM 如何根據充電容量對機器進行評級。

## Mirrored pair

包含相同資料的兩個單元。系統將它們視為一個實體。

## Mirroring

在主機系統中，將相同資料同時寫入同一輔助儲存池內的兩個磁碟單元的過程。

## MLAG

參見多鏈路聚合。

## MRPD

參見機器報告的產品資料。

## MSUs

參見百萬服務單位。

## MySQL

是一種使用結構化查詢語言 (SQL) 的免費開源關係型資料庫管理系統 (RDBMS)。

## Multi-Chip Module (MCM

是一種電子組件（例如具有多個導體端子或「引腳」的封裝），其中多個積體電路、半導體晶片和/或其他分立元件通常整合在統一的基板上，以便在使用時將其視為單個元件。

## Multicylinder Unit (MCU)

此術語指的是大於柱面的固定磁碟空間單位。目前，在EAV上，一個多缸單元有21個氣缸，每個多缸單元中第一個氣缸的數量是21的倍數。

## Multipath Subsystem Device Driver

參見 IBM DS8000 多路徑子系統裝置驅動程式。

## Multi-link Aggregation (MLAG)

允許在 MLAG 域的兩個單獨的交換器上安排聚合組。

## Multiple allegiance

獨立於軟體支援的 DS8000 硬體功能。此功能允許多個系統映像同時存取 DS8000 系列上的相同邏輯磁碟區，只要係統映像存取不同的磁碟區即可。另參見範圍和並行存取磁碟區。

## Multiple relationship FlashCopy

DS8000 系列的選項，透過同時建立多個 FlashCopy 關係來建立從一個來源到多個目標的備份副本。

## Multiplex

同時傳送的動作。

## Multiprocessor

包含兩個或多個處理器的電腦，這些處理器可以共同存取主記憶體。對於 DS8000 系列，多處理器並行運作。

## Multiprogramming with a fixed number of tasks (MFT)

每個作業只獲得其所需的內存量。也就是說，記憶體的分區隨著作業的進入和離開而改變。 MVT 可以更有效地利用資源。

## Multiprogramming variable number of tasks (MVT)

是大型電腦的功能，透過在大型電腦中同時存在和執行多個程式（任務），可以實現更有效率的操作。

## Multiple Virtual Systems (MVS)

是 System/370 和 System/390 IBM 大型主機上最常用的作業系統。
## Member (z/OS data set)

PDS 或 PDSE 裡的一個命名成員，可先類比為資料集容器中的單一檔案。常見寫法是 `DATA.SET.NAME(MEMBER)`，例如 `SYS1.PARMLIB(IEASYS00)`。傳統 ISPF 操作中，member name 常見長度限制為 8 個字元，且通常以大寫處理。

## Member list (ISPF)

ISPF 顯示 PDS 或 PDSE 內 members 的清單。使用者可在 member list 上用 line command browse、view、edit、rename、delete、copy 或 select 特定 member。實際可用命令會因 panel 與站台設定而異。
