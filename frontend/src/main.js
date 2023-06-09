import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import App from './App'
import router from './router'
import { VueAxios } from './utils/request'
import IpcRenderer from '@/utils/ipcRenderer'
import baseUtil from '@/utils/baseUtil'
import CodeEditor from 'bin-code-editor';
import {systemConfig} from '@/api/systemConfig'
// markdown样式
import "github-markdown-css";
import "@/views/base/css/base.css"
import VueParticles from 'vue-particles'
import SocketIO from "vue-socket.io";
import ClientSocketIO from "socket.io-client";
Vue.use(
    new SocketIO({
      debug: false,//开启调试模式
      connection: ClientSocketIO.connect(systemConfig.webSocketUrl, {
        transports: ["websocket"],//默认使用的请求方式
        autoConnect: false,//是否自动连接
      }),
    })
);


Vue.use(VueParticles)


//json代码框
Vue.use(CodeEditor);

// 使用antd
Vue.use(antd)

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

// 全局注入IPC通信
Vue.use(IpcRenderer)

Vue.use(baseUtil)

Vue.prototype.systemConfig = systemConfig
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
