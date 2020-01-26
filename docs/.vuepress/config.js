module.exports = {
  title: "学习笔记文档",
  description: "每天学一点,进步多一点",
  extend: "@vuepress/theme-default",
  plugins: ["@vuepress/back-to-top"],
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`
      },
      ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
      ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
      ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ]
  ],
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  serviceWorker: true,
  themeConfig: {
    smoothScroll: true,
    docsRepo: "https://github.com/2662419405/vuepress_admin",
    docsDir: "docs",
    docsBranch: "master",
    activeHeaderLinks: true,
    editLinks: true,
    lastUpdated: "上次更新 ",
    editLinkText: "发现问题!即使纠正",
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记文档", link: "/home/" },
      { text: "面试题", link: "/code/" },
      { text: "思维导图", link: "/xmind/" },
      { text: "答案整理", link: "/answer/" },
      { text: "源码", link: "https://github.com/2662419405/vuepress_admin" },
      {
        text: "SunHang",
        items: [
          {
            text: "博客园",
            link: "https://www.cnblogs.com/sunhang32"
          },
          {
            text: "个人博客",
            link: "https://sunhang.top/"
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_43268396"
          },
          {
            text: "github",
            link: "https://github.com/2662419405"
          }
        ]
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      "/home/": [
        "",
        {
          title: "前端基础",
          collapsable: true,
          children: ["jichu/css","jichu/html"]
        },
        {
          title: "js学习",
          collapsable: true,
          children: ["jsstudy/jscj","jsstudy/jsgao","jsstudy/this","jsstudy/es6"]
        },
        {
          title: "常用UI库",
          collapsable: true,
          children: ["ui/jquery","ui/fullpage","ui/bootstrap"]
        },
        {
          title: "版本控制",
          collapsable: true,
          children: ["ban/svn","ban/git"]
        },
        {
          title: "css预处理",
          collapsable: true,
          children: ["Less","Sass"]
        },
        {
          title: "node",
          collapsable: true,
          children: ["node/npm","node/pm2","node/chang","node/node","node/nodebao"]
        },
        {
          title: "前端进阶",
          collapsable: true,
          children: ["jin/sheji","jin/ts","jin/you","jin/anquan","jin/ce"]
        },
        {
          title: "网络基础",
          collapsable: true,
          children: ["wang/http","wang/request"]
        },
        {
          title: "打包工具",
          collapsable: true,
          children: ["bao/webpack","bao/zhuan"]
        },
        {
          title: "服务器基础",
          collapsable: true,
          children: ["fu/nginx","fu/linux"]
        },
        {
          title: "React入门",
          collapsable: true,
          children: ["react"]
        },
        {
          title: "reactNative开发",
          collapsable: true,
          children: ["rn"]
        },
        {
          title: "vscode入门",
          collapsable: true,
          children: ["vscode"]
        }
      ],
      "/answer/": [""],
      "/code/": [
        "",
        {
          title: "44道js难题",
          collapsable: true,
          children: ["first"]
        },
        {
          title: "随意整理面试题",
          collapsable: true,
          children: ["second"]
        },
        {
          title: "面试题.pdf",
          collapsable: true,
          children: [
            "fourth/first.md",
            "fourth/second.md",
            "fourth/third.md",
            "fourth/fourth.md",
            "fourth/fifth.md",
            "fourth/sixth.md",
          ]
        },
        {
          title: "前端面试题汇总.pdf",
          collapsable: true,
          children: ["chen"]
        },
        {
          title: "反问面试官?",
          collapsable: true,
          children: ["fan"]
        },
        {
          title: "2018大厂面试题汇总",
          collapsable: true,
          children: ["third"]
        },
        {
          title: "城市面试题",
          collapsable: true,
          children: ["city/Beijing.md",
          "city/Hangzhou.md"]
        }
      ],
      "xmind":[
        ""
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
};
