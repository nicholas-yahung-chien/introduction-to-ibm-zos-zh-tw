# Subtitle Alignment Audit

Generated at: 2026-05-20T01:19:32.738Z

This report checks structural alignment between English and Traditional Chinese WebVTT files. It catches deterministic issues such as mismatched cue counts, mismatched ids/timecodes, empty cues, punctuation-only cues, suspiciously short cues, likely merged cues, and near-duplicates. It does not prove semantic correctness; flagged windows should be reviewed against audio and source English cues.

## Summary

| Video | Kaltura | EN cues | ZH cues | High | Medium | Low |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| course-introduction | 1_ru7q9spi | 57 | 57 | 0 | 5 | 0 |
| computer-architecture | 1_vb8qf96d | 206 | 206 | 0 | 6 | 2 |
| mainframe-architecture | 1_7e45b5a8 | 56 | 56 | 0 | 3 | 0 |
| virtualization | 1_1fl2qymd | 155 | 155 | 0 | 3 | 1 |
| what-is-an-operating-system | 1_jicvw3wr | 55 | 55 | 0 | 4 | 0 |
| mainframe-operating-systems | 1_q1drndng | 117 | 117 | 0 | 30 | 0 |
| why-use-mainframes | 1_rqvsd0rw | 43 | 43 | 0 | 9 | 0 |
| ibm-z-components | 1_j4rkx3qu | 44 | 44 | 0 | 28 | 0 |
| mainframe-features | 1_1v889967 | 100 | 100 | 0 | 3 | 1 |
| millicode | 1_lwog53qm | 21 | 21 | 0 | 5 | 0 |
| hmc-and-se | 1_6kwwnujx | 100 | 100 | 0 | 4 | 0 |
| sysplex | 1_0umo87q5 | 107 | 107 | 0 | 6 | 0 |
| zos-security | 1_b3hd3sa0 | 57 | 57 | 0 | 2 | 0 |
| transaction-level-security | 1_1ndlj8bd | 71 | 71 | 0 | 3 | 0 |
| crypto-express-key-management | 1_52mzshqn | 26 | 26 | 0 | 5 | 0 |
| iocds | 1_5hs3mb8z | 164 | 164 | 0 | 9 | 0 |
| activation-profiles | 1_hchvg5wh | 45 | 45 | 0 | 2 | 1 |
| ipling-an-operating-system | 1_c1w1vq9x | 50 | 50 | 0 | 6 | 0 |

## Priority Review Queue

- MEDIUM activation-profiles cue 9 00:00:40.130 --> 00:00:44.030: near_duplicate_previous_zh_cue - Similar to previous cue 8
- MEDIUM activation-profiles cue 23 00:01:55.470 --> 00:01:59.990: long_zh_cue - ZH length 36; 8.0 chars/sec
- MEDIUM computer-architecture cue 8 00:00:20.820 --> 00:00:22.300: near_duplicate_previous_zh_cue - Similar to previous cue 7
- MEDIUM computer-architecture cue 99 00:03:57.420 --> 00:03:58.660: long_zh_cue - ZH length 19; 15.3 chars/sec
- MEDIUM computer-architecture cue 173 00:06:40.540 --> 00:06:42.780: near_duplicate_previous_zh_cue - Similar to previous cue 172
- MEDIUM computer-architecture cue 184 00:07:05.140 --> 00:07:07.300: long_zh_cue - ZH length 24; 11.1 chars/sec
- MEDIUM computer-architecture cue 185 00:07:07.300 --> 00:07:08.700: long_zh_cue - ZH length 18; 12.9 chars/sec
- MEDIUM computer-architecture cue 193 00:07:25.580 --> 00:07:26.580: long_zh_cue - ZH length 12; 12.0 chars/sec
- MEDIUM course-introduction cue 4 00:00:17.660 --> 00:00:26.540: long_zh_cue - ZH length 41; 4.6 chars/sec
- MEDIUM course-introduction cue 10 00:00:51.260 --> 00:00:55.180: long_zh_cue - ZH length 36; 9.2 chars/sec
- MEDIUM course-introduction cue 10 00:00:51.260 --> 00:00:55.180: possibly_merged_zh_cue - Chinese cue has multiple sentence endings in a short time window
- MEDIUM course-introduction cue 11 00:00:55.180 --> 00:00:55.740: long_zh_cue - ZH length 7; 12.5 chars/sec
- MEDIUM course-introduction cue 16 00:01:10.540 --> 00:01:19.900: long_zh_cue - ZH length 36; 3.8 chars/sec
- MEDIUM crypto-express-key-management cue 1 00:00:03.060 --> 00:00:07.060: long_zh_cue - ZH length 47; 11.8 chars/sec
- MEDIUM crypto-express-key-management cue 14 00:00:48.060 --> 00:00:52.060: long_zh_cue - ZH length 46; 11.5 chars/sec
- MEDIUM crypto-express-key-management cue 17 00:00:59.060 --> 00:01:04.060: long_zh_cue - ZH length 43; 8.6 chars/sec
- MEDIUM crypto-express-key-management cue 19 00:01:10.060 --> 00:01:15.060: long_zh_cue - ZH length 42; 8.4 chars/sec
- MEDIUM crypto-express-key-management cue 24 00:01:39.060 --> 00:01:45.060: long_zh_cue - ZH length 39; 6.5 chars/sec
- MEDIUM hmc-and-se cue 2 00:00:09.980 --> 00:00:17.620: long_zh_cue - ZH length 36; 4.7 chars/sec
- MEDIUM hmc-and-se cue 4 00:00:24.100 --> 00:00:25.700: long_zh_cue - ZH length 21; 13.1 chars/sec
- MEDIUM hmc-and-se cue 10 00:00:48.780 --> 00:00:57.340: long_zh_cue - ZH length 41; 4.8 chars/sec
- MEDIUM hmc-and-se cue 80 00:04:15.180 --> 00:04:15.900: long_zh_cue - ZH length 8; 11.1 chars/sec
- MEDIUM ibm-z-components cue 1 00:00:04.270 --> 00:00:15.270: long_zh_cue - ZH length 67; 6.1 chars/sec
- MEDIUM ibm-z-components cue 5 00:00:30.270 --> 00:00:38.270: long_zh_cue - ZH length 43; 5.4 chars/sec
- MEDIUM ibm-z-components cue 8 00:00:52.270 --> 00:01:03.270: long_zh_cue - ZH length 39; 3.5 chars/sec
- MEDIUM ibm-z-components cue 9 00:01:03.270 --> 00:01:12.270: long_zh_cue - ZH length 35; 3.9 chars/sec
- MEDIUM ibm-z-components cue 11 00:01:17.270 --> 00:01:29.270: long_zh_cue - ZH length 44; 3.7 chars/sec
- MEDIUM ibm-z-components cue 13 00:01:36.270 --> 00:01:45.270: long_zh_cue - ZH length 38; 4.2 chars/sec
- MEDIUM ibm-z-components cue 14 00:01:45.270 --> 00:01:55.270: long_zh_cue - ZH length 35; 3.5 chars/sec
- MEDIUM ibm-z-components cue 16 00:01:58.270 --> 00:02:08.270: long_zh_cue - ZH length 39; 3.9 chars/sec
- MEDIUM ibm-z-components cue 17 00:02:08.270 --> 00:02:18.270: long_zh_cue - ZH length 40; 4.0 chars/sec
- MEDIUM ibm-z-components cue 19 00:02:26.270 --> 00:02:37.270: long_zh_cue - ZH length 56; 5.1 chars/sec
- MEDIUM ibm-z-components cue 20 00:02:37.270 --> 00:02:49.270: long_zh_cue - ZH length 42; 3.5 chars/sec
- MEDIUM ibm-z-components cue 21 00:02:49.270 --> 00:02:58.270: long_zh_cue - ZH length 44; 4.9 chars/sec
- MEDIUM ibm-z-components cue 22 00:02:58.270 --> 00:03:12.270: long_zh_cue - ZH length 66; 4.7 chars/sec
- MEDIUM ibm-z-components cue 23 00:03:12.270 --> 00:03:25.270: long_zh_cue - ZH length 63; 4.8 chars/sec
- MEDIUM ibm-z-components cue 24 00:03:25.270 --> 00:03:41.270: long_zh_cue - ZH length 55; 3.4 chars/sec
- MEDIUM ibm-z-components cue 25 00:03:41.270 --> 00:03:54.270: long_zh_cue - ZH length 43; 3.3 chars/sec
- MEDIUM ibm-z-components cue 26 00:03:54.270 --> 00:04:04.270: long_zh_cue - ZH length 41; 4.1 chars/sec
- MEDIUM ibm-z-components cue 27 00:04:04.270 --> 00:04:15.270: long_zh_cue - ZH length 44; 4.0 chars/sec
- MEDIUM ibm-z-components cue 28 00:04:15.270 --> 00:04:25.270: long_zh_cue - ZH length 52; 5.2 chars/sec
- MEDIUM ibm-z-components cue 29 00:04:25.270 --> 00:04:33.270: long_zh_cue - ZH length 47; 5.9 chars/sec
- MEDIUM ibm-z-components cue 31 00:04:47.980 --> 00:04:57.980: long_zh_cue - ZH length 41; 4.1 chars/sec
- MEDIUM ibm-z-components cue 32 00:04:57.980 --> 00:05:06.980: long_zh_cue - ZH length 40; 4.4 chars/sec
- MEDIUM ibm-z-components cue 35 00:05:18.980 --> 00:05:28.980: long_zh_cue - ZH length 45; 4.5 chars/sec
- MEDIUM ibm-z-components cue 36 00:05:28.980 --> 00:05:39.980: long_zh_cue - ZH length 56; 5.1 chars/sec
- MEDIUM ibm-z-components cue 38 00:05:44.980 --> 00:05:56.980: long_zh_cue - ZH length 39; 3.3 chars/sec
- MEDIUM ibm-z-components cue 40 00:06:07.980 --> 00:06:17.980: long_zh_cue - ZH length 38; 3.8 chars/sec
- MEDIUM ibm-z-components cue 43 00:06:32.980 --> 00:06:43.980: long_zh_cue - ZH length 46; 4.2 chars/sec
- MEDIUM ibm-z-components cue 44 00:06:43.980 --> 00:06:52.980: long_zh_cue - ZH length 46; 5.1 chars/sec
- MEDIUM iocds cue 4 00:00:19.010 --> 00:00:27.110: long_zh_cue - ZH length 37; 4.6 chars/sec
- MEDIUM iocds cue 6 00:00:34.110 --> 00:00:44.110: long_zh_cue - ZH length 50; 5.0 chars/sec
- MEDIUM iocds cue 8 00:00:47.110 --> 00:00:56.110: long_zh_cue - ZH length 42; 4.7 chars/sec
- MEDIUM iocds cue 9 00:00:56.110 --> 00:01:08.110: long_zh_cue - ZH length 68; 5.7 chars/sec
- MEDIUM iocds cue 11 00:01:14.110 --> 00:01:22.110: long_zh_cue - ZH length 42; 5.3 chars/sec
- MEDIUM iocds cue 42 00:03:45.110 --> 00:03:51.110: long_zh_cue - ZH length 44; 7.3 chars/sec
- MEDIUM iocds cue 67 00:05:25.110 --> 00:05:32.110: long_zh_cue - ZH length 40; 5.7 chars/sec
- MEDIUM iocds cue 75 00:05:59.110 --> 00:06:06.110: long_zh_cue - ZH length 35; 5.0 chars/sec
- MEDIUM iocds cue 102 00:07:52.110 --> 00:07:58.110: long_zh_cue - ZH length 35; 5.8 chars/sec
- MEDIUM ipling-an-operating-system cue 24 00:02:00.250 --> 00:02:03.250: possibly_merged_zh_cue - Chinese cue has multiple sentence endings in a short time window
- MEDIUM ipling-an-operating-system cue 28 00:02:15.250 --> 00:02:28.250: long_zh_cue - ZH length 49; 3.8 chars/sec
- MEDIUM ipling-an-operating-system cue 31 00:02:34.250 --> 00:02:44.250: long_zh_cue - ZH length 46; 4.6 chars/sec
- MEDIUM ipling-an-operating-system cue 32 00:02:44.250 --> 00:02:54.250: long_zh_cue - ZH length 56; 5.6 chars/sec
- MEDIUM ipling-an-operating-system cue 35 00:03:06.250 --> 00:03:13.250: long_zh_cue - ZH length 44; 6.3 chars/sec
- MEDIUM ipling-an-operating-system cue 39 00:03:24.250 --> 00:03:32.250: long_zh_cue - ZH length 40; 5.0 chars/sec
- MEDIUM mainframe-architecture cue 1 00:00:03.600 --> 00:00:08.680: long_zh_cue - ZH length 37; 7.3 chars/sec
- MEDIUM mainframe-architecture cue 6 00:00:23.520 --> 00:00:24.520: long_zh_cue - ZH length 17; 17.0 chars/sec
- MEDIUM mainframe-architecture cue 9 00:00:32.800 --> 00:00:34.800: long_zh_cue - ZH length 24; 12.0 chars/sec
- MEDIUM mainframe-features cue 40 00:01:57.850 --> 00:01:59.850: near_duplicate_previous_zh_cue - Similar to previous cue 39
- MEDIUM mainframe-features cue 70 00:03:36.850 --> 00:03:40.850: long_zh_cue - ZH length 37; 9.3 chars/sec
- MEDIUM mainframe-features cue 89 00:04:44.850 --> 00:04:48.850: long_zh_cue - ZH length 37; 9.3 chars/sec
- MEDIUM mainframe-operating-systems cue 1 00:00:03.380 --> 00:00:10.380: long_zh_cue - ZH length 37; 5.3 chars/sec
- MEDIUM mainframe-operating-systems cue 4 00:00:23.380 --> 00:00:32.380: long_zh_cue - ZH length 40; 4.4 chars/sec
- MEDIUM mainframe-operating-systems cue 5 00:00:32.380 --> 00:00:39.380: long_zh_cue - ZH length 35; 5.0 chars/sec
- MEDIUM mainframe-operating-systems cue 6 00:00:39.380 --> 00:00:49.380: long_zh_cue - ZH length 42; 4.2 chars/sec
- MEDIUM mainframe-operating-systems cue 8 00:00:58.380 --> 00:01:08.380: long_zh_cue - ZH length 47; 4.7 chars/sec
- MEDIUM mainframe-operating-systems cue 9 00:01:08.380 --> 00:01:20.380: long_zh_cue - ZH length 59; 4.9 chars/sec
- MEDIUM mainframe-operating-systems cue 10 00:01:20.380 --> 00:01:31.380: long_zh_cue - ZH length 39; 3.5 chars/sec
- MEDIUM mainframe-operating-systems cue 11 00:01:31.380 --> 00:01:46.380: long_zh_cue - ZH length 68; 4.5 chars/sec
- MEDIUM mainframe-operating-systems cue 12 00:01:46.380 --> 00:02:00.380: long_zh_cue - ZH length 64; 4.6 chars/sec

## All Issues

| Severity | Type | Video | Kaltura | Cue | Time | Details |
| --- | --- | --- | --- | --- | --- | --- |
| medium | near_duplicate_previous_zh_cue | activation-profiles | 1_hchvg5wh | 9 | 00:00:40.130-00:00:44.030 | Similar to previous cue 8 |
| | | | | | EN | l-pars as well as information about the operating systems that we want to |
| | | | | | ZH | LPAR，以及我們想在其上執行的作業系統資訊。 |
| medium | long_zh_cue | activation-profiles | 1_hchvg5wh | 23 | 00:01:55.470-00:01:59.990 | ZH length 36; 8.0 chars/sec |
| | | | | | EN | licensed internal code will be loaded and how much central and expanded |
| | | | | | ZH | 如何載入 licensed internal code，以及分配多少中央與擴充 |
| medium | near_duplicate_previous_zh_cue | computer-architecture | 1_vb8qf96d | 8 | 00:00:20.820-00:00:22.300 | Similar to previous cue 7 |
| | | | | | EN | lots of different kinds of computers, |
| | | | | | ZH | 也有很多不同種類的電腦， |
| medium | long_zh_cue | computer-architecture | 1_vb8qf96d | 99 | 00:03:57.420-00:03:58.660 | ZH length 19; 15.3 chars/sec |
| | | | | | EN | And you're not going to change it |
| | | | | | ZH | 除非有問題需要修正，否則你不會改變它， |
| medium | near_duplicate_previous_zh_cue | computer-architecture | 1_vb8qf96d | 173 | 00:06:40.540-00:06:42.780 | Similar to previous cue 172 |
| | | | | | EN | a supercomputer is a type of computer. |
| | | | | | ZH | 超級電腦也是一種電腦。 |
| medium | long_zh_cue | computer-architecture | 1_vb8qf96d | 184 | 00:07:05.140-00:07:07.300 | ZH length 24; 11.1 chars/sec |
| | | | | | EN | it has to take quite a journey to get from something |
| | | | | | ZH | 也必須經過相當漫長的過程，從我能描述的東西出發， |
| medium | long_zh_cue | computer-architecture | 1_vb8qf96d | 185 | 00:07:07.300-00:07:08.700 | ZH length 18; 12.9 chars/sec |
| | | | | | EN | that I can describe to something |
| | | | | | ZH | 到能在 CPU 上以電子方式表示的東西。 |
| medium | long_zh_cue | computer-architecture | 1_vb8qf96d | 193 | 00:07:25.580-00:07:26.580 | ZH length 12; 12.0 chars/sec |
| | | | | | EN | We've covered a lot here, |
| | | | | | ZH | 我們這裡涵蓋了很多內容， |
| medium | long_zh_cue | course-introduction | 1_ru7q9spi | 4 | 00:00:17.660-00:00:26.540 | ZH length 41; 4.6 chars/sec |
| | | | | | EN | The mainframe environment is all of IT in one place and a career here will keep you engaged learning and current in all of it |
| | | | | | ZH | 大型主機環境就是將整個 IT 集中在一起，在這裡發展職涯會讓你持續學習並掌握最新技術。 |
| medium | long_zh_cue | course-introduction | 1_ru7q9spi | 10 | 00:00:51.260-00:00:55.180 | ZH length 36; 9.2 chars/sec |
| | | | | | EN | Which is why I'm back with my pal Mackenzie. Hi Mackenzie |
| | | | | | ZH | 這也是為什麼我和夥伴 Mackenzie 再次回來。嗨，Mackenzie。 |
| medium | possibly_merged_zh_cue | course-introduction | 1_ru7q9spi | 10 | 00:00:51.260-00:00:55.180 | Chinese cue has multiple sentence endings in a short time window |
| | | | | | EN | Which is why I'm back with my pal Mackenzie. Hi Mackenzie |
| | | | | | ZH | 這也是為什麼我和夥伴 Mackenzie 再次回來。嗨，Mackenzie。 |
| medium | long_zh_cue | course-introduction | 1_ru7q9spi | 11 | 00:00:55.180-00:00:55.740 | ZH length 7; 12.5 chars/sec |
| | | | | | EN | Hey Jeff |
| | | | | | ZH | 嘿，Jeff。 |
| medium | long_zh_cue | course-introduction | 1_ru7q9spi | 16 | 00:01:10.540-00:01:19.900 | ZH length 36; 3.8 chars/sec |
| | | | | | EN | Massive massive amounts of secure transactions for stuff like paychecks health care insurance your phone your credit card your bank account the internet |
| | | | | | ZH | 大量大量安全的交易，包括薪資、健保、保險、手機、信用卡、銀行帳戶、網路， |
| medium | long_zh_cue | crypto-express-key-management | 1_52mzshqn | 1 | 00:00:03.060-00:00:07.060 | ZH length 47; 11.8 chars/sec |
| | | | | | EN | Hi, I'm Mark Nelson from the RACF Development Team in Poughkeepsie, New York, and we just |
| | | | | | ZH | 大家好，我是來自紐約Poughkeepsie的RACF開發團隊的Mark Nelson，我們剛剛 |
| medium | long_zh_cue | crypto-express-key-management | 1_52mzshqn | 14 | 00:00:48.060-00:00:52.060 | ZH length 46; 11.5 chars/sec |
| | | | | | EN | It might be in fetch protected storage that only trusted and authorized people within |
| | | | | | ZH | 它可能存在於 fetch protected 的儲存區，只有 ZOS 環境中被信任且授權的人員能存取。 |
| medium | long_zh_cue | crypto-express-key-management | 1_52mzshqn | 17 | 00:00:59.060-00:01:04.060 | ZH length 43; 8.6 chars/sec |
| | | | | | EN | With the crypto express card and something called protected keys, you can get the best of both worlds. |
| | | | | | ZH | 透過 Crypto Express 卡與所謂的 protected keys，您能兼顧兩者優點。 |
| medium | long_zh_cue | crypto-express-key-management | 1_52mzshqn | 19 | 00:01:10.060-00:01:15.060 | ZH length 42; 8.4 chars/sec |
| | | | | | EN | transport key or an L-par specific key, sometimes called it a femoral key, although I hate that word. |
| | | | | | ZH | 傳輸金鑰或特定 L-par 金鑰包裹，有時稱為 femoral key，雖然我不喜歡這個詞。 |
| medium | long_zh_cue | crypto-express-key-management | 1_52mzshqn | 24 | 00:01:39.060-00:01:45.060 | ZH length 39; 6.5 chars/sec |
| | | | | | EN | The CPACF can use the key that was used to wrap it, which is available to it because it's the hypervisor. |
| | | | | | ZH | CPACF 可以使用用來包裹密鑰的密鑰，因為它是虛擬機管理程式，可以取得該密鑰。 |
| medium | long_zh_cue | hmc-and-se | 1_6kwwnujx | 2 | 00:00:09.980-00:00:17.620 | ZH length 36; 4.7 chars/sec |
| | | | | | EN | What's that there for that's the support element for the SE in order to get the mainframe all configured and ready to boot up |
| | | | | | ZH | 那是 SE 的 Support Element，用來將大型主機配置好並準備開機。 |
| medium | long_zh_cue | hmc-and-se | 1_6kwwnujx | 4 | 00:00:24.100-00:00:25.700 | ZH length 21; 13.1 chars/sec |
| | | | | | EN | Through the support element |
| | | | | | ZH | 透過 Support Element 進行設定。 |
| medium | long_zh_cue | hmc-and-se | 1_6kwwnujx | 10 | 00:00:48.780-00:00:57.340 | ZH length 41; 4.8 chars/sec |
| | | | | | EN | Luckily in addition to the SEs mainframes have this concept of the HMC or the hardware management console and these do four things |
| | | | | | ZH | 幸運的是，除了 SE 之外，大型主機還有 HMC（硬體管理主控台）的概念，它有四個功能。 |
| medium | long_zh_cue | hmc-and-se | 1_6kwwnujx | 80 | 00:04:15.180-00:04:15.900 | ZH length 8; 11.1 chars/sec |
| | | | | | EN | So we need that |
| | | | | | ZH | 所以我們需要那個 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 1 | 00:00:04.270-00:00:15.270 | ZH length 67; 6.1 chars/sec |
| | | | | | EN | I hope everyone got their permission slip signed because today, we're going on a little field trip over to the raised floor with one of our favorite people, everyone say hi to Chris. |
| | | | | | ZH | 希望大家的同意書都簽好了，因為今天我們要和大家最喜歡的員工之一一起，去 raised floor 小小參觀一下，大家跟 Chris 打聲招呼吧。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 5 | 00:00:30.270-00:00:38.270 | ZH length 43; 5.4 chars/sec |
| | | | | | EN | They might be rotated, placed in slightly different locations, but typically a mainframe lives in one or more racks like this. |
| | | | | | ZH | 這些零件可能旋轉過，放置在略有不同的位置，但大型主機通常放在一個或多個像這樣的機架中。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 8 | 00:00:52.270-00:01:03.270 | ZH length 39; 3.5 chars/sec |
| | | | | | EN | is where you find all the main processors and memory. It's important to keep all that centrally located and connected because a short connection means faster access. |
| | | | | | ZH | 這裡有主要的處理器與記憶體。保持這些集中且互連很重要，因為連接越短，存取越快。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 9 | 00:01:03.270-00:01:12.270 | ZH length 35; 3.9 chars/sec |
| | | | | | EN | On a system with four CPC drawers, you can have up to 208 processors in up to 64 terabytes of memory. |
| | | | | | ZH | 一個有四個 CPC 抽屜的系統，可以有最多 208 個處理器及 64 TB 記憶體。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 11 | 00:01:17.270-00:01:29.270 | ZH length 44; 3.7 chars/sec |
| | | | | | EN | There's multiple power supply units, points of load, voltage regulator modules and processor power control cards, which feature sensors for pressure, temperature and humidity. |
| | | | | | ZH | 有多組電源供應器、負載點、電壓調節模組及處理器電源控制卡，配備有壓力、溫度和濕度感測器。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 13 | 00:01:36.270-00:01:45.270 | ZH length 38; 4.2 chars/sec |
| | | | | | EN | A lot of times these components are N plus two redundant, meaning that two of them can fail and the system will still have enough spares to keep going. |
| | | | | | ZH | 這些元件多為 N 加二冗餘設計，意思是即使有兩個故障，系統仍有足夠備件繼續運作。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 14 | 00:01:45.270-00:01:55.270 | ZH length 35; 3.5 chars/sec |
| | | | | | EN | But get this, this system adds an 11% boost in single thread performance over the Z16 while using 17% less power. |
| | | | | | ZH | 你看這個系統，相較於 Z16 單執行緒效能提升 11%，卻用電量降低 17%。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 16 | 00:01:58.270-00:02:08.270 | ZH length 39; 3.9 chars/sec |
| | | | | | EN | The CPC drawers also have something called a PCIe fan out, which is a fancy way of saying a whole bunch of cables coming out to connect to IO devices. |
| | | | | | ZH | CPC 櫃子內還有 PCIe fan out，一種集中多條線纜連接 IO 裝置的技術名稱。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 17 | 00:02:08.270-00:02:18.270 | ZH length 40; 4.0 chars/sec |
| | | | | | EN | This is an example of where they connect to. This is a PCIe IO drawer, a fully loaded Z17 can have up to 12 of these. |
| | | | | | ZH | 這是它們所連接的位置示例，這是一個 PCIe IO 櫃，完整的 Z17 最多可配備 12 個。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 19 | 00:02:26.270-00:02:37.270 | ZH length 56; 5.1 chars/sec |
| | | | | | EN | The processors at the heart of all of this, their IBM tell them two processors. These are five nanometer technology with 43 billion transistors each. |
| | | | | | ZH | 這些處理器是整個系統的核心，IBM 稱它們為 tell them two 處理器，每顆採用五奈米技術，含 430 億個電晶體。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 20 | 00:02:37.270-00:02:49.270 | ZH length 42; 3.5 chars/sec |
| | | | | | EN | Those are the processors that are going to be running the operating systems, the applications, the workloads, but they also have a special DPU or data processing unit for things like crypto and AI. |
| | | | | | ZH | 這些處理器將執行作業系統、應用程式和工作負載，並有專用的 DPU 用於加密和 AI 等任務。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 21 | 00:02:49.270-00:02:58.270 | ZH length 44; 4.9 chars/sec |
| | | | | | EN | But the fun doesn't stop there. The spire is a new PCIe device with 32 AI accelerators similar to the ones on the tell them two. |
| | | | | | ZH | 但樂趣不只於此。Spire 是一款新 PCIe 裝置，內建 32 個類似於 Telum 的 AI 加速器。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 22 | 00:02:58.270-00:03:12.270 | ZH length 66; 4.7 chars/sec |
| | | | | | EN | So if you're running large language models or AI infused workloads in fraud detection and don't want that work running on your main processors, the spire might be a good fit for some of those empty slots in your PCIe drawers. |
| | | | | | ZH | 如果你在執行大型語言模型或用於詐欺偵測的 AI 工作負載，且不希望這些工作佔用主處理器，Spire 可能是 PCIe 槽位中空缺位置的好選擇。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 23 | 00:03:12.270-00:03:25.270 | ZH length 63; 4.8 chars/sec |
| | | | | | EN | A hardware is impressive, but if you've ever built your own PC, you're likely already familiar with a lot of this terminology. You might even be saying, alright, so it's a big PC and well, yes, and no. |
| | | | | | ZH | 這硬體相當厲害，但如果你曾組裝過自己的 PC，應該對很多術語不陌生。你甚至可能想說，這不就是大型 PC 嗎？嗯，部分是，也部分不是。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 24 | 00:03:25.270-00:03:41.270 | ZH length 55; 3.4 chars/sec |
| | | | | | EN | Mostly no. It's a system built specifically for secure high transaction business applications. You've probably seen a PC built for gaming, a PC built for office use or a PC designed for recording and editing, audio and video. |
| | | | | | ZH | 大多數情況是否。它是專為安全且交易量高的商業應用而打造的系統。你可能見過為遊戲、辦公或影音錄製剪輯設計的 PC。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 25 | 00:03:41.270-00:03:54.270 | ZH length 43; 3.3 chars/sec |
| | | | | | EN | Aside by side, each PC will be specked out with something that makes it excel in that area, an amazing video card, super fast storage and a ton of RAM, a printer. |
| | | | | | ZH | 不同 PC 配備各自擅長的配備——頂級顯示卡、超快儲存裝置和大量 RAM，再加上一台印表機。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 26 | 00:03:54.270-00:04:04.270 | ZH length 41; 4.1 chars/sec |
| | | | | | EN | But at their core, they're still running the same operating system on the same type of processor, which has a middle of the road set of instructions that it can perform. |
| | | | | | ZH | 但核心來說，它們都執行相同的作業系統，使用同類的處理器，具備中等偏上的指令集能力。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 27 | 00:04:04.270-00:04:15.270 | ZH length 44; 4.0 chars/sec |
| | | | | | EN | A system like this isn't just specked for business applications, it's designed and built from the ground up specifically for those secure high transaction business applications. |
| | | | | | ZH | 這類系統不只是為商用應用配備，更是從零開始設計並建造，專門針對安全且交易量高的商業應用。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 28 | 00:04:15.270-00:04:25.270 | ZH length 52; 5.2 chars/sec |
| | | | | | EN | A hardware we're looking at and all of the firmware, millicoat, OS code and applications loaded onto it. You guessed it, really good at running business applications. |
| | | | | | ZH | 我們看的是硬體，以及其上所有韌體、millicoat、OS 代碼和應用程式。你猜對了，極擅長執行商務應用。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 29 | 00:04:25.270-00:04:33.270 | ZH length 47; 5.9 chars/sec |
| | | | | | EN | So don't look for an IBM Z port of Skyrim anytime soon. There's not even a place to plug in a display because it doesn't need one. Why would it? |
| | | | | | ZH | 所以別指望什麼 IBM Z 版 Skyrim 很快出現。連顯示器插孔都沒有，因為根本不需要。誰會需要呢？ |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 31 | 00:04:47.980-00:04:57.980 | ZH length 41; 4.1 chars/sec |
| | | | | | EN | But what about when you need to reboot or reconfigure something? Well, that requires special access and that sort of management is handled by these two systems right up here. |
| | | | | | ZH | 那如果你需要重新啟動或重新設定什麼呢？這就需要特殊權限，這種管理由這兩套系統負責。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 32 | 00:04:57.980-00:05:06.980 | ZH length 40; 4.4 chars/sec |
| | | | | | EN | Well, technically one of these systems, the second one is there as a backup, but anyway, this is a hardware management appliance or HMA. |
| | | | | | ZH | 技術上講，這兩套系統中第二套是備援，不過，這其實是一台硬體管理設備，或稱 HMA。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 35 | 00:05:18.980-00:05:28.980 | ZH length 45; 4.5 chars/sec |
| | | | | | EN | All you need to know is the no actual customer applications or workloads are getting run on these things. They exist just so people can log into them and manage the systems. |
| | | | | | ZH | 你只要知道這些系統上不會執行任何客戶應用程式或工作負載，它們只是讓人登入並管理系統的工具。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 36 | 00:05:28.980-00:05:39.980 | ZH length 56; 5.1 chars/sec |
| | | | | | EN | So that way, if there's a network express card set up for these two lpars, but we also want it to connect to these other lpars, we can use the HMC to make those changes. |
| | | | | | ZH | 這樣，如果為這兩個 LPAR 設定了 Network Express 卡，但又要讓它連接其他 LPAR，就能用 HMC 來調整。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 38 | 00:05:44.980-00:05:56.980 | ZH length 39; 3.3 chars/sec |
| | | | | | EN | Of course, we don't want just anyone going in and messing with devices, so who gets that type of access is strictly controlled and enforced with SSO and multi factor authentication. |
| | | | | | ZH | 當然，不會讓任何人任意存取或亂動裝置，權限會透過單一登入和多因素驗證嚴格控管。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 40 | 00:06:07.980-00:06:17.980 | ZH length 38; 3.8 chars/sec |
| | | | | | EN | If you're into hardware, there are mainframe jobs for people who deal primarily with cabling, reconfiguring, upgrading and management of these systems behind the scenes. |
| | | | | | ZH | 如果你對硬體有興趣，有大型主機工作專門負責布線、重配置、升級及幕後系統管理。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 43 | 00:06:32.980-00:06:43.980 | ZH length 46; 4.2 chars/sec |
| | | | | | EN | So, even if you never actually get to see the system you're working on, rest assured, it was built to perform and protect with some pretty amazing hardware and software design. |
| | | | | | ZH | 即使你從未真正看到你正在使用的系統，請放心，它是用性能與安全為優先設計的優秀硬體與軟體打造。 |
| medium | long_zh_cue | ibm-z-components | 1_j4rkx3qu | 44 | 00:06:43.980-00:06:52.980 | ZH length 46; 5.1 chars/sec |
| | | | | | EN | Everyone say, thank you, Chris, goodbye, Chris, everyone say, thank you, Z17, goodbye, Z17. |
| | | | | | ZH | 大家一起說，謝謝你，Chris，再見，Chris，大家一起說，謝謝你，Z17，再見，Z17。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 4 | 00:00:19.010-00:00:27.110 | ZH length 37; 4.6 chars/sec |
| | | | | | EN | In a mainframe environment, disk storage is handled by something called direct access storage devices, commonly called DASDI. |
| | | | | | ZH | 在大型主機環境中，磁碟儲存由稱為直接存取儲存裝置（DASDI）的設備管理。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 6 | 00:00:34.110-00:00:44.110 | ZH length 50; 5.0 chars/sec |
| | | | | | EN | They can provide the disk storage for mainframe. They can actually provide disk storage for many mainframes, and many DASDI can be connected to a single mainframe. |
| | | | | | ZH | 它們可以為大型主機提供磁碟儲存，甚至能同時服務多台大型主機，且多個 DASDI 可以連接到單一大型主機。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 8 | 00:00:47.110-00:00:56.110 | ZH length 42; 4.7 chars/sec |
| | | | | | EN | In order to make these connections to devices like DASDI and others, we need to define the logical paths through the physical connections, so it all works. |
| | | | | | ZH | 為了連接 DASDI 和其他裝置，我們需定義透過物理連接的邏輯路徑，才能讓系統正常運作。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 9 | 00:00:56.110-00:01:08.110 | ZH length 68; 5.7 chars/sec |
| | | | | | EN | Things are better when they work, right? The iOS CDS, which stands for the input-output configuration dataset, represents the connection between the resources and the systems that use them. |
| | | | | | ZH | 系統正常運作當然最好，IOCDS（Input/Output Configuration Data Set）代表資源與使用這些資源系統間的連接。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 11 | 00:01:14.110-00:01:22.110 | ZH length 42; 5.3 chars/sec |
| | | | | | EN | Basically, anything outside of the mainframe that we want to connect to, and the stuff inside the mainframe that we're going to use to connect to it. |
| | | | | | ZH | 基本上，任何位於大型主機外部且我們希望連接的裝置，以及大型主機內部用來連接它的資源。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 42 | 00:03:45.110-00:03:51.110 | ZH length 44; 7.3 chars/sec |
| | | | | | EN | you can also define what's called a multiple image facility image ID, or myth ID. |
| | | | | | ZH | 您也可以定義所謂的 multiple image facility 映像 ID，或稱 myth ID。 |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 67 | 00:05:25.110-00:05:32.110 | ZH length 40; 5.7 chars/sec |
| | | | | | EN | So basically, how I'm going to connect to the control unit, what it is I'm trying to connect to, that channel path I'm using to connect to it, |
| | | | | | ZH | 基本上，就是我要如何連接控制單元，以及我打算連接的目標，還有用來連接的通道路徑， |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 75 | 00:05:59.110-00:06:06.110 | ZH length 35; 5.0 chars/sec |
| | | | | | EN | What we're going to be doing with the following five statements is building a connection between an L-par through a chippet, |
| | | | | | ZH | 接著要做的，是用接下來的五個指令建立 L-par 經 chippet 的連結， |
| medium | long_zh_cue | iocds | 1_5hs3mb8z | 102 | 00:07:52.110-00:07:58.110 | ZH length 35; 5.8 chars/sec |
| | | | | | EN | We start out by defining channel path ID-35 in channel subsystem-1. |
| | | | | | ZH | 我們先定義 channel subsystem-1 中的通道路徑 ID-35。 |
| medium | possibly_merged_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 24 | 00:02:00.250-00:02:03.250 | Chinese cue has multiple sentence endings in a short time window |
| | | | | | EN | Guess what? More on that in a bit too. |
| | | | | | ZH | 猜猜看？稍後還會再提到這個。 |
| medium | long_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 28 | 00:02:15.250-00:02:28.250 | ZH length 49; 3.8 chars/sec |
| | | | | | EN | So the IPL resource initialization module, IRIM, first attempts to locate the load xx member in the cis0.IPL param data set. |
| | | | | | ZH | 因此，IPL 資源初始化模組 IRIM 會先嘗試在 cis0.IPL param 資料集找到 load xx 成員。 |
| medium | long_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 31 | 00:02:34.250-00:02:44.250 | ZH length 46; 4.6 chars/sec |
| | | | | | EN | That's just the common way of saying it could be load zero zero or load zero one or whatever we told it look for in characters five and six of the load parameter. |
| | | | | | ZH | 這是一般說法，表示可能是載入 00、01，或我們指定在載入參數的第 5 和 6 個字元尋找的任何代碼。 |
| medium | long_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 32 | 00:02:44.250-00:02:54.250 | ZH length 56; 5.6 chars/sec |
| | | | | | EN | If it's not there it'll look in cis1.IPL param and then in cis2.IPL param and all the way up to cis9.IPL param. |
| | | | | | ZH | 如果找不到，它會在 cis1.IPL param、cis2.IPL param 一直到 cis9.IPL param 中尋找。 |
| medium | long_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 35 | 00:03:06.250-00:03:13.250 | ZH length 44; 6.3 chars/sec |
| | | | | | EN | If the cis dot whatever IPL param couldn't be found on the IODF volume the search continues. |
| | | | | | ZH | 如果 IODF 卷宗上找不到 cis.dot.whatever IPL param，就會繼續搜尋。 |
| medium | long_zh_cue | ipling-an-operating-system | 1_c1w1vq9x | 39 | 00:03:24.250-00:03:32.250 | ZH length 40; 5.0 chars/sec |
| | | | | | EN | Anyway, if it can't find it there it'll look in cis1.parmli on another volume called the cis res volume. |
| | | | | | ZH | 總之，如果找不到，它會在另一個稱為 cis res 卷宗的 cis1.parmli 查找。 |
| medium | long_zh_cue | mainframe-architecture | 1_7e45b5a8 | 1 | 00:00:03.600-00:00:08.680 | ZH length 37; 7.3 chars/sec |
| | | | | | EN | It's important to realize that there is no one version of the mainframe, but rather |
| | | | | | ZH | 重要的是要了解，沒有單一版本的大型主機，而是一系列遵循大型主機架構的電腦。 |
| medium | long_zh_cue | mainframe-architecture | 1_7e45b5a8 | 6 | 00:00:23.520-00:00:24.520 | ZH length 17; 17.0 chars/sec |
| | | | | | EN | models before. |
| | | | | | ZH | 它們存在於筆電、手機和大型主機中。 |
| medium | long_zh_cue | mainframe-architecture | 1_7e45b5a8 | 9 | 00:00:32.800-00:00:34.800 | ZH length 24; 12.0 chars/sec |
| | | | | | EN | memory to go around. |
| | | | | | ZH | 即使在滿載的系統上，應用程式總是渴望更多記憶體， |
| medium | near_duplicate_previous_zh_cue | mainframe-features | 1_1v889967 | 40 | 00:01:57.850-00:01:59.850 | Similar to previous cue 39 |
| | | | | | EN | It's not about me. |
| | | | | | ZH | 這不是關於我。 |
| medium | long_zh_cue | mainframe-features | 1_1v889967 | 70 | 00:03:36.850-00:03:40.850 | ZH length 37; 9.3 chars/sec |
| | | | | | EN | Those tools include the ZOS encryption readiness toolkit, |
| | | | | | ZH | 這些工具包括 z/OS encryption readiness toolkit， |
| medium | long_zh_cue | mainframe-features | 1_1v889967 | 89 | 00:04:44.850-00:04:48.850 | ZH length 37; 9.3 chars/sec |
| | | | | | EN | During what is called the boost period, the system is allowed to use processors, |
| | | | | | ZH | 在所謂的 boost 期間，系統可以使用通常禁用、保留給特殊工作負載的處理器， |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 1 | 00:00:03.380-00:00:10.380 | ZH length 37; 5.3 chars/sec |
| | | | | | EN | Operating systems. Once you've made an LPAR on a mainframe, you probably want to run an operating system on it. |
| | | | | | ZH | 作業系統。一旦你在大型主機上建立了 LPAR，通常會想要在上面執行作業系統。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 4 | 00:00:23.380-00:00:32.380 | ZH length 40; 4.4 chars/sec |
| | | | | | EN | When the mainframe moved to the Z architecture, basically when it started running 64-bit, the operating systems got renamed with that Z as well. |
| | | | | | ZH | 當大型主機改用 Z 架構，基本上是開始跑 64 位元時，作業系統名稱也隨之改成以 Z 開頭。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 5 | 00:00:32.380-00:00:39.380 | ZH length 35; 5.0 chars/sec |
| | | | | | EN | So that's why you see that. So the ZOS operating system is the flagship IBM mainframe operating system. |
| | | | | | ZH | 這就是為什麼你會看到這個名稱。z/OS 是 IBM 大型主機的旗艦作業系統。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 6 | 00:00:39.380-00:00:49.380 | ZH length 42; 4.2 chars/sec |
| | | | | | EN | And if you trace the lineage of that operating system way back, it's a direct descendant of the original OS360 that ran back on that first mainframe back in 1964. |
| | | | | | ZH | 如果追溯這個作業系統的血統，可直追回1964年那台第一台大型主機上執行的 OS360。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 8 | 00:00:58.380-00:01:08.380 | ZH length 47; 4.7 chars/sec |
| | | | | | EN | If someone today has a mainframe, chances are they're running ZOS. And we're actually going to come back to this and talk more about ZOS later, but I want to talk about the other operating systems first. |
| | | | | | ZH | 現今若有人擁有大型主機，很可能就是在跑 z/OS。我們稍後會再談 z/OS，但先介紹其他作業系統。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 9 | 00:01:08.380-00:01:20.380 | ZH length 59; 4.9 chars/sec |
| | | | | | EN | First, there's Z-TPF, which stands for Z transaction processing facility, commonly used by companies dealing with high volumes of transactions that need to get handled in real time. |
| | | | | | ZH | 首先是 Z-TPF，代表 Z transaction processing facility，通常用於需即時處理大量交易的公司。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 10 | 00:01:20.380-00:01:31.380 | ZH length 39; 3.5 chars/sec |
| | | | | | EN | That means credit card processors, airline reservation systems, hotel and auto rental chains, Z-TPF is extremely tied to the world of travel and logistics. |
| | | | | | ZH | 像是信用卡處理、航空訂位系統、飯店和租車連鎖，Z-TPF 與旅遊及物流密切相關。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 11 | 00:01:31.380-00:01:46.380 | ZH length 68; 4.5 chars/sec |
| | | | | | EN | ZVM is all about virtualization. Now, we mentioned ZVM briefly before the idea behind it is to provide guest operating systems running essentially within ZVM, and then they get access to all the resources that the host ZVM is running with. |
| | | | | | ZH | ZVM 全面圍繞虛擬化。我們之前簡要提過，ZVM 的核心概念是提供在 ZVM 內執行的來賓作業系統，並且這些系統可使用主機 ZVM 具備的所有資源。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 12 | 00:01:46.380-00:02:00.380 | ZH length 64; 4.6 chars/sec |
| | | | | | EN | Interesting thing about ZVM is that it is a type one hypervisor. So, instead of running it on top of another operating system and then using that to host the virtual machines, ZVM doesn't need another operating system to do its thing. |
| | | | | | ZH | ZVM 有趣的地方是它屬於第一型 hypervisor。它不是跑在另一個作業系統之上來管理虛擬機，而是直接運行，不需要其他作業系統。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 13 | 00:02:00.380-00:02:11.380 | ZH length 50; 4.5 chars/sec |
| | | | | | EN | It does its own thing. That makes ZVM extremely efficient and valuable for testing and development. Any operating system that runs on the mainframe will run within ZVM. |
| | | | | | ZH | 它自行運作。這讓 ZVM 極為高效且適合測試與開發。任何在大型主機上可執行的作業系統都能在 ZVM 中運行。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 14 | 00:02:11.380-00:02:18.380 | ZH length 42; 6.0 chars/sec |
| | | | | | EN | So, if you need a whole bunch of systems, but don't want to use up your L-Pars, ZVM can do some pretty interesting things. |
| | | | | | ZH | 因此，如果你需要大量系統，但又不想佔用你的 L-Pars，ZVM 可以做到許多有趣的事。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 15 | 00:02:18.380-00:02:35.380 | ZH length 73; 4.3 chars/sec |
| | | | | | EN | The other operating system IBM makes is called ZVSE. This is a lesser used operating system, but it's still very important for smaller companies who need something like ZOS, which can do transaction and batch processing, but don't need something that big or that complex. |
| | | | | | ZH | IBM 另一個作業系統是 ZVSE。這是較少被使用的作業系統，但對於需要像 z/OS 一樣能執行交易及批次處理、但不需要那麼大或複雜的公司，仍然非常重要。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 16 | 00:02:35.380-00:02:42.380 | ZH length 38; 5.4 chars/sec |
| | | | | | EN | Also don't need as many people to run as ZVSE instance, and that's appealing to smaller companies with fewer people. |
| | | | | | ZH | 而且，運作 ZVSE 也不需要那麼多人，這對於人力較少的小型公司來說很有吸引力。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 17 | 00:02:42.380-00:02:50.380 | ZH length 54; 6.8 chars/sec |
| | | | | | EN | And then there's Linux. The same Linux that runs on phones, watches, game consoles, toasters. Guess what? It runs on the mainframe too. |
| | | | | | ZH | 還有 Linux，就是那些跑在手機、手錶、遊戲主機、吐司機上的 Linux。你猜怎麼著？它也能在大型主機上運行。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 18 | 00:02:50.380-00:02:57.380 | ZH length 47; 6.7 chars/sec |
| | | | | | EN | And it runs extremely well. And if you know Linux, then you know Linux on the mainframe. Everything looks pretty much the same. |
| | | | | | ZH | 而且運行得非常好。如果你熟悉 Linux，那麼你就知道大型主機上的 Linux。操作介面基本相同。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 20 | 00:03:02.380-00:03:08.380 | ZH length 39; 6.5 chars/sec |
| | | | | | EN | I remember when Linux first started showing up on the mainframe, people thought it was crazy. It was a crazy idea. |
| | | | | | ZH | 我記得 Linux 剛開始出現在大型主機時，人們覺得這很瘋狂，真的是個瘋狂的想法。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 21 | 00:03:08.380-00:03:15.380 | ZH length 48; 6.9 chars/sec |
| | | | | | EN | The idea of an operating system running on our beloved mainframe that was coded by a bunch of strangers on the internet. |
| | | | | | ZH | 作業系統能在我們心愛的大型主機上運行，這點令人驚訝，尤其是那些在網路上不認識的人所編寫的程式碼。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 22 | 00:03:15.380-00:03:22.380 | ZH length 49; 7.0 chars/sec |
| | | | | | EN | I mean, you wanted to take this seriously? Well, that was like back in 2000. Another leap of faith in Linux is still running on the mainframe. |
| | | | | | ZH | 你認真看待這件事嗎？那是2000年左右的事了。Linux 在大型主機上持續運作，是另一個信念的飛躍。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 23 | 00:03:22.380-00:03:29.380 | ZH length 57; 8.1 chars/sec |
| | | | | | EN | It's hugely popular. Lastly, KVM, or a kernel-based virtual machine, is an open source hypervisor. |
| | | | | | ZH | 它非常受歡迎。最後，KVM 或稱 kernel-based virtual machine，是開源的 hypervisor。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 24 | 00:03:29.380-00:03:37.380 | ZH length 54; 6.8 chars/sec |
| | | | | | EN | Similar to ZVM, it's another type I hypervisor, meaning it doesn't require another operating system because it is an operating system. |
| | | | | | ZH | 類似於 ZVM，它是另一種 type I hypervisor，表示它不需要另一個作業系統，因為它本身即為作業系統。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 25 | 00:03:37.380-00:03:45.380 | ZH length 43; 5.4 chars/sec |
| | | | | | EN | People like it because it integrates with KVM running on other platforms, and it's used a lot for distributed workloads where you need a lot of something. |
| | | | | | ZH | 大家喜歡它是因為可整合在其他平台運行的 KVM，且廣泛用於需要大量資源的分散式工作負載。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 32 | 00:04:26.380-00:04:35.380 | ZH length 41; 4.6 chars/sec |
| | | | | | EN | By better knowing the management functions of an operating system, we can better evaluate exactly what components of ZOS are responsible for what we're interested in. |
| | | | | | ZH | 透過更了解作業系統的管理功能，我們能更精準評估 ZOS 中哪些組件負責我們關心的部分。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 33 | 00:04:35.380-00:04:44.380 | ZH length 37; 4.1 chars/sec |
| | | | | | EN | The ZOS operating system is made up of components. Some of these components are base elements, which the operating system comes with and is configured with by default. |
| | | | | | ZH | ZOS 作業系統由多個組件構成，其中一些是基本元素，作業系統預設包含並配置。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 72 | 00:07:18.380-00:07:26.380 | ZH length 41; 5.1 chars/sec |
| | | | | | EN | When you use another component, the system display and search facility, thankfully shortened to SDSF to look at all of that output. |
| | | | | | ZH | 當你使用另一個元件，也就是系統顯示與搜尋功能，幸好簡稱為 SDSF，來查看所有輸出。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 82 | 00:08:03.380-00:08:11.380 | ZH length 35; 4.4 chars/sec |
| | | | | | EN | You need to be able to say exactly how long the average transaction is running for, how long users are waiting for the response, all that kind of stuff. |
| | | | | | ZH | 你需要準確說出平均交易執行多久，用戶等待回應的時間，以及所有這類資訊。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 85 | 00:08:25.380-00:08:34.380 | ZH length 44; 4.9 chars/sec |
| | | | | | EN | Managing storage is important, and the mainframe uses DFSMS, the data facility storage management service, to manage what data goes where. |
| | | | | | ZH | 管理儲存空間非常重要，大型主機使用 DFSMS（資料設施儲存管理服務）來管理資料擺放位置。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 88 | 00:08:45.380-00:08:54.380 | ZH length 38; 4.2 chars/sec |
| | | | | | EN | Just like with other managers, it makes sure that when you're running multiple things at the same time on the same platform, they all get a fair slice of the system resources. |
| | | | | | ZH | 就像其他管理員一樣，它確保在同一平台同時執行多項作業時，系統資源能公平分配。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 98 | 00:09:25.380-00:09:36.380 | ZH length 46; 4.2 chars/sec |
| | | | | | EN | TCPIP, or to be complete, SNA, TCPIP, which stands for Systems Network Architecture, Transmission Control Protocol, Internet Protocol. |
| | | | | | ZH | TCPIP，完整說法是 SNA、TCPIP，分別代表系統網路架構、傳輸控制協定和網際網路協定。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 106 | 00:10:09.380-00:10:15.380 | ZH length 47; 7.8 chars/sec |
| | | | | | EN | Almost like a database for tracking events, that's SMF, the Systems Management Facility. |
| | | | | | ZH | 這就像追蹤事件的資料庫，這是 SMF，也就是 Systems Management Facility。 |
| medium | long_zh_cue | mainframe-operating-systems | 1_q1drndng | 108 | 00:10:21.380-00:10:26.380 | ZH length 36; 7.2 chars/sec |
| | | | | | EN | And last, but certainly not least, is USS, or UNIX system services. |
| | | | | | ZH | 最後，當然也很重要的是 USS，或稱 UNIX system services。 |
| medium | long_zh_cue | millicode | 1_lwog53qm | 1 | 00:00:03.310-00:00:08.670 | ZH length 51; 9.5 chars/sec |
| | | | | | EN | Hi, I'm Brunchandama. I'm a lead design engineer walking on Millicoat. So what is Millicoat? |
| | | | | | ZH | 嗨，我是 Brunchandama。我是 Millicoat 的資深設計工程師。那什麼是 Millicoat？ |
| medium | long_zh_cue | millicode | 1_lwog53qm | 2 | 00:00:08.670-00:00:18.270 | ZH length 40; 4.2 chars/sec |
| | | | | | EN | It basically is a form of microarchitecture that runs on IBMC. And by microarchitecture, I mean, there's a |
| | | | | | ZH | 基本上，Millicoat 是一種運行於 IBM Z 的微架構。所謂微架構，指的是有一層 |
| medium | long_zh_cue | millicode | 1_lwog53qm | 13 | 00:01:10.310-00:01:17.430 | ZH length 36; 5.1 chars/sec |
| | | | | | EN | Millicoat is also involved in a few other key aspects of IBMC. We do system initialization, |
| | | | | | ZH | Millicoat 也參與 IBMC 的其他一些重要方面。我們進行系統初始化， |
| medium | long_zh_cue | millicode | 1_lwog53qm | 15 | 00:01:22.790-00:01:29.190 | ZH length 35; 5.5 chars/sec |
| | | | | | EN | that's IML. Millicoat is involved with virtualization. So you have a single resource, a system, |
| | | | | | ZH | 這就是 IPL。Millicoat 也涉及虛擬化。你有一個單一資源或系統， |
| medium | long_zh_cue | millicode | 1_lwog53qm | 18 | 00:01:38.470-00:01:43.270 | ZH length 48; 10.0 chars/sec |
| | | | | | EN | psi or start interpretive execution, and that instruction is implemented in Millicoat. |
| | | | | | ZH | psi 或 start interpretive execution，這個指令由 Millicoat 實作。 |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 6 | 00:00:27.110-00:00:28.110 | ZH length 39; 39.0 chars/sec |
| | | | | | EN | concepts. |
| | | | | | ZH | 首先是 STP，也就是 server-time protocol（伺服器時間協定）。 |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 28 | 00:01:39.270-00:01:44.510 | ZH length 36; 6.9 chars/sec |
| | | | | | EN | And these allow direct memory access communications between Sysplex memory and the memory |
| | | | | | ZH | 而這些允許Sysplex記憶體與連接系統記憶體之間的直接記憶體存取通訊。 |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 65 | 00:03:48.430-00:03:53.670 | ZH length 36; 6.9 chars/sec |
| | | | | | EN | If you've got a Sysplex with only one L-Par in it, is it really a Sysplex? |
| | | | | | ZH | 如果你的 Sysplex 裡只有一個 L-Par，那它真的是 Sysplex 嗎？ |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 78 | 00:04:37.790-00:04:41.750 | ZH length 37; 9.3 chars/sec |
| | | | | | EN | In a parallel Sysplex, the coupling facility handles all the complexities and |
| | | | | | ZH | 在 parallel Sysplex 中，耦合設施負責處理所有系統協作的複雜性及 |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 81 | 00:04:51.110-00:04:57.310 | ZH length 39; 6.3 chars/sec |
| | | | | | EN | That would mean one L-Par on each mainframe hooked into a 32-way Sysplex. |
| | | | | | ZH | 那意味著每台大型主機上會有一個 L-Par，連接到一個 32 節點的 Sysplex。 |
| medium | long_zh_cue | sysplex | 1_0umo87q5 | 91 | 00:05:29.150-00:05:35.550 | ZH length 38; 5.9 chars/sec |
| | | | | | EN | So if I've got 16 L-Pars in my Sysplex, we're just saying, I can bring down four of them, |
| | | | | | ZH | 如果我的 Sysplex 裡有 16 個 LPAR，我們就是說，我可以將其中四個關機， |
| medium | long_zh_cue | transaction-level-security | 1_1ndlj8bd | 54 | 00:03:34.230-00:03:40.350 | ZH length 47; 7.7 chars/sec |
| | | | | | EN | For starters, there's CPACF, the CP Assist for cryptographic functions. |
| | | | | | ZH | 首先，有 CPACF，也就是 CP Assist for cryptographic functions。 |
| medium | long_zh_cue | transaction-level-security | 1_1ndlj8bd | 63 | 00:04:16.150-00:04:22.350 | ZH length 36; 5.8 chars/sec |
| | | | | | EN | And I do mean all aspects, because starting with the Z14 version of the IBMZ mainframe, |
| | | | | | ZH | 我說的確實是所有面向，因為從 IBM Z mainframe 的 Z14 版本開始， |
| medium | long_zh_cue | transaction-level-security | 1_1ndlj8bd | 64 | 00:04:22.350-00:04:27.510 | ZH length 48; 9.3 chars/sec |
| | | | | | EN | there's a feature called pervasive encryption, which lets us more easily keep data encrypted |
| | | | | | ZH | 有一項稱為 pervasive encryption（全域加密）的功能，讓我們更輕鬆保持資料加密狀態 |
| medium | long_zh_cue | virtualization | 1_1fl2qymd | 100 | 00:03:58.790-00:04:00.390 | ZH length 20; 12.5 chars/sec |
| | | | | | EN | you can use these zip processors |
| | | | | | ZH | 你可以使用這些 zIIP processor |
| medium | near_duplicate_previous_zh_cue | virtualization | 1_1fl2qymd | 128 | 00:05:14.110-00:05:17.350 | Similar to previous cue 127 |
| | | | | | EN | can be dedicated fully to one L-PAR, |
| | | | | | ZH | 可以完整專屬配置給單一 LPAR， |
| medium | long_zh_cue | virtualization | 1_1fl2qymd | 137 | 00:05:42.350-00:05:44.110 | ZH length 21; 11.9 chars/sec |
| | | | | | EN | One last word about virtualization, |
| | | | | | ZH | 最後再談一次 virtualization， |
| medium | long_zh_cue | what-is-an-operating-system | 1_jicvw3wr | 2 | 00:00:09.320-00:00:15.240 | ZH length 38; 6.4 chars/sec |
| | | | | | EN | We never really actually defined what one is and you might not have actually given a much thought to what an operating system is |
| | | | | | ZH | 但我們從來沒有真正定義過作業系統是什麼，你可能也沒多想過作業系統到底是什麼。 |
| medium | long_zh_cue | what-is-an-operating-system | 1_jicvw3wr | 18 | 00:01:33.720-00:01:39.560 | ZH length 36; 6.2 chars/sec |
| | | | | | EN | Okay, now the waiting state. This is where it gets a little bit interesting a process typically doesn't just start and end |
| | | | | | ZH | 好的，現在是等待狀態。這裡開始有點有趣，程序通常不會就這麼自動開始並結束 |
| medium | long_zh_cue | what-is-an-operating-system | 1_jicvw3wr | 51 | 00:04:14.720-00:04:21.640 | ZH length 35; 5.1 chars/sec |
| | | | | | EN | We want our applications to run as quickly and efficiently as possible and one way of doing that is by abstracting all the |
| | | | | | ZH | 我們希望應用程式能盡可能快速且有效率地執行，其中一種方法就是抽象化所有 |
| medium | long_zh_cue | what-is-an-operating-system | 1_jicvw3wr | 52 | 00:04:21.840-00:04:30.400 | ZH length 37; 4.3 chars/sec |
| | | | | | EN | Complexities of memory management away from the developer and their applications and handling them in the memory management function and there you have it |
| | | | | | ZH | 記憶體管理的複雜性，讓開發人員和應用程式不必處理，改由記憶體管理功能負責。 |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 1 | 00:00:03.220-00:00:08.580 | ZH length 38; 7.1 chars/sec |
| | | | | | EN | So, why use mainframes? Because no two businesses are alike, even competitors in the same |
| | | | | | ZH | 那麼，為什麼要使用大型主機？因為即使是同一領域的競爭對手，企業也都不盡相同， |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 2 | 00:00:08.580-00:00:14.100 | ZH length 40; 7.2 chars/sec |
| | | | | | EN | field, mainframes need to be open, adaptable, and ever evolving. And that's before we even |
| | | | | | ZH | 大型主機必須具備開放性、適應性，並且不斷演進。這還是在談處理能力或系統容量之前， |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 8 | 00:00:36.660-00:00:41.700 | ZH length 35; 6.9 chars/sec |
| | | | | | EN | appear on the mainframe. What I'm getting at here is that if it's important, you'll find |
| | | | | | ZH | 例如，我們來談談 Linux，因為這是運行在 IBM Z 上效果非常好的實例， |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 11 | 00:00:52.860-00:00:57.660 | ZH length 50; 10.4 chars/sec |
| | | | | | EN | cloud instance. It runs great on the server under my desk. It even runs on my Raspberry |
| | | | | | ZH | cloud instance 上運行得很好，在我桌下的伺服器上也很好，甚至可以跑在我的 Raspberry |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 12 | 00:00:57.660-00:01:02.060 | ZH length 37; 8.4 chars/sec |
| | | | | | EN | Pi. So, why do I want to run Linux on the mainframe? Is it going to run any better? Well, |
| | | | | | ZH | Pi 上。那麼，為什麼我想在大型主機上運行 Linux？它會跑得比較好嗎？嗯， |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 15 | 00:01:15.020-00:01:21.260 | ZH length 37; 5.9 chars/sec |
| | | | | | EN | VLANs. Well, I can get that big powerful Linux system, but I can also run that Linux with all |
| | | | | | ZH | 我可以擁有那麼大且強大的 Linux 系統，同時也能讓它的所有資料在任何時候都 |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 17 | 00:01:26.540-00:01:31.660 | ZH length 39; 7.6 chars/sec |
| | | | | | EN | that's pretty cool. I could build five more of those same exact servers without needing |
| | | | | | ZH | 我甚至能打造另外五台一模一樣的伺服器，不需要五倍的實體資源，因為有虛擬化技術。 |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 18 | 00:01:31.740-00:01:37.340 | ZH length 40; 7.1 chars/sec |
| | | | | | EN | five times the physical resources because of virtualization. That's a huge bonus. I can even |
| | | | | | ZH | 這是一個很大的優勢。我甚至能在 z/OS 作業系統中啟動 Linux Docker 實例， |
| medium | long_zh_cue | why-use-mainframes | 1_rqvsd0rw | 25 | 00:02:10.540-00:02:16.460 | ZH length 36; 6.1 chars/sec |
| | | | | | EN | efficient cooling unit in a mainframe is much better than having 300 individual CPU fans out |
| | | | | | ZH | 在大型主機中使用大型高效冷卻系統，比起讓 300 個 CPU 風扇分散運作更佳。 |
| medium | long_zh_cue | zos-security | 1_b3hd3sa0 | 48 | 00:02:35.310-00:02:44.310 | ZH length 39; 4.3 chars/sec |
| | | | | | EN | This is a hardware security module, HSM, that improves security by performing a lot of cryptographic functions on its specialized hardware. |
| | | | | | ZH | 這是一個硬體安全模組（HSM），透過其專用硬體執行許多密碼學功能來提升安全性。 |
| medium | long_zh_cue | zos-security | 1_b3hd3sa0 | 54 | 00:03:10.310-00:03:23.310 | ZH length 49; 3.8 chars/sec |
| | | | | | EN | So if someone were to pull a heist where they broke into a data center with their masks on and they tiptoe over to the main frame and they gently slide out the HSM, throw it in their bag and jump in the getaway helicopter. |
| | | | | | ZH | 假設有人戴著面罩闖入資料中心，蹑手蹑腳走向大型主機，輕輕抽出 HSM，放進袋子，然後跳上逃逸直升機， |
| low | near_duplicate_next_zh_cue | activation-profiles | 1_hchvg5wh | 8 | 00:00:35.750-00:00:40.130 | Similar to next cue 9 |
| | | | | | EN | profiles contain configuration information about the CPC and all of its |
| | | | | | ZH | 還有我們想在這些 l-par 上執行的作業系統相關資訊。 |
| low | near_duplicate_next_zh_cue | computer-architecture | 1_vb8qf96d | 7 | 00:00:19.180-00:00:20.820 | Similar to next cue 8 |
| | | | | | EN | There's lots of different kinds of buildings, |
| | | | | | ZH | 有很多不同種類的建築物， |
| low | near_duplicate_next_zh_cue | computer-architecture | 1_vb8qf96d | 172 | 00:06:38.860-00:06:40.540 | Similar to next cue 173 |
| | | | | | EN | A phone is a type of computer, |
| | | | | | ZH | 手機也是一種電腦， |
| low | near_duplicate_next_zh_cue | mainframe-features | 1_1v889967 | 39 | 00:01:55.850-00:01:57.850 | Similar to next cue 40 |
| | | | | | EN | It's not about me. |
| | | | | | ZH | 這不是關於我。 |
| low | near_duplicate_next_zh_cue | virtualization | 1_1fl2qymd | 127 | 00:05:11.110-00:05:14.110 | Similar to next cue 128 |
| | | | | | EN | you can think about it just like being a line between the two, |
| | | | | | ZH | 可以完全專屬給一個 LPAR， |
