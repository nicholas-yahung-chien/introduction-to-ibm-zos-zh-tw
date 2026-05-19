# IBM Z 詞彙表：L

[返回詞彙表索引](./)

## Large Form Factor (LFF)

3.5 吋硬碟 (HDD)。測量值代表驅動器外殼內磁碟片的近似直徑。

## Large Volume Support (LVS)

使用現有的 16 位元柱面尋址將 CKD（計數關鍵資料）磁碟區擴展到 65,520 個柱面。

## LAN

參見區域網路。

## LBA

參見邏輯區塊位址。

## LCU

參見邏輯控制單元。

## LDAP

參見輕量級目錄存取協定。

## Least Recently Used (LRU)

LRU 快取方案是當快取已滿並且引用快取中不存在的新頁面時刪除最近最少使用的訊框。

## LED

參見發光二極體。

## Legacy view

已被取代的硬體或軟體視圖。

## LFF

參見大尺寸。

## Libvirt

是一個用於管理平台虛擬化的開源 API、守護程式和管理工具。它可用於管理KVM、Xen、VMware ESX、QEMU和其他虛擬化技術。這些 API 廣泛用於開發基於雲端的解決方案的虛擬機器管理程式的編排層。

## LIC

參見許可證內碼。

## LICCC

參見許可內碼設定控制。

## License key

是驗證授權軟體產品存取的資料字串。這種類型的軟體安全有助於防止軟體盜版，並使組織能夠保護其軟體免遭未經許可的使用者未經授權的複製或分享。

## License Internal Code (LIC)

啟用伺服器上的硬體的軟體。它由系統靈活服務處理器（FSP）控制。它初始化硬體，以便系統啟動並正確執行，並為作業系統提供與硬體互動的介面。

## Licensed Internal Code Configuration Control (LICCC)

透過啟動額外的（先前安裝的）未使用的容量，無需更改硬體即可進行伺服器升級。

## Licensed Machine Code (LMC)

IBM 不將微代碼作為機器的一部分出售，而是授權給客戶。 LMC 是在使用者程式無法尋址的儲存部分中實現的。一些 IBM 產品使用它來實現功能，作為硬連線電路的替代方案。

## Lightweight Directory Access Protocol (LDAP)

定義存取和更新目錄中資訊的標準方法。

## Light-Emitting Diode (LED)

啟動時顯示可見光或紅外線光的半導體晶片。

## Link address

在 ESCON 介面上，訊框中來源位址或目標位址的一部分，ESCON 使用該部分透過 ESCON 導向器路由訊框。 ESCON 將連結位址與 ESCON 控制器上的特定交換器連接埠相關聯。同樣，它將鏈路位址與連接到交換器連接埠的通道子系統或控制單元鏈路級功能相關聯。

## Link-level facility

控制單元或通道子系統的 ESCON 硬體和邏輯功能，允許透過 ESCON 寫入介面和 ESCON 讀取介面進行通訊。

## Linux

是管理電腦軟硬體資源並為電腦程式提供通用服務的系統軟體。

## LinuxONE

基於 IBM Z 技術構建，專為純 Linux 環境而設計。 LinuxONE Empire 建構於 IBM z13 大型主機及其 z13 CPU 之上，而它的弟弟 Rockhopper 使用較舊的 z12 處理器。

## LISTALC command (In UNIX)

使用 LISTALC 指令取得目前指派的資料集的清單。不含操作數的 LISTALC 顯示所有目前指派的資料集名稱的清單。

## LISTCAT command (In UNIX)

使用 LISTCAT 指令列出目錄中的條目。可以按名稱或條目類型選擇列出的條目，並且還可以選擇要為每個條目列出的欄位。

## LISTDS command (In UNIX)

使用 LISTDS 指令可以在終端機上顯示特定資料集的屬性。 LISTDS 指令對於 VSAM 的工作方式與非 VSAM 資料集的工作方式不同。 VSAM 資料集使 LISTDS 指令僅顯示資料集組織，即 VSAM。使用 LISTCAT 指令取得有關 VSAM 資料集的詳細資訊。

## Local Area Network (LAN)

位於有限地理區域內的使用者場所的電腦網路。

## Log Structured File System (LFS)

LFS 是一種檔案系統，其中資料和元資料會依序寫入循環緩衝區（稱為日誌）。

## Logical Block Address (LBA)

DS8000 系列配置給磁碟區的位址。

## Logical Control Unit (LCU)

LCU 相當於邏輯子系統(LSS)。與 LSS 類似，LCU 最多可以有 256 個邏輯裝置或磁碟區。

## Logical device

與直接到單一主機可存取的模擬 I/O 裝置的 I/O 操作處理相關的儲存伺服器（例如 DS8000 系列）的設施。關聯的儲存稱為邏輯磁碟區。邏輯裝置被對應到一個或多個主機可尋址單元，例如IBM Z I/O介面上的裝置或SCSI I/O介面上的邏輯單元，使得向I/O可尋址單元發起I/O操作的主機與關聯邏輯裝置上的儲存進行互動。

## Lightweight Directory Access Protocol (LPAP)

是一種協議，使目錄資訊可用。

## Logical Partition (LPAR)

對於 IBM Z，這是一組建立程式設計環境的函數，其中在處理器上建立多個邏輯分區 (LPAR)。 LPAR 在概念上類似於虛擬機器環境，只不過 LPAR 是處理器的功能。此外，LPAR 不依賴作業系統來建立虛擬機器環境。 （僅限 DS8000 系列）。

## Logical path

1) 通道映像和控制單元映像之間的關係，指定用於這些映像之間的裝置級通訊的實體路徑。邏輯路徑是透過交換鏈路級訊框作為通道和控制單元初始化過程的一部分而建立的。 2) 透過遠端鏡像和複製功能，來源邏輯子系統 (LSS) 和目標 LSS 之間的關係透過用於遠端鏡像和複製功能的互連結構在物理路徑上建立。 LSS 是主要控制單元，執行通道映像的功能。

## Logical Subsystem (LSS)

由最多 256 個邏輯裝置組成的拓樸結構。 DS8000 儲存系統最多可以有（如果只有 CDK）32 個 CKD 格式的邏輯子系統（8192 個 CKD 邏輯裝置）或（如果只有 FBA）最多 32 個固定區區塊邏輯子系統（8192 個固定區區塊邏輯裝置）。如果混合使用 CKD 和 FBA，DS8000 系列最多可擁有 16 個 CKD 格式的邏輯子系統（4096 個 CKD 邏輯裝置）和最多 16 個固定區區塊邏輯子系統（4096 個固定區區塊邏輯裝置）。邏輯子系統有助於 DS8000 系列的設定，並且可能對某些功能的操作有其他影響。 CKD 邏輯子系統和 IBM Z 控制單元映像之間存在一對一的對應。對於 IBM Z 主機，邏輯子系統代表邏輯控制單元 (LCU)。每個控制單元映像僅與一個邏輯子系統相關聯。另參見控制單元影像。

## Logical unit

在開放系統中，邏輯磁碟機。

## Logical Unit Number (LUN)

在 SCSI 協定中，SCSI 總線上使用的唯一編號，使其能夠區分不同的裝置，每個裝置都是邏輯單元。儲存系統向主機報告的邏輯單元號碼。主機使用 LUN 來識別 SCSI 指令的磁碟區。

## Logical volume

與邏輯磁碟機關聯的儲存媒體。邏輯磁碟區通常駐留在一個或多個儲存裝置上。 DS8000 管理員定義此儲存單元。當邏輯磁碟區駐留在 RAID 格式的陣列上時，邏輯磁碟區會分佈在陣列中的磁碟機上。

## Logical Volume Manager (LVM)

一組系統命令、函式庫例程和其他工具，允許使用者建立和控制邏輯磁碟區儲存。 LVM 在儲存空間的邏輯視圖和實體驅動模組之間對應資料。

## Longitudinal Redundancy Check (LRC)

1) 資料傳輸期間的錯誤檢查方法，涉及檢查作為形成矩陣的集合的成員的一行二進制數字的奇偶校驗。縱向冗餘校驗也稱為縱向奇偶校驗。 2) DS8000系列用於定位錯誤的機制。 LRC 在資料從主機通過 DS8000 控制器進入裝置介面卡並到達陣列時檢查資料。

## Longwave cable

長波雷射的波長約為1300nm。用於光纖通道交換器和網橋之間距離長達 10K 的情況。

## Loop

DS8000 儲存系統中一對裝置介面卡之間的實體連接。另參見裝置介面卡。

## LPAR

參見邏輯分割區。

## LSS

參見邏輯子系統。

## LUN

參見邏輯單元號碼。

## LVM

參見邏輯磁碟區管理器。

## LXC (Linux Containers)

是一種作業系統級虛擬化方法，用於使用單一 Linux 核心在控制主機上執行多個隔離的 Linux 系統（容器）。

## LXD

是一個守護進程，它提供 REST API 來驅動 LXC 容器。其主要目標是提供與虛擬機器類似的使用者體驗，但使用 Linux 容器而不是硬體虛擬化。
## Line command (ISPF)

在 ISPF 清單左側輸入欄位中針對單一列執行的命令，例如在 data set list 中對某列輸入 `B` browse、`E` edit、`I` information。Line command 與打在 `Command ===>` 的 primary command 不同；它通常只作用於被輸入命令的那一列。
