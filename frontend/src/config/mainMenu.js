const mainMenu = [
    {
        id: 'apis',
        name: '生活娱乐',
        icon: 'youtube',
        param: [{
            icon: 'slack',
            title: '文心一言',
            pageName: 'baiduAi',
            params: {}
        },
            {
                icon: 'global',
                title: '每天60S',
                pageName: 'Day60S',
                params: {}
            },
            {
                icon: 'bar-chart',
                title: '今日油价',
                pageName: 'OilPrice',
                params: {}
            },
            {
                icon: 'robot',
                title: 'ChatGPT',
                pageName: 'ChatGPT',
                params: {}
            }, {
                icon: 'robot',
                title: 'ChatGPT镜像站',
                pageName: 'ChatGPTMirrorImage',
                params: {}
            }]
    }, {
        id: 'tools',
        name: '开发工具',
        icon: 'bug',
        param: [
            {
                icon: 'disconnect',
                title: '在线翻译',
                pageName: 'Translation',
                params: {}
            },
            {
                icon: 'right-square',
                title: '代码生成器(内网支持/网外联系作者获取)',
                pageName: 'CodeGen',
                params: {}
            },
            {
                icon: 'global',
                title: '网址收藏夹',
                pageName: 'FavoritesUrl',
                params: {}
            }, {
                icon: 'code',
                title: 'mySql终端',
                pageName: 'MySqlTool',
                params: {}
            }, {
                icon: 'profile',
                title: '字符串工具',
                pageName: 'TextTool',
                params: {}
            }, {
                icon: 'robot',
                title: '数据模拟',
                pageName: 'RandomDataTool',
                params: {}
            }, {
                icon: 'laptop',
                title: 'Hsa Seed代码生成',
                pageName: 'Ta404ToHsaSeed',
                params: {}
            }, {
                icon: 'laptop',
                title: 'TA404代码生成',
                pageName: 'TA404',
                params: {}
            }, {
                icon: 'file-text',
                title: '文本编辑',
                pageName: 'TxtTool',
                params: {}
            },
            {
                icon: 'bulb',
                title: '草稿本',
                pageName: 'Bulb',
                params: {}
            },
            {
                icon: 'build',
                title: 'CSS梯度',
                pageName: 'CssGradient',
                params: {}
            },
            {
                icon: 'profile',
                title: '屏幕信息',
                pageName: 'BaseScreenIndex',
                params: {}
            }]
    }, {
        id: 'tools',
        name: '关于',
        icon: 'home',
        param: [{
            icon: 'profile',
            title: '自动更新',
            pageName: 'BaseUpdaterIndex',
            params: {}
        }]
    }
]

export {mainMenu}
