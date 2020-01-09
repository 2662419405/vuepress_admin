module.exports = {
    title: '学习笔记文档',
	description: '每天学一点,进步多一点',
	plugins: [
		'@vuepress/back-to-top',
	],
	base:'/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
	evergreen: true,
	serviceWorker: true,
	themeConfig: {
		smoothScroll: true,
		// 假如你的文档仓库和项目本身不在一个仓库：
		docsRepo: 'https://github.com/2662419405/vuepress_admin',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '发现问题!即使纠正',
		nav: [
		  { text: '首页', link: '/' },
		  { text: '笔记文档', link: '/home/' },
		  { text: '面试题和技巧', link: '/code/' },
		  {
			text: 'Languages',
			items: [
			  { text: '简体中文', link: '/language/chinese' },
			  { text: 'English', link: '/language/english' }
			]
		  },
		  { text: 'Github', link: 'https://github.com/2662419405' },
		  { text: 'SunHang', link: 'https://sunhang.top/' },
		],
		sidebarDepth: 2,
		sidebar: {
			'/home/': [
				'',     /* /foo/ */
				'css', 
				'html',
				'jscj',
				'fullpage',
				'jquery',
				'jsgao',
				'svn',
				'git',
				'bootstrap',
				'this',
				'es6',
				'ts',
				'node',
				'sheji',
				'npm',
				'webpack',
				'rn',
				'react',
				'nodebao',
				'vscode',
			  ],
			'/code/': [
				'first',      /* /bar/ */
				'second',
				'third',
				'fourth',
				'fan',
				'chen',
			],
		}
	},
	markdown: {
		lineNumbers: true
	}
}