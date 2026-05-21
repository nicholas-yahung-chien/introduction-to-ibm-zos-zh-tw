import { defineConfig } from 'vitepress'

function normalizeBase(base: string | undefined) {
  if (!base) return '/introduction-to-ibm-zos-zh-tw/'
  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineConfig({
  title: 'Introduction to IBM z/OS',
  description: 'IBM z/OS 入門課程台灣繁體中文化靜態版本',
  lang: 'zh-Hant-TW',
  cleanUrls: true,
  base: normalizeBase(process.env.VITEPRESS_BASE),
  head: [
    ['meta', { name: 'theme-color', content: '#0f62fe' }],
    ['meta', { property: 'og:title', content: 'Introduction to IBM z/OS 台灣繁體中文課程' }],
    ['meta', { property: 'og:description', content: 'IBM 授權 z/OS 入門課程的繁體中文靜態教材、影片與字幕。' }]
  ],
  themeConfig: {
    logo: '/ibm-z-mark.svg',
    nav: [
      { text: '課程', link: '/course/' },
      { text: '影片', link: '/videos/' },
      { text: '互動練習', link: '/practice/' },
      { text: 'Lab', link: '/labs/' },
      { text: '詞彙表', link: '/glossary/' },
      { text: '授權資訊', link: '/license-notes' }
    ],
    sidebar: [
      {
        text: '課程',
        items: [
          { text: '課程首頁', link: '/course/' },
          { text: '課程概觀', link: '/course/course-overview' },
          { text: '大型主機環境', link: '/course/mainframe-environment' },
          { text: '大型主機基礎架構', link: '/course/mainframe-infrastructure' },
          { text: '大型主機安全', link: '/course/mainframe-security' },
          { text: '互動練習', link: '/practice/' },
          { text: 'Lab 與互動實作', link: '/labs/' }
        ]
      },
      {
        text: '資源',
        items: [
          { text: '影片總覽', link: '/videos/' },
          { text: 'Lab 與互動實作', link: '/labs/' },
          { text: '詞彙表', link: '/glossary/' },
          { text: '授權資訊', link: '/license-notes' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicholas-yahung-chien/introduction-to-ibm-zos-zh-tw' }
    ],
    footer: {
      message: 'IBM 授權課程台灣繁體中文化教材，供 IBM Taiwan enablement 使用。',
      copyright: 'Prepared for IBM Taiwan enablement use.'
    },
    search: {
      provider: 'local'
    }
  }
})
