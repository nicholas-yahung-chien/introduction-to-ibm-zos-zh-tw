# IBM Z 詞彙表：P

[返回詞彙表索引](./)

## PaaS

參見平台即服務。

## PAM

參見可插入身份驗證模組。

## Panel

顯示幕上顯示的資訊的格式化顯示。

## Parallel Access Volume (PAV)

DS8000 系列的一項授權功能，使 z/OS 系統能夠透過將單一控制單元映像的多個裝置與單一邏輯裝置相關聯，針對計數關鍵資料邏輯磁碟區髮出並發 I/O 請求。最多可以為一個 PAV 配置八個裝置位址。 PAV 功能允許對相同邏輯磁碟區進行兩個或多個並發寫入操作，只要寫入操作不在同一範圍內即可。

## Parallel Sysplex License Charge (PSLC)

並行系統綜合體許可證的費用。

## Parity

電腦系統中用於確保資料完整性的資料檢查方案。如果磁碟機發生故障，RAID 實作將使用奇偶校驗來重新建立資料。

## Partitioned Data Set (PDS)

是包含多個成員的資料集，每個成員保存一個單獨的子資料集，類似於其他類型檔案系統中的目錄。

## Partitioned Data Set Extended (PDSE)

是由 DFSMS 管理的資料集類型。從外部來看，PDSE 與 PDS 非常相似。在内部，PDSE 具有不同的目录结构、成员格式和记录格式。通过用于存取 PDS 目录或成员的大多数介面，PDSE 与 PDS 无法区分。所有 ISPF 功能都支援 PDSE。

## Path group

在 IBM Z 架構中，定義為與單一邏輯分區 (LPAR) 關聯的控制單元的一組通道路徑。通道路徑處於群組狀態並且與主機線上。另參見邏輯分割區。

## PAV

參見並行存取磁碟區。

## PCHID

參見物理通道路徑標識符。

## PCI

參見外圍組件互連。

## PCIe

參見外圍組件互連 Express。

## PDF

參見程式開發工具。

## PDS

參見分區資料集。

## PDSE

參見擴展分區資料集。

## PDU

參見協定資料單元。

## PDU

參見配電單元。

## Peripheral Component Interconnect (PCI)

系統匯流排和相關協定的體系結構，支援將介面卡卡連接到系統背板。

## Peripheral Component Interconnect Express (PCIe or PCIe)

是一種串列擴展匯流排標準，用於將電腦連接到一個或多個週邊裝置。與 PCI 和 PCI-X 等平行匯流排相比，PCIe 提供更低的延遲和更高的資料傳輸速率。每個透過 PCIe 連結連接到主機板的裝置都有自己專用的點對點連接。這意味著裝置不會競爭頻寬，因為它們不共用同一總線。

## Peer-to-Peer Remote Copy (PPRC)

是將儲存磁碟區複製到遠端站台中的另一個控制單元的協定。同步 PPRC 導致主磁碟區的每次寫入也會對輔助磁碟區執行，且僅當主磁碟區和輔助磁碟區的更新完成時，I/O 才會被視為完成。當時間允許時，非同步 PPRC 將標記主磁軌上的軌道以將其複製到輔助磁軌。

## Performance Groups

用於為效能策略指派數值。

## Peripheral

定義為以某種方式連接到電腦並與電腦一起工作的任何輔助裝置，例如磁帶驅動器、磁碟機、滑鼠或鍵磁碟。

## Persistent FlashCopy

FlashCopy 關係無限期保留直到使用者刪除的狀態。後台複製完成後，來源磁碟區和目標磁碟區之間的關係將保持不變。

## PFI

參見預測故障分析。

## Physical Channel Path Identifier (PCHID)

指定與其實體位置相關的實體通道標識符。

## Physical path

透過連接兩個單元的 I/O 互連結構的單一路徑。對於複製服務，這是從一個 DS8000 儲存系統上的主機介面卡（透過佈線和交換器）到另一個 DS8000 儲存系統上的主機介面卡的路徑。

## Pinned data

保存在快取中的資料，直到錯誤情況得到糾正並且可以將其移至磁碟儲存，或直到資料被主機命令丟棄。固定資料條件只能在 ESS 800 型執行快速寫入或雙複製功能期間發生。

## PKI

參見公鑰基礎設施。

## Platform As A Service (PaaS)

平台即服務 (PaaS) 或應用程式平台即服務 (aPaaS) 是雲端運算服務的一類，它提供了一個平台，允許客戶開發、執行和管理應用程式，而無需構建和維護通常與開發和啟動應用程式相關的基礎設施的複雜性。 PaaS 可以透過兩種方式交付： 作為供應商提供的公有雲服務，消費者以最少的設定選項控制軟體部署，供應商提供網路、伺服器、儲存、作業系統、中介軟體、資料庫和其他服務來託管消費者的應用程式；或作為防火牆內的專用服務（軟體或裝置），或作為部署在公用基礎架構上的軟體作為服務。

## Pluggable Authentication Module (PAM)

將多個低階身份驗證方案整合到高階 API 中的機制。它允許依賴身份驗證的程式獨立於底層身份驗證方案而編寫。

## Point-to-point connection

支援連接埠直接互連的光纖通道拓撲。另參見仲裁環路和交換結構。

## Port

主機介面卡上到將 DS8000 儲存系統連接到主機、交換器或另一個 DS8000 儲存系統的電纜的實體連接。 DS8000 系列使用每個轉接器有兩個連接埠的 SCSI 和 ESCON 主機轉接器，以及只有一個連接埠的光纖通道主機轉接器。另參見 ESCON、光纖通道、主機介面卡和小型電腦系統介面。

## Portable Operating System Interface (POSIX)

POSIX 是一組基於 UNIX 作業系統的標準作業系統介面。

## Positional operands (In UNIX)

位置操作數以一定順序跟隨在指令名稱之後。在本主題的命令描述中，位置操作數以小寫字元顯示。當輸入的位置運算元是多個名稱或值的清單時，必須將該清單括在括號內。

## PostgreSQL

Postgres 通常簡稱為 Postgres，是一個物件關聯式資料庫管理系統 (ORDBMS)，強調可擴展性和標準合規性。作為資料庫伺服器，其主要功能是安全地儲存資料並傳回該資料以回應其他軟體應用程式的請求。它可以處理從小型單機應用程式到具有許多並髮使用者的大型導向網際網路的應用程式（或用於資料倉儲）的工作負載；在 macOS 伺服器上，PostgreSQL 是預設資料庫；它也適用於 Microsoft Windows 和 Linux。

## Power Distribution Unit (PDU)

一種電氣組件，用於配置和管理資料中心環境中電腦、伺服器和網路裝置的電力供應。它提供了一個中央單元來控制和配置資料中心組件的電力。配電單元也稱為主配電單元 (MDU)。

## Power Supply Unit (PSU)

將交流電源轉換為低壓穩壓直流電源，用於電腦內部組件。

## PPS

參見主電源。

## Predictive Failure Analysis (PFA)

可以透過保留讀寫錯誤的內部統計資料來預測某些形式的故障。如果錯誤率超過預定閾值，則建議更換磁碟機。由於驅動器尚未發生故障，因此可以將資料直接複製到備用驅動器。這種複製功能避免了使用 RAID 復原將所有資料重建到備用磁碟機上。

## Preventive Service Planning (PSP)

是訊息，包含適用於機器硬體和軟體的最新資訊。在所有系統安裝、硬體和軟體更新之前應檢查 PSP 資訊。 PSP 資訊由 IBM 軟體支援中心提供，以便在安裝許可程式、累積 PTF 套件或硬體時使用。它也可用於訂購預防性服務計劃資訊並定期查看建議的高影響力 PERvasive (HIPER) 修復或訂購 HIPER PTF 群組。 HIPER PTF 組每隔一週更新一次。

## Primary control program (PCP)

該程式提供作業的順序調度和基本作業系統功能。

## Primary control unit

遠端鏡像和複製主裝置物理連接到的 DS8000 儲存系統。

## Primary Power Supply (PPS)

將交流輸入電壓轉換為直流電壓的寬範圍電源。

## PRINTDS command (In UNIX)

使用 PRINTDS 指令在作業輸入子系統 (JES) 定義的任何印表機上格式化和列印資料集。

## Processor

計算裝置的關鍵組件，包含解釋和執行輸入裝置的電訊號所需的電路。它的基本工作是接收輸入並提供適當的輸出。也稱為 CPU 或核心。

## Processor complex

定義大型主機的一組硬件，包括機箱中的中央處理單元、記憶體、通道、控制器和電源。也稱為“中央電子綜合體（CEC）”。

## Processor node

儲存伺服器的一個分區，能夠執行儲存伺服器的所有定義功能。多個處理器複合體提供冗餘。

## Processor Resource System Manager (PR/SM)

是一個 type-1 Hypervisor（虛擬機器監視器），允許多個邏輯分區共用實體資源，例如 CPU、I/O 通道和直接存取儲存裝置 (DASD)。它與所有 IBM Z 大型主機整合。

## PROFILE command (In UNIX)

PROFILE 指令建立、變更或列出您的使用者設定檔。您的個人資料中的資訊告訴系統您希望如何使用您的終端。

## Program

在電腦上，控制電腦操作的軟體的通用術語。通常，程式是執行多個相關任務的軟體模組的邏輯組合。

## Program Development Facility (PDF)

提供面板驅動的選單介面和許多服務，使用者可以透過這些服務處理主機上儲存的原始程式碼和資料。

## Program Temporary Fix (PTF)

針對 IBM 診斷出的由於目前未更改的許可程式版本中存在缺陷而導致的問題的臨時解決方案或繞過方案。

## Promote

將邏輯資料單元加入到快取中。

## Protocol Data Unit (PDU)

在給定層的協定中指定的資料單元，由該層的協定控制資訊和可能的該層的使用者資料組成。

## PR/SM

參見處理器資源系統管理員。

## Pseudo host

一種未明確定義到 DS8000 儲存系統且有權存取 DS8000 儲存系統上設定的至少一個磁碟區的主機連線。 FiconNet 偽主機圖示代表 FICON 協定。 EsconNet偽主機圖示代表ESCON協定。標記為 Anonymous 的偽主機圖示表示透過 FCP 協定連接的主機。匿名主機是偽主機常用的同義詞。 DS8000系列僅在設定為access-any模式時才新增偽主機圖示。另參見存取任意模式。

## PSP

參見預防性服務計劃。

## PSU

參見電源單元。

## PTF

參見程式臨時修復。

## Public Key Infrastructure (PKI)

支援公用加密金鑰的分發和識別，使使用者和電腦能夠透過網際網路等網路安全地交換資料並驗證對方的身份。

## PV Links

物理磁碟區連結的縮寫，是惠普的替代路徑解決方案，提供到磁碟區的多個路徑以及靜態負載平衡。
## Panel (ISPF)

ISPF 與使用者互動的畫面單位。Panel 可包含選單、輸入欄位、scrollable data display、message、action bar 與 function key 提示。使用者通常在 panel 的 `Command ===>` 或 `Option ===>` 欄位輸入命令或選項。

## Primary command (ISPF)

輸入在 ISPF `Command ===>` 欄位的命令，通常影響目前整個 panel 或清單，例如 `FIND`、`LOCATE`、`SORT`、`SAVE`、`SWAP`、`TSO command`。Primary command 與 line command 相對，後者是輸入在清單特定列左側的命令。

## Primary Option Menu (POM)

ISPF 啟動後通常看到的主選單，提供 `0 Settings`、`1 View`、`2 Edit`、`3 Utilities`、`6 Command` 等主要入口。POM 是 ISPF 操作的起點，也常顯示 user id、system id、terminal、time、release 等 session 狀態資訊。
