(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b8e7393"],{"51a9":function(e,t,o){"use strict";o("6946")},6946:function(e,t,o){},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return i}));var r=o("cff8"),l=o.n(r),a=o("b775");const n={test:"controller.example.test",messageShow:"controller.example.messageShow",delWindows:"controller.example.delWindows",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",favoriteUrlOperation:"controller.favorite.sqlitedbOperation",dataConfigOperation:"controller.dataConfig.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},c={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},i=(e,t)=>{const o=l.a.get("httpServiceConfig"),r=o.server||"http://127.0.0.1:7071";let n=e.split(".").join("/");return n=r+"/"+n,console.log("url:",n),Object(a["b"])({url:n,method:"post",data:t,params:{},timeout:6e4})}},d8e8:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"divBox",staticStyle:{float:"left","text-align":"left"}},[t("a-card",{staticStyle:{"background-color":"rgba(0,0,0,0.1)","border-radius":"1rem"},attrs:{title:"ChatGPT镜像站"}},[t("a-select",{staticStyle:{width:"120px"},attrs:{slot:"extra","default-value":"1"},on:{change:e.query},slot:"extra",model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("镜像1")]),t("a-select-option",{attrs:{value:"2"}},[e._v("镜像2")])],1),t("div",{staticStyle:{width:"42rem"}},[t("a",{attrs:{href:e.href,target:"_blank"}},[e._v("点击访问")])])],1)],1)},l=[],a=(o("c1df"),o("a358"),{name:"OilPrice",data(){return{href:"https://chat.extkj.cn",city:"1",oilprice:{prov:"Loading...",p0:"0",p89:"0",p92:"0",p95:"0",p98:"0",time:"0000-00-00"},styleGren:{color:"#0bea0d"},styleWarn:{color:"#e88d09"},styleRed:{color:"#FF0000FF"}}},created(){this.query()},methods:{query(){"1"===this.city&&(this.href="https://chat.extkj.cn"),"2"===this.city&&(this.href="https://chat.binjie.site:7777")}}}),n=a,c=(o("51a9"),o("0c7c")),i=Object(c["a"])(n,r,l,!1,null,"6cfbdb1b",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-6b8e7393.ff6cab88.js.map