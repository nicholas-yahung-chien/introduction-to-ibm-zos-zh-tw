import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Introduction to IBM z/OS',
  description: 'IBM z/OS 入門課程繁體中文化版本',
  lang: 'zh-Hant-TW',
  cleanUrls: true,
  base: '/introduction-to-ibm-zos-zh-tw/',
  head: [
    ['meta', { name: 'theme-color', content: '#0f62fe' }],
    ['meta', { property: 'og:title', content: 'Introduction to IBM z/OS 繁體中文化課程' }],
    ['meta', { property: 'og:description', content: 'IBM z/OS 入門課程的台灣繁體中文靜態版本。' }]
  ],
  themeConfig: {
    logo: '/ibm-z-mark.svg',
    nav: [
      { text: '課程', link: '/course/' },
      { text: '影片', link: '/videos/' },
      { text: '詞彙表', link: '/glossary/' },
      { text: '授權備註', link: '/license-notes' }
    ],
    sidebar: [
      {
        text: '課程',
        items: [
          { text: '課程首頁', link: '/course/' },
          { text: '課程概觀', link: '/course/course-overview' },
          { text: '大型主機環境', link: '/course/mainframe-environment' },
          { text: '大型主機基礎架構', link: '/course/mainframe-infrastructure' },
          { text: '大型主機安全', link: '/course/mainframe-security' }
        ]
      },
      {
        text: '參考',
        items: [
          { text: '影片清單', link: '/videos/' },
          { text: '詞彙表', link: '/glossary/' },
          { text: '用語審稿', link: '/glossary/review' },
          { text: '授權備註', link: '/license-notes' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw' }
    ],
    footer: {
      message: 'IBM 授權課程中文化工作稿。正式公開前需完成內容與影片授權審核。',
      copyright: 'Prepared for IBM Taiwan enablement use.'
    },
    search: {
      provider: 'local'
    }
  }
})

