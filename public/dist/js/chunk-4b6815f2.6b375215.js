(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b6815f2"],{"02ce":function(e,t,o){"use strict";o("4d86")},"260d":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("14d9"),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),_api_main__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a358");__webpack_exports__["a"]={data(){return{spinning:!1,formsource:{},visible2:!1,kzt:"",txt:"",isUpdate:!1,resourceLis:[],resourceUrl:"",visible:!1}},created(){this.initScene()},methods:{initScene(){const self=this,params={action:"getSceneTemp",info:{scene:"BULB"}};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,params).then(res=>{if(0===res.result.length)return void(this.isUpdate=!1);let ressource=eval("("+res.result[0].alldata+")");this.resourceUrl=ressource.resourceUrl,this.kzt=ressource.kzt,this.isUpdate=!0})},kztChange(e){const t=this.kzt,o=this.resourceUrl;let n={scene:"BULB",memo:"草稿",alldata:JSON.stringify({kzt:t,resourceUrl:o})};if(this.isUpdate){const e={action:"updateSceneTemp",info:n};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,e).then(e=>{e.result&&(this.isUpdate=!0)})}else{const e={action:"addSceneTemp",info:n};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,e).then(e=>{e.result&&(this.isUpdate=!0)})}},delData(e){const t=this,o={action:"delDataConfig",info:{data_id:e}};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,o).then(e=>{if(e.result)return t.$message.success("删除成功"),this.initData(),void(this.resourceUrl="");t.$message.success("删除失败")})},testSelect(e){let t=e.target.selectionStart,o=e.target.selectionEnd,n=e.target.value;console.log(e.target.selectionStart,e.target.selectionEnd,e.target.value);let i="";n&&0!=o&&(i=n.slice(t,o)),console.log(i),this.txt=i},showModal(){this.formInline={data_value:"http://",data_desc:""},this.visible=!0},closeModal(){this.visible2=!1,this.visible=!1},showModal2(){this.visible2=!0},handleOk(e){console.log(e),this.handleSubmit(e),this.visible=!1},handleSubmit(e){if(console.log(this.formInline),!this.formInline.data_desc)return;const t=this,o={action:"addDataConfig",info:{...this.formInline,data_key:"MYSQL_API_URL",data_memo:"mysql数据源"}};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,o).then(e=>{if(e.result)return t.$message.success("新增成功"),void this.initData();t.$message.success("新增失败")})},post(){this.spinning=!0;const e=this,t={action:"POST",data:{url:this.resourceUrl,sqlStr:this.txt,token:this.token}};this.$ipcInvoke(_api_main__WEBPACK_IMPORTED_MODULE_1__["a"].dataConfigOperation,t).then(t=>{if(0!==t.result.code)this.spinning=!1,e.$message.error(t.result.message);else{e.$message.success("执行成功"),this.spinning=!1,this.columns=[];let o=t.result.data,n={};if(o){n=o[0];for(let t of Object.keys(n)){console.log(t);let e={title:t,dataIndex:t,ellipsis:!0};this.columns.push(e)}this.columns.push({title:"description",dataIndex:"description",ellipsis:!0});const e=[];for(let t=0;t<o.length;t++)o[t].description=JSON.stringify(o[t]),e.push(o[t]);this.data=e}}})},handleChange(e){console.log("selected "+e)},handleBlur(){console.log("blur")},handleFocus(){console.log("focus")},filterOption(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}}},"4d86":function(e,t,o){},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return l}));var n=o("cff8"),i=o.n(n),s=o("b775");const r={test:"controller.example.test",messageShow:"controller.example.messageShow",delWindows:"controller.example.delWindows",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",favoriteUrlOperation:"controller.favorite.sqlitedbOperation",dataConfigOperation:"controller.dataConfig.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",getWCid:"controller.example.getWCid",startJavaServer:"controller.example.startJavaServer",closeJavaServer:"controller.example.closeJavaServer",hello:"controller.example.hello"},a={appUpdater:"app.updater",window1ToWindow2:"window1-to-window2",window2ToWindow1:"window2-to-window1"},l=(e,t)=>{const o=i.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let r=e.split(".").join("/");return r=n+"/"+r,console.log("url:",r),Object(s["b"])({url:r,method:"post",data:t,params:{},timeout:6e4})}},d51d:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",[t("a-spin",{attrs:{spinning:e.spinning}},[t("div",{staticStyle:{"text-align":"left",height:"100vh"}},[t("a-textarea",{staticClass:"bg",staticStyle:{"{font-size":"22px"},attrs:{placeholder:"",row:10,minRows:10},on:{change:e.kztChange,select:e.testSelect},model:{value:e.kzt,callback:function(t){e.kzt=t},expression:"kzt"}})],1)])],1)},i=[],s=o("260d"),r=s["a"],a=(o("02ce"),o("0c7c")),l=Object(a["a"])(r,n,i,!1,null,"65f3078c",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4b6815f2.6b375215.js.map