/**
 * 基础路由
 * @type { *[] }
 */
import {AppSider, Menu,Music} from '@/layouts'

const RouteView = {
  name: 'RouteView',
  render: h => h('router-view')
}

export const constantRouterMap = [
  {
    path: '/',
    component: AppSider,
    children: [
      {
        path: '/tools',
        name: 'Tools',
        component: Menu,
        props:{id:'tools'},
        redirect: { name: 'FavoritesUrl' },
        children:[
          {
            path: '/tools/favoritesUrl/index',
            name:'FavoritesUrl',
            component:() => import('@/views/tools/favoritesUrl/index')
          },
          {
            path: '/tools/mysql/index',
            name:'MySqlTool',
            component:() => import('@/views/tools/mysql/index')
          },
          {
            path: '/tools/textTool/index',
            name:'TextTool',
            component:() => import('@/views/tools/textTool/index')
          },
          {
            path: '/tools/randDataTool/index',
            name:'RandomDataTool',
            component:() => import('@/views/tools/randDataTool/index')
          }
        ]
      },
      {
        path: '/music',
        name: 'music',
        components: Music,
        props:{id: 'music'},
        redirect: { name: 'Music' },
        children:[
          {
            path: '/music/general/index',
            name: 'Music',
            component:() => import('@/views/music/general/index1')
          }
        ]
      },
      {
        path: '/base',
        name: 'Base',
        component: Menu,
        props: { id: 'base' },
        redirect: { name: 'BaseUpdaterIndex' },
        children: [
          {
            path: '/base/file/index',
            name: 'BaseFileIndex',
            component: () => import('@/views/base/file/Index')
          },
          {
            path: '/base/socket/ipc',
            name: 'BaseSocketIpc',
            component: () => import('@/views/base/socket/Ipc')
          },
          {
            path: '/base/db/index',
            name: 'BaseDBIndex',
            component: () => import('@/views/base/db/Index')
          },
          {
            path: '/base/sqlitedb/index',
            name: 'BaseSqliteDBIndex',
            component: () => import('@/views/base/sqlitedb/Index')
          },
          {
            path: '/base/windowview/index',
            name: 'BaseWindowViewIndex',
            component: () => import('@/views/base/windowview/Index')
          },
          {
            path: '/base/window/index',
            name: 'BaseWindowIndex',
            component: () => import('@/views/base/window/Index')
          },
          {
            path: '/base/notification/index',
            name: 'BaseNotificationIndex',
            component: () => import('@/views/base/notification/Index')
          },
          {
            path: '/base/powermonitor/index',
            name: 'BasePowerMonitorIndex',
            component: () => import('@/views/base/powermonitor/Index')
          },
          {
            path: '/base/screen/index',
            name: 'BaseScreenIndex',
            component: () => import('@/views/base/screen/Index')
          },
          {
            path: '/base/theme/index',
            name: 'BaseThemeIndex',
            component: () => import('@/views/base/theme/Index')
          },
          {
            path: '/base/software/index',
            name: 'BaseSoftwareIndex',
            component: () => import('@/views/base/software/Index')
          },
          {
            path: '/base/socket/httpserver',
            name: 'BaseSocketHttpServer',
            component: () => import('@/views/base/socket/HttpServer')
          },
          {
            path: '/base/socket/socketserver',
            name: 'BaseSocketSocketServer',
            component: () => import('@/views/base/socket/SocketServer')
          },
          {
            path: '/base/system/index',
            name: 'BaseSystemIndex',
            component: () => import('@/views/base/system/Index')
          },
          {
            path: '/base/testapi/index',
            name: 'BaseTestApiIndex',
            component: () => import('@/views/base/testapi/Index')
          },
          {
            path: '/base/updater/index',
            name: 'BaseUpdaterIndex',
            component: () => import('@/views/base/updater/Index')
          },
        ]
      },
      {
        path: '/other',
        name: 'Other',
        component: Menu,
        props: { id: 'other' },
        redirect: { name: 'OtherTestIndex' },
        children: [
          {
            path: '/other/test/index',
            name: 'OtherTestIndex',
            component: () => import('@/views/other/test/Index')
          },
          {
            path: '/other/java/index',
            name: 'OtherJavaIndex',
            component: () => import('@/views/other/java/Index')
          }
        ]
      }
    ]
  },
  {
    path: '/special',
    component: RouteView,
    //redirect: '/special/subwindow',
    children: [
      {
        path: 'subwindow',
        name: 'SpecialSubwindowIpc',
        component: () => import('@/views/base/subwindow/Ipc')
      }
    ]
  },
]
