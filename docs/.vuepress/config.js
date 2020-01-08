module.exports = {
    title: '学习笔记文档',
	description: '每天学一点,进步多一点',
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
				'css', // 44道面试题难题
				'jquery',
				'jsgao',
				'ts',
				'node',
				'git',
				'es6',
				'sheji',
				'this',
				'npm',
				'webpack',
				'rn',
				'react',
				'nodebao',
				'vscode',
				'test1'
			  ],
			'/code/': [
				'first',      /* /bar/ */
				'second',
				'third',
				'fan',
			],
		}
	},
	markdown: {
		lineNumbers: true
	}
}