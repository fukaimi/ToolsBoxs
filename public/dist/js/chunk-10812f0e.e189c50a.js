(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10812f0e"],{"0780":function(e,t,o){"use strict";o("5312")},5312:function(e,t,o){},"8f7f":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",[t("a-result",{attrs:{status:"success",title:"Tools工具箱","sub-title":"在这里你可以查看你的软件版本及进行软件更新.(作者:fukaimin)"},scopedSlots:e._u([{key:"extra",fn:function(){return[t("a-button",{key:"console",attrs:{type:"primary"},on:{click:function(t){return e.checkForUpdater()}}},[e._v(" 检查更新 ")]),t("a-button",{key:"buy",on:{click:function(t){return e.download()}}},[e._v(" 下载安装 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"one-block-2"},[t("a-progress",{attrs:{percent:e.percentNumber,status:"active"}}),t("a-space",[e._v(" "+e._s(e.progress)+" ")])],1)]},proxy:!0}])},[t("div",{staticClass:"desc"},[t("p",{staticStyle:{"font-size":"16px"}},[t("strong",[e._v("为了保证您能够进行正常的软件升级,请确保达到下面的条件:")])]),t("p",{staticStyle:{"text-align":"left"}},[t("a-icon",{style:{color:"green"},attrs:{type:"check-circle"}}),e._v(" 能够正常的访问到互联网 ")],1),t("p",{staticStyle:{"text-align":"left"}},[t("a-icon",{style:{color:"green"},attrs:{type:"check-circle"}}),e._v(" 能够正常的访问GitHub "),t("a",{attrs:{target:"_blank",href:"https://github.com/fukaimi/tools/blob/main/out/"}},[e._v("https://github.com/fukaimi/tools/blob/main/out/ >")])],1),t("p",{staticStyle:{"text-align":"left"}},[t("a-icon",{style:{color:"green"},attrs:{type:"check-circle"}}),e._v(" 大陆用户访问:"),t("a",{attrs:{target:"_blank",href:"https://gitee.com/fukaimin/tools/blob/master/out"}},[e._v("https://gitee.com/fukaimin/tools/blob/master/out")])],1)])])],1)},l=[],n=o("a358"),a={data(){return{status:0,progress:"",percentNumber:0,show:!1}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(n["c"].appUpdater),this.$ipc.on(n["c"].appUpdater,(t,o)=>{o=JSON.parse(o),e.status=o.status,3==o.status?(e.progress=o.desc,e.percentNumber=o.percentNumber):e.$message.info(o.desc)})},checkForUpdater(){this.$ipcInvoke(n["a"].checkForUpdater).then(e=>{console.log(e),this.show=!0})},download(){1===this.status?this.$ipcInvoke(n["a"].downloadApp).then(e=>{console.log(e),this.show=!0}):this.$message.info("没有可用版本")}}},c=a,s=(o("0780"),o("0c7c")),i=Object(s["a"])(c,r,l,!1,null,"6b8c0236",null);t["default"]=i.exports},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return s}));var r=o("cff8"),l=o.n(r),n=o("b775");const a={test:"controller.example.test",messageShow:"controller.example.messageShow",delWindows:"controller.example.delWindows",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",favoriteUrlOperation:"controller.favorite.sqlitedbOperation",dataConfigOperation:"controller.dataConfig.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},s=(e,t)=>{const o=l.a.get("httpServiceConfig"),r=o.server||"http://127.0.0.1:7071";let a=e.split(".").join("/");return a=r+"/"+a,console.log("url:",a),Object(n["b"])({url:a,method:"post",data:t,params:{},timeout:6e4})}}}]);
//# sourceMappingURL=chunk-10812f0e.e189c50a.js.map