import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import App from './App'
import router from './router'
import { VueAxios } from './utils/request'
import IpcRenderer from '@/utils/ipcRenderer'
import baseUtil from '@/utils/baseUtil'

// 使用antd
Vue.use(antd)

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

// 全局注入IPC通信
Vue.use(IpcRenderer)

Vue.use(baseUtil)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
