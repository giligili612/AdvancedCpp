import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AdvancedCpp",
  description: "A VitePress Site",
  base: "/AdvancedCpp/",
  themeConfig: {
    nav: [
      { text: 'CMake', link: '/cmake/' },
      { text: 'STL', link: '/STL/' },
      { text: '高级特性', link: '/AdvancedFeatures/'},
      { text: 'Linux C/C++编程', link: '/Linux/'},
      { text: '模板与泛型编程', link: '/'},
      { text: '并发编程', link: '/'},
      { text: '工具库', link: '/'},
      { text: '实践', link: '/projects/'},
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
        { text: '编译使用静态库与动态库', link: '/cmake/先用起来/编译使用静态库与动态库'},
        { text: 'CMake基本流程', link: '/cmake/先用起来/CMake基本流程'}
      ]
    },
    {
      text: 'CMake常用功能',
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
    ],
    '/AdvancedFeatures/': [
    {
      text: '先用起来',
      collapsed: true,
      items: [
        { text: '安装CMake', link: '/cmake/先用起来/安装CMake' },
        { text: '第一个CMake项目', link: '/cmake/先用起来/第一个CMake项目'},
        { text: '编译使用静态库与动态库', link: '/cmake/先用起来/编译使用静态库与动态库'},
        { text: 'CMake基本流程', link: '/cmake/先用起来/CMake基本流程'}
      ]
    },
    {
      text: 'CMake常用功能',
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
    ],
    '/Linux/': [
    {
      text: 'LinuxIO',
      collapsed: true,
      items: [
      ]
    },
    {
      text: 'Linux并发程序设计',
      collapsed: true,
      items: [
        { text: '看看怎么个事', link: '/widgets/qwidget' },
      ]
    },
    {
      text: '网络编程',
      collapsed: true,
      items: [
        { 
          text: 'Linux网络基础API',
          collapsed: true,
          items: [
            {text: '字节序', link: '/Linux/Net/字节序'},
            {text: 'socket地址结构', link: '/Linux/Net/socket地址结构'},
            {text: 'IP地址转换函数', link: '/Linux/Net/IP地址转换函数'},
          ] 
        },
        {
          text: '高级IO函数',
          collapsed: true,
          items: [

          ]
        }
      ]
    }
    ],
    '/projects/': [
    {
      text: '百万并发Reactor服务器',
      collapsed: true,
      items: [
      ]
    },
    {
      text: '数据开放平台',
      collapsed: true,
      items: [
        { text: '看看怎么个事', link: '/widgets/qwidget' },
      ]
    },
    {
      text: 'C++游戏引擎',
      collapsed: true,
      items: [
        { text: 'CMake实践', link: '/advanced/signals-slots' },
      ]
    }
    ]
  },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
