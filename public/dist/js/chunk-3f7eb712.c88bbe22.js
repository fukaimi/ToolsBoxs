(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7eb712"],{"8fb4":function(e,o,t){"use strict";t("f703")},a358:function(e,o,t){"use strict";t.d(o,"a",(function(){return i})),t.d(o,"c",(function(){return c})),t.d(o,"b",(function(){return l}));var n=t("cff8"),s=t.n(n),a=t("b775");const i={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",favoriteUrlOperation:"controller.favorite.sqlitedbOperation",dataConfigOperation:"controller.dataConfig.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},l=(e,o)=>{const t=s.a.get("httpServiceConfig"),n=t.server||"http://127.0.0.1:7071";let i=e.split(".").join("/");return i=n+"/"+i,console.log("url:",i),Object(a["b"])({url:i,method:"post",data:o,params:{},timeout:6e4})}},d44a:function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e._self._c;return o("div",{attrs:{id:"app-base-socket-ipc"}},[e._m(0),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.handleInvoke}},[e._v("发送 - 回调")]),e._v(" 结果："+e._s(e.message1)+" ")],1),o("p"),o("a-space",[o("a-button",{on:{click:e.handleInvoke2}},[e._v("发送 - async/await")]),e._v(" 结果："+e._s(e.message2)+" ")],1)],1),e._m(1),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.handleSendSync}},[e._v("同步消息")]),e._v(" 结果："+e._s(e.message3)+" ")],1)],1),e._m(2),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:e.sendMsgStart}},[e._v("开始")]),o("a-button",{on:{click:e.sendMsgStop}},[e._v("结束")]),e._v(" 结果："+e._s(e.messageString)+" ")],1)],1),e._m(3),o("div",{staticClass:"one-block-2"},[o("a-space",[o("a-button",{on:{click:function(o){return e.createWindow(0)}}},[e._v("打开新窗口2")]),o("a-button",{on:{click:function(o){return e.sendTosubWindow()}}},[e._v("向新窗口2发消息")])],1)],1)])},s=[function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 1. 发送异步消息 ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 2. 同步消息（不推荐，阻塞执行） ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])},function(){var e=this,o=e._self._c;return o("div",{staticClass:"one-block-1"},[o("span",[e._v(" 4. 多窗口通信：子窗口与主进程通信，子窗口互相通信 ")])])}],a=t("a358"),i={data(){return{messageString:"",message1:"",message2:"",message3:"",windowName:"window-1",newWcId:0,views:[{type:"vue",content:"/#/special/subwindow",windowName:"window-1",windowTitle:"new window"}]}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(a["a"].ipcSendMsg),this.$ipc.on(a["a"].ipcSendMsg,(o,t)=>{console.log("[ipcRenderer] [socketMsgStart] result:",t),e.messageString=t,o.sender.send(a["a"].hello,"electron-egg")}),this.$ipc.removeAllListeners(a["c"].window2ToWindow1),this.$ipc.on(a["c"].window2ToWindow1,(e,o)=>{this.$message.info(o)})},sendMsgStart(){const e={type:"start",content:"开始"};this.$ipc.send(a["a"].ipcSendMsg,e)},sendMsgStop(){const e={type:"end",content:""};this.$ipc.send(a["a"].ipcSendMsg,e)},handleInvoke(){const e=this;this.$ipcInvoke(a["a"].ipcInvokeMsg,"异步-回调").then(o=>{console.log("r:",o),e.message1=o})},async handleInvoke2(){const e=await this.$ipcInvoke(a["a"].ipcInvokeMsg,"异步");console.log("msg:",e),this.message2=e},handleSendSync(){const e=this.$ipcSendSync(a["a"].ipcSendSyncMsg,"同步");this.message3=e},createWindow(e){this.$ipcInvoke(a["a"].createWindow,this.views[e]).then(e=>{console.log("[createWindow] id:",e)})},async sendTosubWindow(){this.newWcId=await this.$ipcInvoke(a["a"].getWCid,this.windowName),this.$ipc.sendTo(this.newWcId,a["c"].window1ToWindow2,"窗口1通过 sendTo 给窗口2发送消息")}}},c=i,l=(t("8fb4"),t("2877")),r=Object(l["a"])(c,n,s,!1,null,"850b7854",null);o["default"]=r.exports},f703:function(e,o,t){}}]);
//# sourceMappingURL=chunk-3f7eb712.c88bbe22.js.map