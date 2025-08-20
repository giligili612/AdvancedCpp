import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AdvancedCpp",
  description: "A VitePress Site",
  base: "/AdvancedCpp/",
  themeConfig: {
    nav: [
      { text: 'CMake', link: '/cmake/' },
      { text: 'STL', link: '/markdown-examples' },
      { text: '对象与内存模型', link: '/'},
      { text: '语义与资源管理', link: '/'},
      { text: '模板与泛型编程', link: '/'},
      { text: '并发编程', link: '/'},
      { text: '网络编程', link: '/'},
      { text: '工具库', link: '/'},
      { text: '实践', link: '/'},
      { text: '源码阅读', link: '/'}
    ],
    sidebar: {
  '/': [
    {
      text: '首页',link: '/'
    },
    {
      text: 'ModernCMake教程',
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
    ],
    '/cmake': [
    {
      text: '首页',link: '/'
    },
    {
      text: 'ModernCMake教程',
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
