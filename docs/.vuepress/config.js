import { defaultTheme } from 'vuepress'

export default  {
  title: 'Franky Demo',
  
  theme: defaultTheme({
    // default theme config
    sidebar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Chapter 01 Intro',
        link: '/chapter-01-intro/README.md',
      },
    ],
    sidebarDepth: 2
  }),
}