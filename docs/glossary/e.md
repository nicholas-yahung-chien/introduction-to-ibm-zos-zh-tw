# IBM Z 詞彙表：E

[返回詞彙表索引](./)

## each record is represented by up to three fields

一個計數字段，用於標識記錄並指定其格式；一個可選的關鍵字段，用於標識資料區域內容；以及一個可選的資料字段，通常包含使用者資料。對於儲存系統上的 CKD 記錄，邏輯磁碟區大小是根據裝置模擬模式（3390 或 3380 磁軌格式）定義的。計數欄位始終為 8 位元組長，包含金鑰欄位和資料欄位的長度，金鑰欄位的長度為 0 到 255 位元組，資料欄位的長度為 0 到 65 535 或適合軌道的最大值。另參見資料記錄。

## EAM

參見範圍配置方法。

## EAV

參見擴充地址磁碟區。

## Easy Tier

是一種內建的動態資料重定位功能，可在儲存系統資源之間進行主機透明的資料移動。此功能顯著提高了設定靈活性以及效能調整和規劃。

## EC

參見工程變更。

## ECC

參見糾錯代碼。參見橢圓曲線密碼學。

## ECKD

參見擴展計數關鍵資料。

## eDRAM

參見嵌入式 DRAM。

## ElectroStatic Discharge (ESD)

不良的靜電放電可能會損壞裝置並降低電路效能。

## Elliptic Curve Cryptography (ECC)

旨在為受限數位環境提供公鑰支援的加密功能。

## Embedded DRAM (eDRAM)

動態隨機存取記憶體 (DRAM) 是否整合在專用積體電路 (ASIC) 或微處理器的相同晶片或多晶片模組 (MCM) 上。與用作外部記憶體的同等獨立 DRAM 晶片相比，eDRAM 的每位元成本更高，但在許多應用中，將 eDRAM 放置在與處理器相同的晶片上的效能優勢超過了成本劣勢。

## Emergency Power Off (EPO)

緊急情況下關閉電源的一種方法，通常是開關。

## EMIF

參見 ESCON 多影像工具。

## Enclosure

容納儲存子系統組件的單元，例如控制單元、磁碟機和電源。

## Encrypt

在加密支援中，系統地擾亂訊息，以便在不知道編碼密鑰的情況下無法讀取訊息。另參見解密。

## Encryption

在電腦安全中，將資料轉換為難以理解的形式的過程，使得原始資料要么無法獲得，要么只能透過解密過程才能獲得。

## Encryption algorithm

一種對資料進行加擾的演算法，使得截獲資料的人無法讀取資料。

## Encryption group

指示對等級是啟用（選擇 1）還是停用（選擇無）加密。

## Enhanced Network Block Device (ENBD)

由一位活躍的開發人員推動；有一個郵件列表，每月會看到幾條訊息。 ENBD 擴展了 NBD，添加了連接丟失時自動重啟、身份驗證以及對可移動媒體的支援。

## Extended Address Volume (EAV)

該術語指的是具有超過 65520 個柱面的磁碟區。只有 3390 A 型裝置可以是 EAV。

## Engineering change

機器、零件或程式的更新。

## Enterprise Service Bus (ESB)

它在服務導向的架構（SOA）中實現相互互動的軟體應用程式之間的通訊系統

## Enterprise Systems Architecture/390 (ESA/390)

用於大型電腦和周邊裝置的 IBM 體系結構。遵循 ESA/390 架構的處理器系統包括 ES/9000 系列。另參見 z/Architecture。

## Enterprise Class configuration

高密度、高效能儲存設定，包括標準磁碟機箱和高效能快閃儲存機箱，並透過最大限度地增加裝置介面卡和儲存機箱路徑的數量來優化和設定效能和吞吐量。

## Enterprise Storage Server Network Interface (ESSNI)

是與 DS GUI 伺服器通訊並與 DS8880 的兩個處理器節點互動的邏輯伺服器。也稱為 DS 網路介面 (DSNI)。

## Enterprise Systems Connection (ESCON)

1) IBM Z 電腦外圍介面。 I/O 介面透過串行介面使用 IBM Z 邏輯協議，將連接的單元設定到通訊結構。 2) 一組在企業內提供動態連線環境的 IBM 產品與服務。

## Entropy Encoding

是一種獨立於介質具體特性的無損耗資料壓縮方案。

## EPS

參見緊急斷電。

## ERDS

參見錯誤記錄資料集。

## Error Correction Code (ECC)

檢查讀取或傳輸的資料是否有錯誤，並在發現錯誤後立即修正。 ECC 與奇偶校驗類似，不同之處在於它在檢測到錯誤後立即修正。

## Error-Recording Data Set (ERDS)

在 IBM Z 主機上，記錄資料儲存和資料檢索錯誤的資料集。服務資訊訊息 (SIM) 提供 ERDS 的錯誤訊息。

## Error recovery procedure

旨在協助隔離裝置錯誤並在可能的情況下恢復裝置錯誤的程式。這些程式通常與記錄機器故障資訊的程式結合使用。

## ESCD

參見 ESCON 主任。

## ESCON

參見企業系統連線。

## ESCON channel

支援 ESCON 協定的 IBM Z 通道。

## ESCON Director (ESCD)

一種 I/O 介面交換機，允許分佈式星形拓撲中的多個 ESCON 介面互連。

## ESCON host systems

使用 ESCON 轉接器連接到 DS8000 系列的 IBM Z 主機。此類主機系統在包含 z/OS、VSE、TPF 或 VM 版本的作業系統上運作。

## ESCON Multiple Image Facility (EMIF)

對於 IBM Z，此功能透過為每個 LPAR 提供其自己的通道子系統映像，使 LPAR 能夠共用 ESCON 通道路徑。

## EsconNet

在 DS8000 儲存管理 GUI 中，偽主機圖示上的標籤，代表使用 ESCON 協定的主機連接，並且在 DS8000 系列上未完全定義。另參見偽主機和任意存取模式。

## ESD

參見靜電放電。

## ESE

參見範圍空間效率。

## ESSNet

參見 IBM 企業儲存伺服器網路。

## ESSNI

參見企業儲存伺服器網路介面。

## Evaluation Assurance Level (EAL)

IT 產品或系統的評估保證等級（EAL1 到 EAL7）是在完成通用標準安全評估後配置的數位等級，通用標準安全評估是自 1999 年起生效的國際標準。不斷提高的保證等級反映了獲得通用標準認證必須滿足的附加保證要求。更高等級的目的是提高系統主要安全功能得到可靠實現的信心。 EAL級別並不衡量系統本身的安全性，它只是說明系統在哪個級別進行了測試。

## Extended Count Key Data (ECKD)

計數金鑰資料 (CKD) 架構的擴展。

## Extended Addressing Space (EAS)

在擴展地址磁碟區上，該術語指地址等於或大於 65,536 的柱面。這些柱面位址以 28 位元柱面編號表示。

## Extended Address Volume (EAV)

包含超過 65,520 個汽缸的體積。擴充位址磁碟區透過更改 ECKD（擴展計數金鑰資料）磁碟區上磁軌的定址方式，將每個磁碟區的可定址 DASD 儲存量增加到超過 65,520 個柱面。

## Extent

磁碟上被特定資料集、資料空間或檔案所佔用或保留的連續空間。增量的單位是磁軌。另请参阅多重連屬關係和平行存取磁碟區。

## Extent Allocation Method (EAM)

定義如何在擴充池的列上指派磁碟區擴充。

## Extent pool

一組範圍。另參見範圍。

## Extent Space-Efficient

一種精簡設定方法，在池或 ESE 儲存庫（如果是根據需要建立的）中，以效能高效的方式在池或 ESE 儲存庫中以效能高效的方式配置容量。

## Extent Space Efficient (ESE) volumes

是主機應用程式可以使用的實際精簡設定磁碟區。 ESE 邏輯磁碟區的動態配置增量是基於用於標準磁碟區的相同現有 1 GB 擴充。

## Extensible Markup Language (XML)

是一種標記語言，它定義了一組規則，用於以人類可讀和機器可讀的格式對文件進行編碼。
