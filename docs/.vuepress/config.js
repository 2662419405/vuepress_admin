module.exports = {
  title: "学习笔记文档",
  description: "每天学一点,进步多一点",
  plugins: ["@vuepress/back-to-top"],
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/favicon.ico`
      }
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
    editLinks: true,
    lastUpdated: "上次更新 ",
    editLinkText: "发现问题!即使纠正",
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记文档", link: "/home/" },
	  { text: "面试题和技巧", link: "/code/" },
	  { text: "期末考试答案=-=", link: "/answer/" },
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
		  "",{
			  title: "css基础",
			  collapsable: true,
			  children: [
				"css",
			  ]
		  },
		  {
			title: "html基础",
			collapsable: true,
			children: [
			  "html",
			]
		  },
		  {
			title: "js初级",
			collapsable: true,
			children: [
			  "jscj",
			]
		  },
		  {
			title: "fullpage初级",
			collapsable: true,
			children: [
			  "fullpage",
			]
		  },
		  {
			title: "jquery初级",
			collapsable: true,
			children: [
			  "jquery",
			]
		  },
		  {
			title: "js高级",
			collapsable: true,
			children: [
			  "jsgao",
			]
		  },
		  {
			title: "svn命令",
			collapsable: true,
			children: [
			  "svn",
			]
		  },
		  {
			title: "git命令",
			collapsable: true,
			children: [
			  "git",
			]
		  },
		  {
			title: "bootstarp初级",
			collapsable: true,
			children: [
			  "bootstrap",
			]
		  },
		  {
			title: "我真的懂this吗",
			collapsable: true,
			children: [
			  "this",
			]
		  },
		  {
			title: "es6初级",
			collapsable: true,
			children: [
			  "es6",
			]
		  },
		  {
			title: "typescript初级",
			collapsable: true,
			children: [
			  "ts",
			]
		  },
		  {
			title: "node入门",
			collapsable: true,
			children: [
			  "node",
			]
		  },
		  {
			title: "设计模式",
			collapsable: true,
			children: [
			  "sheji",
			]
		  },
		  {
			title: "npm包管理",
			collapsable: true,
			children: [
			  "npm",
			]
		  },
		  {
			title: "webpack打包",
			collapsable: true,
			children: [
			  "webpack",
			]
		  },
		  {
			title: "reactNative开发",
			collapsable: true,
			children: [
			  "rn",
			]
		  },
		  {
			title: "React入门",
			collapsable: true,
			children: [
			  "react",
			]
		  },
		  {
			title: "node宝典",
			collapsable: true,
			children: [
			  "nodebao",
			]
		  },
		  {
			title: "vscode入门",
			collapsable: true,
			children: [
			  "vscode",
			]
		  }
      ],
	  "/code/": [
		"",{
			title: "44道js难题",
			collapsable: true,
			children: [
			"first",
			]
		}
		,{
			title: "基础面试题(一)",
			collapsable: true,
			children: [
			"second",
			]
		}
		,{
			title: "基础面试题(二)",
			collapsable: true,
			children: [
			"fourth",
			]
		}
		,{
			title: "基础面试题(三)",
			collapsable: true,
			children: [
			"chen",
			]
		}
		,{
			title: "反问面试官?",
			collapsable: true,
			children: [
			"fan",
			]
		}
		,{
			title: "2018大厂面试题汇总",
			collapsable: true,
			children: [
			"third",
			]
		},
	  ],
	  "/answer/": [
		  "",
	  ]
    }
  },
  markdown: {
    lineNumbers: true
  }
};
