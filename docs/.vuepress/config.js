module.exports = {
    title: '文档中心',
    description: 'Just playing around',
    port: '8888',
    base: '/windole-docs/',
    dest: 'docs/.vuepress/dist',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
            {
                text: '主页',
                link: '/'
            },
            { text: '前端规范', link: '/frontStand/' },
            { text: 'node学习', link: '/node/' },
            { text: '前端学习', link: '/frontEnd/' },
            { text: '博客', link: 'https://www.windole.cn' },
        ],
        sidebar: {
            '/frontEnd': [
                {
                    title: 'css',
                    collapsable: true,
                    children: [
                        'frontEnd/css/',
                        'frontEnd/css/layout',
                        'frontEnd/css/box'
                    ]
                },
                {
                    title: 'js',
                    collapsable: true,
                    children: [
                        'frontEnd/js/',
                        'frontEnd/js/dom',
                    ]
                },
                {
                    title: 'mongo',
                    collapsable: true,
                    children: [
                        'frontEnd/mongo/',
                        'frontEnd/mongo/summary',
                        'frontEnd/mongo/baseOrder',
                        'frontEnd/mongo/Schema',
                        'frontEnd/mongo/Model',
                        'frontEnd/mongo/customMethods',
                        'frontEnd/mongo/documentAdd',
                        'frontEnd/mongo/documentSearch',
                        'frontEnd/mongo/documentUpdate',
                        'frontEnd/mongo/documentDelete',
                        'frontEnd/mongo/middleware',
                        'frontEnd/mongo/postQuery',
                        'frontEnd/mongo/documentValidation',
                        'frontEnd/mongo/jointOperation'
                    ]
                },
                {
                    title: 'vue',
                    collapsable: true,
                    children: [
                        'frontEnd/vue/',
                        'frontEnd/vue/a',
                    ]
                },
                {
                    title: 'webpack',
                    collapsable: true,
                    children: [
                        'frontEnd/webpack/',
                        'frontEnd/webpack/a',
                    ]
                }
            ],
            '/frontStand/': [
                'a',
                'b'
            ]
        }
    }
}
