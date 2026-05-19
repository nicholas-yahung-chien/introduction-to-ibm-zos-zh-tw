# IBM Z 詞彙表：T

[返回詞彙表索引](./)

## Type-1, native or bare-metal hypervisors

這些虛擬機器管理程式直接在主機的硬體上執行，以控制硬體並管理來賓作業系統。因此，它們有時被稱為裸機管理程式。

## Type-2 or hosted hypervisors

這些虛擬機器管理程式就像其他電腦程式一樣在傳統作業系統上執行。來賓作業系統作為主機上的進程執行。 2 類虛擬機器管理程式從主機作業系統抽象化來賓作業系統。

## Target

一種 SCSI 裝置，可作為啟動器的從屬裝置，由一組一個或多個邏輯單元組成，每個邏輯單元都指派一個邏輯單元號碼 (LUN)。目標上的邏輯單元通常是 I/O 裝置。 SCSI 目標類似於 IBM Z 控制單元。另參見小型電腦系統介面。

## Target device

雙重複製或遠端複製磁碟區對中的裝置之一，包含來源裝置上的資料副本。與來源裝置不同，目標裝置可能只接受有限的資料子集。另參見來源裝置。

## TB

參見太字節。

## TCO

參見總擁有成本。

## TCP/IP

參見傳輸控制協定/Internet 協定。

## Telemetry

OpenStack Telemetry 為基於 OpenStack 的雲端提供使用者級使用資料。這些資料可用於客戶計費、系統監控或警報。遙測可以從現有 OpenStack 元件（例如計算使用事件）發送的通知中收集資料，或透過輪詢 OpenStack 基礎架構資源（例如 libvirt）來收集資料。遙測包括一個儲存守護進程，它透過可信任訊息傳遞系統與經過身份驗證的代理程式進行通信，以收集和聚合資料。此外，該服務使用可用於新增監視器的插件系統。您可以將 API Server、中央代理程式程式、資料儲存服務和收集器代理程式程式部署在不同的主機上。

## Terabyte (TB)

1) 名義上為 1 000 000 000 000 字節，這對於頻寬和磁碟儲存容量是準確的。 2) 對於 DS8000 快取、處理器儲存、實際和虛擬儲存，1 TB 指 240 或 1 099 511 627 776 位元組。

## Total Cost of Ownership (TCO)

是一種財務估算，旨在幫助購買者和所有者確定產品或系統的直接和間接成本。

## Tracks

圓磁碟周圍有同心圓。作業系統和磁碟機透過記錄磁軌和磁區號的範圍來追蹤資訊儲存在磁碟上的位置。

## Transport Control Word (TCW)

TCW 將前綴 CCW 和讀取或寫入 CCW 的功能組合到一個實體中，進一步減少了通道開銷。由 z 高效能 FICON (zHPF) 通道程式使用。

## Time Sharing Option (TSO)

一種作業系統選項，可從遠端終端提供互動式時間共享。

## Thin provisioning

一種機制，能夠定義大於系統上安裝的物理容量的邏輯磁碟區大小。作為主機寫入操作的結果，磁碟區根據需要配置容量。

## Tivoli Key Lifecycle Manager (TKLM)

JAVA 軟體程式，管理企業範圍內的金鑰，並為支援加密的磁帶驅動器提供用於加密和解密的金鑰。

## Tivoli Productivity Center for Replication (TPC-R)

提供對城域鏡像和全域鏡像設定以及三站點復原管理的支持，支援 IBM System Storage DS8000 城域全域鏡像和具有 HyperSwap 的城域全域鏡像。它旨在支援快速故障轉移和故障復原、三站點鏡像的快速重建、遠端站點的資料流通（以最小的滯後於本地站點）以及僅使用增量變更快速重新同步鏡像站點。

## TKLM

參見 Tivoli Key Lifecycle Manager。

## Tivoli Storage Productivity Center (TPC)

組成 Tivoli Storage Productivity Center 的產品套件的名稱。

## TPF

參見事務處理設施。

## Track

CKD 裝置上的儲存單元，可格式化以包含多個資料記錄。另參見家庭地址、軌道描述符記錄和資料記錄。

## Track address

該術語指的是標識磁碟區中每個軌道的 32 位數字。其格式為十六進位CCCCcccH，其中CCCC為柱面號的低16位，ccc為柱面號的高12位，H為四位磁軌號。為了與舊程式相容，ccc 部分是十六進位 000，用於表示基址空間中的磁軌。

## Track managed space

這個術語指的是磁碟區上以磁軌和柱面管理的空間。磁軌管理空間結束於柱面位址65519。每個資料集佔用磁軌的整數倍。所有非 EAV 上也存在軌道管理空間。

## Track Space Efficient (TSE) volumes

用作 FlashCopy Space Efficient 操作的目標磁碟區，並需要定義一個儲存庫，從中逐步配置磁軌。

## Transaction Processing Facility (TPF)

高可用性、高效能 IBM 作業系統，旨在支援即時、事務驅動的應用程式。 TPF 的專業架構旨在優化資料通訊和資料庫處理的系統效率、可靠性和回應能力。 TPF 提供大型集中式資料庫的即時查詢和更新，其中兩個方向的訊息長度都相對較短，回應時間通常小於三秒。以前稱為航空公司控製程式/交易處理設施 (ACP/TPF)。

## Transmission Control Protocol (TCP)

網際網路和任何遵循網際網路工程任務組 (IETF) 網際網路協定標準的網路中所使用的通訊協定。 TCP 在分組交換通訊網路和此類網路的互連繫統中的主機之間提供可靠的主機到主機協定。它使用網際網路協定（IP）作為底層協定。

## Transmission Control Protocol/Internet Protocol (TCP/IP)

1) 資料傳輸協定的組合，透過不同類型的互連網路在應用程式之間提供端對端連線。 2) 一套在網際網路協定上執行的傳輸和應用協定。另參見網際網路協定和傳輸控制協定。

## TRANSMIT command (In UNIX)

使用 TRANSMIT 命令將訊息和/或資料集傳送給另一個使用者。 TRANSMIT 指令將此資料轉換為特殊格式，以便可以將其傳輸給網路中的其他使用者。

## Transparency

參見軟體透明度。

## Trusted Key Entry (TKE)

一項功能，用於確保安全建立和管理金鑰材料以及管理主機上的加密介面卡。

## TSE

參見軌道空間效率。

## TSO

參見分時選項。
