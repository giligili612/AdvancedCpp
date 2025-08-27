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
    ],
    '/cmake/': [
    {
      text: '先用起来',
      collapsed: true,
      items: [
        { text: '安装CMake', link: '/cmake/先用起来/安装CMake' },
        { text: '第一个CMake项目', link: '/cmake/先用起来/第一个CMake项目'},
        { text: '编译使用静态库与动态库', link: '/cmake/先用起来/编译使用静态库与动态库'}
      ]
    },
    {
      text: 'CMake基础',
      collapsed: true,
      items: [
        { text: '看看怎么个事', link: '/widgets/qwidget' },
        { text: 'QPushButton', link: '/widgets/qpushbutton' }
      ]
    },
    {
      text: 'CMake高级',
      collapsed: true,
      items: [
        { text: 'CMake实践', link: '/advanced/signals-slots' },
        { text: '交叉编译', link: '/advanced/events' }
      ]
    }
    ]
  },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
