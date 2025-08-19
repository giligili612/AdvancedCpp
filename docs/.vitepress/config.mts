import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AdvancedCpp",
  description: "A VitePress Site",
  base: "/AdvancedCpp/",
  themeConfig: {
    sidebar: {
  '/': [
    {
      text: '首页',link: '/'
    },
    {
      text: '入门教程',
      collapsed: false,
      items: [
        { text: 'Qt的安装',
          collapsed: true, 
          items:[
            { text: 'Qt界面', link: '/guide/getting-started'}
          ]
        },
        { text: '快速开始', link: '/guide/getting-started' },
        { text: '搭建开发环境', link: '/guide/setup' }
      ]
    },
    {
      text: '控件篇',
      collapsed: false,
      items: [
        { text: 'QWidget 基础', link: '/widgets/qwidget' },
        { text: 'QPushButton', link: '/widgets/qpushbutton' }
      ]
    },
    {
      text: '进阶技巧',
      collapsed: false,
      items: [
        { text: '信号与槽', link: '/advanced/signals-slots' },
        { text: '事件处理', link: '/advanced/events' }
      ]
    }
    ]
  },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
