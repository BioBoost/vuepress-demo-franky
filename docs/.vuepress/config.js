import { defaultTheme } from 'vuepress'

export default  {
  title: 'Franky Demo',
  
  theme: defaultTheme({
    // default theme config
    sidebar: [
      '/README.md',
      '/chapter-01-intro/README.md'
      // {
      //   text: 'Home',
      //   link: '/README.md'
      // },
      // {
      //   text: 'Chapter 01 Intro',
      //   children: [
      //     '/chapter-01-intro/README.md'
      //   ],
      // },
    ],
  }),
}