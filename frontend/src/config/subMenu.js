/**
 * 子菜单
 */
export default {
	apis:{
		'menu_300':{
			icon:'robot',
			title:'ChatGPT',
			pageName:'ChatGPT',
			params:{}
		}
	},
	tools:{
		'menu_001':{
			icon:'global',
			title:'网址收藏夹',
			pageName:'FavoritesUrl',
			params:{}
		},'menu_002':{
			icon:'code',
			title:'mySql终端',
			pageName:'MySqlTool',
			params:{}
		},'menu_003':{
			icon:'profile',
			title:'字符串工具',
			pageName:'TextTool',
			params:{}
		},'menu_004':{
			icon:'robot',
			title:'数据模拟',
			pageName:'RandomDataTool',
			params:{}
		},'menu_005':{
			icon:'laptop',
			title:'Hsa Seed代码生成',
			pageName: 'Ta404ToHsaSeed',
			params:{}
		},'menu_006':{
			icon:'file-text',
			title:'文本编辑',
			pageName: 'TxtTool',
			params:{}
		},'menu_007':{
			icon:'disconnect',
			title:'在线翻译',
			pageName:'Translation',
			params:{}
		}
	},
	base: {
		// 'menu_100' : {
		// 	icon: 'profile',
		// 	title: '文件',
		// 	pageName: 'BaseFileIndex',
		// 	params: {}
		// },
		// 'menu_300' : {
		// 	icon: 'profile',
		// 	title: '通信',
		// 	pageName: 'BaseSocketIpc',
		// 	params: {}
		// },
		// 'menu_301' : {
		// 	icon: 'profile',
		// 	title: 'http服务',
		// 	pageName: 'BaseSocketHttpServer',
		// 	params: {}
		// },
		// 'menu_302' : {
		// 	icon: 'profile',
		// 	title: 'socket服务',
		// 	pageName: 'BaseSocketSocketServer',
		// 	params: {}
		// },
		// 'menu_310' : {
		// 	icon: 'profile',
		// 	title: 'json数据库',
		// 	pageName: 'BaseDBIndex',
		// 	params: {}
		// },
		// 'menu_320' : {
		// 	icon: 'profile',
		// 	title: 'sqlite数据库',
		// 	pageName: 'BaseSqliteDBIndex',
		// 	params: {}
		// },
		// 'menu_400' : {
		// 	icon: 'profile',
		// 	title: '视图',
		// 	pageName: 'BaseWindowViewIndex',
		// 	params: {}
		// },
		// 'menu_401' : {
		// 	icon: 'profile',
		// 	title: '窗口',
		// 	pageName: 'BaseWindowIndex',
		// 	params: {}
		// },
		// 'menu_405' : {
		// 	icon: 'profile',
		// 	title: '桌面通知',
		// 	pageName: 'BaseNotificationIndex',
		// 	params: {}
		// },
		'menu_407' : {
			icon: 'profile',
			title: '电源监控',
			pageName: 'BasePowerMonitorIndex',
			params: {}
		},
		'menu_409' : {
			icon: 'profile',
			title: '屏幕信息',
			pageName: 'BaseScreenIndex',
			params: {}
		},
		// 'menu_411' : {
		// 	icon: 'profile',
		// 	title: '系统主题',
		// 	pageName: 'BaseThemeIndex',
		// 	params: {}
		// },
		'menu_411' : {
			icon: 'profile',
			title: '软件自启',
			pageName: 'BaseSystemIndex',
			params: {}
		},
		'menu_412' : {
			icon: 'profile',
			title: '自动更新',
			pageName: 'BaseUpdaterIndex',
			params: {}
		},
		// 'menu_500' : {
		// 	icon: 'profile',
		// 	title: '软件调用',
		// 	pageName: 'BaseSoftwareIndex',
		// 	params: {}
		// },
		// 'menu_900' : {
		// 	icon: 'profile',
		// 	title: '测试',
		// 	pageName: 'BaseTestApiIndex',
		// 	params: {}
		// }
	},
	other: {
		'menu_100' : {
			icon: 'profile',
			title: '测试',
			pageName: 'OtherTestIndex',
			params: {}
		},
		'menu_200' : {
			icon: 'profile',
			title: 'java',
			pageName: 'OtherJavaIndex',
			params: {}
		},
	}
}
