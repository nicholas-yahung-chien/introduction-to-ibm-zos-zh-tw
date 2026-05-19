# IBM Z 詞彙表：D

[返回詞彙表索引](./)

## DA

參見裝置介面卡。

## Daisy chain

參見串行連接。

## DASD

參見直接存取儲存裝置。

## DASD fast write (DFW)

一種將資料同時寫入快取和非揮發性儲存並自動安排轉儲至 DASD 的功能。兩個副本都保留在儲存控制中，直到資料完全寫入 DASD，從而提供相當於直接寫入 DASD 的資料完整性。對系統管理的資料集使用 DASD 快速寫入由儲存類別屬性控制，以提高效能。

## DAT

參見動態位址轉換。

## Data availability

需要時資料可用的程度，通常以系統能夠回應任何資料請求的時間百分比來衡量（例如，99.999% 可用）。

## Data Base 2 (DB2)

DB2 提供了一個可以在多種運算平台上執行的開放資料庫環境。

## Data compression

消除間隙、空白欄位、冗餘和不必要的資料以縮短記錄或區區塊的長度的過程。資料設施儲存管理

## Data field

計數金鑰資料 (CKD) 記錄的可選第三個欄位。計數欄位指定資料欄位的長度。資料欄位包含程式寫入的資料。

## Data record

DS8000 上 IBM Z 儲存的基本單元，也稱為計數金鑰資料 (CKD) 記錄。資料記錄儲存在軌道上。這些記錄從 0 開始按順序編號。第一個記錄 R0 通常稱為磁軌描述符記錄，包含作業系統通常用來管理磁軌的資料。另參見計數鍵資料和固定區區塊架構。

## Data set FlashCopy

對於 IBM Z 主機，FlashCopy 的一項功能，指示磁碟區上有多少個部分磁碟區 FlashCopy 關係處於活動狀態。

## Data space / Hiperspace

資料空間或進階空間僅包含使用者資料或儲存為資料的使用者程式。

## Data Set Command Line Interface (DS CLI)

一個軟體包，允許開放系統主機呼叫和管理複製服務功能以及設定和管理儲存複合體中的所有儲存單元。 DS CLI 是一個全功能指令集。

## Data sharing

多個主機系統同時利用它們儲存在一個或多個儲存裝置上的資料的能力。儲存系統使得所設定的儲存能夠被任何或所有附接的主機系統存取。要使用此功能，主機程式必須設計為支援其共享的資料。

## DC

參見直流電。

## DC-UPS (Direct Current-Uninterruptible Power Supply

將輸入的交流線路電壓轉換為整流交流電壓，並包含整合式電池子系統。

## Decrypt

在加密支援中，將密文轉換為明文。另參見加密。

## Decryption

在電腦安全中，將編碼文字或密文轉換為明文的過程。將已加密的資料解碼為秘密格式的過程。解密需要金鑰或密碼。

## DELETE command (In UNIX)

使用 DELETE 指令刪除一個或多個資料集條目或分割區資料集的一個或多個成員。

## Demote

從快取中刪除邏輯資料單元。儲存伺服器降級資料單元以便為快取中的其他邏輯資料單元建立空間或因為邏輯資料單元無效。儲存系統必須先將具有活動寫入單元的邏輯資料單元降級，然後才能將其降級。另請參見 destage。

## Dense Wavelength Division Multiplexing (DWDM)

是一種將來自不同來源的資料放在光纖上的技術，每個訊號同時在其自己單獨的光波長上傳輸。使用 DWDM，最多可以將 80 個（理論上更多）單獨的波長或資料通道重複使用到單一光纖上傳輸的光流中。每個通道都承載時分複用 (TDM) 訊號。在每個通道傳輸 2.5 Gbps（每秒十億位元）的系統中，光纖每秒可傳輸多達 2,000 億位元。 DWDM 有時也稱為波分複用 (WDM)。

## Destage

儲存系統將傳入資料暫存到快取中，然後將其轉儲到磁碟。

## Device

對於 IBM Z，磁碟機。

## Device Adapter (DA)

DS8000 系列的實體組件，提供叢集和儲存裝置之間的通訊。 DS8000 系列有八個成對部署的裝置介面卡，每個叢集一個。裝置介面卡配對使 DS8000 系列能夠從兩條路徑中的任何一條存取任何磁碟機，從而提供容錯能力並增強可用性。

## Device address

對於 IBM Z，是 ESCON 裝置級幀的字段，用於選擇控制單元映像上的特定裝置。

## Device ID

標識邏輯裝置的唯一兩位十六進制數。

## device interface card

儲存叢集的實體子單元，提供與連接的裝置驅動模組的通訊。

## Device number

對於 IBM Z，四個十六進位字元標識符，例如 13A0，系統管理員將其與裝置關聯以促進程式和主機操作員之間的通訊。裝置編號與子通道相關聯。

## Device Support Facility (ICKDSF)

是用於安裝、初始化和維護 IBM DASD 的實用程式。它可以作為獨立作業執行，也可以在 z/OS 等系統下執行。 「ICK」不是任何東西的縮寫。

## DEVSER command

用於請求顯示 DASD 和磁帶裝置狀態的 z/OS 命令。回應是有關裝置、裝置群組或儲存控制單元的基本狀態資訊的顯示。由於 DEVSERV 指令導致系統向一個或多個裝置的路徑發出 I/O 請求，因此結果顯示反映了路徑的目前物理狀態。

## DFSMSdss

參見資料設施儲存管理子系統資料集服務公用程式。

## DFSORT

DFSORT 是 IBM 針對 z/OS 的高效能排序、合併、複製、分析和報告產品。

## DIMM

參見雙列直插記憶體模組。

## Direct Access Device Space Management (DADSM)

執行在直接存取儲存裝置 (DASD) 上指派或釋放空間所需的功能。 DADSM 例程控制 DASD 磁碟區上的空間配置，並根據請求提供有關磁碟區內容的資訊。 DADSM 將資訊保存在它為每個磁碟區維護的自己的資料集中：磁碟區目錄 (VTOC)。

## Direct Access Storage Device (DASD)

1) 電腦在其上儲存資料的大容量儲存媒體。 2) 磁碟裝置。

## Direct Current (DC)

是一種電流，始終沿著一個方向流動。

## Disk Drive Module (DDM)

現場可更換單元 (FRU)，由單一磁碟機及其相關包裝組成。

## Disk enclosure

DS8000 資料磁碟安裝在稱為磁碟機或儲存櫃的機櫃中。這些硬碟框成對安裝。

## Disk group

連接到相同對 IBM Serial Storage 介面卡的 4 個磁碟機的集合，可用來建立 RAID 陣列。磁碟組可以格式化為計數關鍵資料或固定區區塊，也可以格式化為 RAID 或非 RAID，也可以不格式化。磁碟組是磁碟機的邏輯組合。

## Disk Operating System (DOS)

是從硬碟執行的作業系統。

## Disk scrubbing

DS8000 會定期讀取磁碟上的所有磁區。此讀取的目的是在不影響應用程式效能的情況下進行。如果錯誤校正碼 (ECC) 偵測到可修正的壞位，則會立即修正這些位元。此功能降低了扇區中多個壞位元累積超出 ECC 修正能力的可能性。如果某個磁區包含超出 ECC 修正能力的資料，則使用 RAID 重新產生資料並將新副本寫入磁碟機的備用磁區。此清理過程適用於屬於陣列成員和備用的磁碟機。

## Disk Storage Feature Activation (DSFA)

資料儲存功能啟動 (DSFA) 應用程式提供功能啟動程式碼和授權金鑰，以從技術上啟動為 IBM 儲存產品所取得的功能。

## Distributed Network Block Device (DNBD)

使用 UDP 作為傳輸協議，因此支援多播、客戶端快取和伺服器冗餘。僅支援RO出口。

## Distributed ledger technology (DLT)

允許使用者在交易或帳戶餘額的共用資料庫中儲存和存取與給定資產集及其持有者相關的資訊。這些資訊被分發給使用者，然後使用者可以使用它來結算證券和現金等的轉移，而無需依賴可信賴的中央驗證系統。

## DNS

參見域名系統。

## Domain

1) 電腦網路中資料處理資源受到共同控制的部分。 2) 在 TCP/IP 中，分層網路中使用的命名系統。

## Domain Name System (DNS)

TCP/IP 中的伺服器程式，透過將網域名稱對應到 Internet 位址來提供名稱到位址的轉換。 DNS 伺服器的位址是託管網路 DNS 軟體的伺服器的 Internet 位址。

## DOS

參見磁碟作業系統。

## Dotted decimal notation

用於識別 IP 位址的約定。此表示法由四個以 10 為基數的 8 位數字組成。例如，9.113.76.250 是包含八位元位元組 9、113、76 和 250 的 IP 位址。

## DRAM

參見動態隨機存取記憶體。

## Drawer

包含多個驅動器模組並提供電源、冷卻和相關互連邏輯以使驅動器模組可供連接的主機系統存取的單元。

## Drive

驅動器可以是磁性驅動器或固態驅動器 (SSD)。現場可更換單元，由單一驅動器及其相關包裝組成。

## DS CLI

參見資料集命令列介面。

## DS Network Interface (DSNI)

參見企業儲存伺服器網路介面。

## DS8000 series

參見 IBM DS8000。

## DS8000 Storage Management GUI

參見IBM DS 儲存管理器。

## Dual In-line Memory Module (DIMM)

是雙SIMM（單列直插記憶體模組）。它是一種模組，在一區塊小電路板上包含一個或多個隨機存取記憶體 (RAM) 晶片，並透過引腳將其連接到電腦主機板。 DIMM 具有 168 針連接器並支援 64 位元資料傳輸。

## Duplex

1) 關於複製服務，遠端鏡像和複製完成複製操作並且磁碟區對已同步後磁碟區對的狀態。 2) 一般而言，屬於可以同時傳送和接收資料的通訊模式。

## Dynamic Address Translation (DAT)

當CPU使用虛擬位址存取主記憶體時，它首先透過動態位址轉換(DAT)轉換為真實位址，然後透過加前綴轉換為絕對位址。

## Dynamic CHPID Management (DCM)

能夠讓系統根據目前工作負載及其服務目標動態管理連接到 DASD 子系統的 ESCON 和 FICON 橋接器（FICON 轉換器或 FCV）。

## Dynamic Partition Manager (DPM)

是 HMC 中的開機管理介面，可用於定義 IBM Z 硬體和虛擬基礎架構，包括為 IBM Z Systems 環境執行 KVM 的整合動態 I/O 管理。

## Dynamic Random Access Memory (DRAM)

一種記憶體，通常用於儲存電腦處理器運作所需的資料或程式碼。 DRAM 是個人電腦 (PC)、工作站和伺服器中使用的常見隨機存取記憶體 (RAM)。隨機存取允許 PC 處理器直接存取記憶體的任何部分，而不必從起始位置按順序進行。 RAM 靠近電腦處理器，比硬碟和固態硬碟等儲存媒體能夠更快存取資料。

## Dynamic volume expansion

儲存系統在線上時將主機磁碟區容量增加到最大大小的能力。
## Data Set List (DSLIST)

ISPF Utilities option `3.4` 的資料集清單工具，可依 data set name pattern 列出資料集，並從清單中執行 browse、view、edit、information、member list、copy、delete、rename、VTOC information 等操作。它是 z/OS 維運與升級查核時最常用的 ISPF 入口之一。
