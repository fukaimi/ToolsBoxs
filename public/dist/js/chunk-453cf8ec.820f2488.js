(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-453cf8ec"],{3460:function(e,t,o){"use strict";o("ea2e")},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return n})),o.d(t,"b",(function(){return s}));var l=o("cff8"),a=o.n(l),r=o("b775");const i={test:"controller.example.test",messageShow:"controller.example.messageShow",delWindows:"controller.example.delWindows",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",favoriteUrlOperation:"controller.favorite.sqlitedbOperation",dataConfigOperation:"controller.dataConfig.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},n={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},s=(e,t)=>{const o=a.a.get("httpServiceConfig"),l=o.server||"http://127.0.0.1:7071";let i=e.split(".").join("/");return i=l+"/"+i,console.log("url:",i),Object(r["b"])({url:i,method:"post",data:t,params:{},timeout:6e4})}},af06:function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"divBox",staticStyle:{float:"left","text-align":"left"}},[t("a-card",{staticStyle:{"background-color":"rgba(0,0,0,0.1)","border-radius":"1rem"},attrs:{title:"今日油价"}},[t("a-select",{staticStyle:{width:"120px"},attrs:{slot:"extra","default-value":"云南"},on:{change:e.query},slot:"extra",model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},[t("a-select-option",{attrs:{value:"湖南"}},[e._v("湖南")]),t("a-select-option",{attrs:{value:"湖北"}},[e._v("湖北")]),t("a-select-option",{attrs:{value:"广东"}},[e._v("广东")]),t("a-select-option",{attrs:{value:"广西"}},[e._v("广西")]),t("a-select-option",{attrs:{value:"河南"}},[e._v("河南")]),t("a-select-option",{attrs:{value:"河北"}},[e._v("河北")]),t("a-select-option",{attrs:{value:"山东"}},[e._v("山东")]),t("a-select-option",{attrs:{value:"山西"}},[e._v("山西")]),t("a-select-option",{attrs:{value:"江苏"}},[e._v("江苏")]),t("a-select-option",{attrs:{value:"浙江"}},[e._v("浙江")]),t("a-select-option",{attrs:{value:"江西"}},[e._v("江西")]),t("a-select-option",{attrs:{value:"黑龙江"}},[e._v("江黑龙江")]),t("a-select-option",{attrs:{value:"新疆"}},[e._v("新疆")]),t("a-select-option",{attrs:{value:"云南"}},[e._v("云南")]),t("a-select-option",{attrs:{value:"贵州"}},[e._v("贵州")]),t("a-select-option",{attrs:{value:"福建"}},[e._v("福建")]),t("a-select-option",{attrs:{value:"吉林"}},[e._v("吉林")]),t("a-select-option",{attrs:{value:"安徽"}},[e._v("安徽")]),t("a-select-option",{attrs:{value:"四川"}},[e._v("四川")]),t("a-select-option",{attrs:{value:"西藏"}},[e._v("西藏")]),t("a-select-option",{attrs:{value:"宁夏"}},[e._v("宁夏")]),t("a-select-option",{attrs:{value:"辽宁"}},[e._v("辽宁")]),t("a-select-option",{attrs:{value:"青海"}},[e._v("青海")]),t("a-select-option",{attrs:{value:"甘肃"}},[e._v("甘肃")]),t("a-select-option",{attrs:{value:"陕西"}},[e._v("陕西")]),t("a-select-option",{attrs:{value:"内蒙古"}},[e._v("内蒙古")]),t("a-select-option",{attrs:{value:"台湾"}},[e._v("台湾")]),t("a-select-option",{attrs:{value:"北京"}},[e._v("北京")]),t("a-select-option",{attrs:{value:"上海"}},[e._v("上海")]),t("a-select-option",{attrs:{value:"天津"}},[e._v("天津")])],1),t("a-descriptions",{attrs:{title:e.oilprice.prov}},[t("a-descriptions-item",{attrs:{label:"零号柴油"}},[t("span",{style:e.oilprice.p0<7?e.styleGren:e.oilprice.p0>8?e.styleRed:e.styleWarn},[e._v(e._s(e.oilprice.p0)+" 元")])]),t("a-descriptions-item",{attrs:{label:"89号汽油"}},[t("span",{style:e.oilprice.p89<7?e.styleGren:e.oilprice.p89>8?e.styleRed:e.styleWarn},[e._v(e._s(e.oilprice.p89)+" 元")])]),t("a-descriptions-item",{attrs:{label:"92号汽油"}},[t("span",{style:e.oilprice.p92<7?e.styleGren:e.oilprice.p92>8?e.styleRed:e.styleWarn},[e._v(e._s(e.oilprice.p92)+" 元")])]),t("a-descriptions-item",{attrs:{label:"95号汽油"}},[t("span",{style:e.oilprice.p95<7?e.styleGren:e.oilprice.p95>8?e.styleRed:e.styleWarn},[e._v(e._s(e.oilprice.p95)+" 元")])]),t("a-descriptions-item",{attrs:{label:"98号汽油"}},[t("span",{style:e.oilprice.p98<7?e.styleGren:e.oilprice.p98>8?e.styleRed:e.styleWarn},[e._v(e._s(e.oilprice.p98)+" 元")])]),t("a-descriptions-item",{attrs:{label:"数据更新时间"}},[e._v(" "+e._s(e.oilprice.time)+" ")])],1)],1)],1)},a=[],r=o("c1df"),i=o.n(r),n=o("a358"),s={name:"OilPrice",data(){return{city:"云南",oilprice:{prov:"Loading...",p0:"0",p89:"0",p92:"0",p95:"0",p98:"0",time:"0000-00-00"},styleGren:{color:"#0bea0d"},styleWarn:{color:"#e88d09"},styleRed:{color:"#FF0000FF"}}},created(){this.query()},methods:{query(){this.nowtime=i()(new Date).format("HH:mm");const e={action:"GET",data:{url:this.systemConfig.oilprice,prov:this.city}};this.$ipcInvoke(n["a"].dataConfigOperation,e).then(e=>{e.result&&(this.oilprice=e.result.data)})}}},c=s,p=(o("3460"),o("0c7c")),v=Object(p["a"])(c,l,a,!1,null,"63f2e531",null);t["default"]=v.exports},ea2e:function(e,t,o){}}]);
//# sourceMappingURL=chunk-453cf8ec.820f2488.js.map