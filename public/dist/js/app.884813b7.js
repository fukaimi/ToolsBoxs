(function(e){function n(n){for(var a,c,r=n[0],u=n[1],i=n[2],d=0,l=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&l.push(s[c][0]),s[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,c=1;c<t.length;c++){var r=t[c];0!==s[r]&&(a=!1)}a&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},c={app:0},s={app:0},o=[];function r(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0b68908e":"c45d0773","chunk-1c99940f":"c54f5104","chunk-23da996a":"255a4ad3","chunk-2d0a3c2b":"45bbf008","chunk-2d224950":"028c6784","chunk-3315c812":"2b640b1f","chunk-34fd7d2f":"76f4c545","chunk-3f2d6b1e":"d65254a7","chunk-3f7eb712":"c88bbe22","chunk-4a6aa20a":"e42f1c63","chunk-54829119":"95fd6c76","chunk-59f3a09c":"b223e968","chunk-5a2e4377":"40ddb33a","chunk-61c236c6":"53c1b2d0","chunk-659aec46":"acc22400","chunk-7376b260":"04d4d800","chunk-8c9d8a4a":"e93b0796","chunk-8cf37860":"85d09c54","chunk-11d0b60d":"0d9442e3","chunk-4edf2cac":"188f5315","chunk-8cf97b86":"fa95ef0f","chunk-a3c23d44":"a639b46e","chunk-aea8f690":"21947106","chunk-b3cec6d6":"b5b684f9","chunk-b5c5a38c":"340da3f9","chunk-ee9f0388":"16468be4"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0b68908e":1,"chunk-1c99940f":1,"chunk-23da996a":1,"chunk-3315c812":1,"chunk-34fd7d2f":1,"chunk-3f2d6b1e":1,"chunk-3f7eb712":1,"chunk-4a6aa20a":1,"chunk-54829119":1,"chunk-59f3a09c":1,"chunk-5a2e4377":1,"chunk-61c236c6":1,"chunk-659aec46":1,"chunk-7376b260":1,"chunk-8c9d8a4a":1,"chunk-4edf2cac":1,"chunk-8cf97b86":1,"chunk-a3c23d44":1,"chunk-aea8f690":1,"chunk-b3cec6d6":1,"chunk-b5c5a38c":1,"chunk-ee9f0388":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0b68908e":"d635b2f3","chunk-1c99940f":"87d5fe76","chunk-23da996a":"e1e0247d","chunk-2d0a3c2b":"31d6cfe0","chunk-2d224950":"31d6cfe0","chunk-3315c812":"9bb68a1d","chunk-34fd7d2f":"6a07402f","chunk-3f2d6b1e":"80096fc0","chunk-3f7eb712":"e8a7c696","chunk-4a6aa20a":"2f12db76","chunk-54829119":"7accf073","chunk-59f3a09c":"d07903e2","chunk-5a2e4377":"3f34af50","chunk-61c236c6":"5556c59f","chunk-659aec46":"e6ab9c20","chunk-7376b260":"83845a9b","chunk-8c9d8a4a":"baa718b4","chunk-8cf37860":"31d6cfe0","chunk-11d0b60d":"31d6cfe0","chunk-4edf2cac":"5cf6519b","chunk-8cf97b86":"38774961","chunk-a3c23d44":"0c43dff1","chunk-aea8f690":"b6e3057c","chunk-b3cec6d6":"6bcfc99c","chunk-b5c5a38c":"5bd8e053","chunk-ee9f0388":"ab0373ec"}[e]+".css",s=u.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var i=o[r],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===s))return n()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){i=l[r],d=i.getAttribute("data-href");if(d===a||d===s)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var a=n&&n.target&&n.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],h.parentNode.removeChild(h),t(o)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=s[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise((function(n,t){a=s[e]=[n,t]}));n.push(a[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=r(e);var l=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=s[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}s[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var h=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"044b":function(e,n,t){},"3f4f":function(e,n,t){"use strict";t("89b9")},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=s(e);return t(n)}function s(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=s,e.exports=c,c.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);var a,c,s=t("a026"),o=t("f23d"),r=(t("3aed"),function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],i={name:"App",components:{},data(){return{}},watch:{},methods:{}},d=i,l=(t("3f4f"),t("2877")),h=Object(l["a"])(d,r,u,!1,null,null,null),f=h.exports,b=t("8c4f"),m=function(){var e=this,n=e._self._c;return n("a-layout",{attrs:{id:"app-layout-sider"}},[n("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"},model:{value:e.collapsed,callback:function(n){e.collapsed=n},expression:"collapsed"}},[n("div",{staticClass:"logo"},[n("img",{staticClass:"pic-logo",attrs:{src:t("cf05")}})]),n("a-menu",{staticClass:"menu-item",attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key]},on:{click:e.menuHandle}},e._l(e.menu,(function(t,a){return n("a-menu-item",{key:a},[n("a-icon",{attrs:{type:t.icon}}),e._v(" "+e._s(t.title)+" ")],1)})),1)],1),n("a-layout",[n("a-layout-content",{staticClass:"layout-content"},[n("router-view")],1)],1)],1)},p=[],k=(t("14d9"),{name:"AppSider",data(){return{collapsed:!0,default_key:"menu_0",current:"",menu:{menu_0:{icon:"bug",title:"工具",pageName:"Tools",params:{}},menu_1:{icon:"home",title:"其他",pageName:"Base",params:{}}}}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(e){this.current=e?e.key:this.default_key;const n=this.menu[this.current];console.log("[home] load page:",n.pageName),this.$router.push({name:n.pageName,params:n.params})}}}),j=k,y=(t("d4dd"),Object(l["a"])(j,m,p,!1,null,"7ef3a9c4",null)),g=y.exports,v=function(){var e=this,n=e._self._c;return n("a-layout",{attrs:{id:"app-menu"}},[n("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"}},[n("a-menu",{attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key],"selected-keys":[e.current]},on:{click:e.menuClick}},e._l(e.menu,(function(t,a){return n("a-menu-item",{key:a},[n("router-link",{attrs:{to:{name:t.pageName,params:t.params}}},[n("span",{staticStyle:{float:"left"}},[n("a-icon",{attrs:{type:t.icon}}),e._v(e._s(t.title))],1)])],1)})),1)],1),n("a-layout",[n("a-layout-content",[n("router-view")],1)],1)],1)},x=[],w={tools:{menu_001:{icon:"global",title:"网址收藏夹",pageName:"FavoritesUrl",params:{}},menu_002:{icon:"code",title:"mySql终端",pageName:"MySqlTool",params:{}},menu_003:{icon:"profile",title:"文本工具",pageName:"TextTool",params:{}},menu_004:{icon:"robot",title:"数据模拟",pageName:"RandomDataTool",params:{}},menu_005:{icon:"laptop",title:"Hsa Seed代码生成",pageName:"Ta404ToHsaSeed",params:{}}},base:{menu_407:{icon:"profile",title:"电源监控",pageName:"BasePowerMonitorIndex",params:{}},menu_409:{icon:"profile",title:"屏幕信息",pageName:"BaseScreenIndex",params:{}},menu_412:{icon:"profile",title:"自动更新",pageName:"BaseUpdaterIndex",params:{}}},other:{menu_100:{icon:"profile",title:"测试",pageName:"OtherTestIndex",params:{}},menu_200:{icon:"profile",title:"java",pageName:"OtherJavaIndex",params:{}}}},S={props:{id:{type:String,default:""}},data(){return{menu:{},default_key:"menu_100",current:"",keys:[]}},watch:{id:function(){this.menuHandle()}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(){switch(this.current=this.default_key,this.id){case"tools":this.menu=w.tools;break;case"base":this.menu=w.base;break;case"other":this.menu=w.other;break}const e=this.menu[this.current];this.$router.push({name:e.pageName,params:e.params})},menuClick(e){this.current=e.key}}},A=S,T=(t("b845"),Object(l["a"])(A,v,x,!1,null,"9c6ec018",null)),C=T.exports,I=t("f4b7"),K=t.n(I),z={},U=Object(l["a"])(z,a,c,!1,null,null,null);"function"===typeof K.a&&K()(U);var B=U.exports;const N={name:"RouteView",render:e=>e("router-view")},O=[{path:"/",component:g,children:[{path:"/tools",name:"Tools",component:C,props:{id:"tools"},redirect:{name:"FavoritesUrl"},children:[{path:"/tools/favoritesUrl/index",name:"FavoritesUrl",component:()=>t.e("chunk-b5c5a38c").then(t.bind(null,"7f0b"))},{path:"/tools/mysql/index",name:"MySqlTool",component:()=>Promise.all([t.e("chunk-8cf37860"),t.e("chunk-11d0b60d")]).then(t.bind(null,"e168"))},{path:"/tools/textTool/index",name:"TextTool",component:()=>t.e("chunk-54829119").then(t.bind(null,"2090"))},{path:"/tools/randDataTool/index",name:"RandomDataTool",component:()=>t.e("chunk-2d0a3c2b").then(t.bind(null,"040a"))},{path:"/tools/uichange/ta404ToHsa/index",name:"Ta404ToHsaSeed",component:()=>t.e("chunk-aea8f690").then(t.bind(null,"14b0"))}]},{path:"/music",name:"music",components:B,props:{id:"music"},redirect:{name:"Music"},children:[{path:"/music/general/index",name:"Music",component:()=>t.e("chunk-2d224950").then(t.bind(null,"e16d"))}]},{path:"/base",name:"Base",component:C,props:{id:"base"},redirect:{name:"BaseUpdaterIndex"},children:[{path:"/base/file/index",name:"BaseFileIndex",component:()=>t.e("chunk-659aec46").then(t.bind(null,"c9d6"))},{path:"/base/socket/ipc",name:"BaseSocketIpc",component:()=>t.e("chunk-3f7eb712").then(t.bind(null,"d44a"))},{path:"/base/db/index",name:"BaseDBIndex",component:()=>t.e("chunk-1c99940f").then(t.bind(null,"e091"))},{path:"/base/sqlitedb/index",name:"BaseSqliteDBIndex",component:()=>t.e("chunk-61c236c6").then(t.bind(null,"022e"))},{path:"/base/windowview/index",name:"BaseWindowViewIndex",component:()=>t.e("chunk-7376b260").then(t.bind(null,"ae87"))},{path:"/base/window/index",name:"BaseWindowIndex",component:()=>t.e("chunk-b3cec6d6").then(t.bind(null,"889f"))},{path:"/base/notification/index",name:"BaseNotificationIndex",component:()=>t.e("chunk-3315c812").then(t.bind(null,"03e3"))},{path:"/base/powermonitor/index",name:"BasePowerMonitorIndex",component:()=>t.e("chunk-a3c23d44").then(t.bind(null,"8a01"))},{path:"/base/screen/index",name:"BaseScreenIndex",component:()=>t.e("chunk-4a6aa20a").then(t.bind(null,"5bda"))},{path:"/base/theme/index",name:"BaseThemeIndex",component:()=>t.e("chunk-ee9f0388").then(t.bind(null,"db5a"))},{path:"/base/software/index",name:"BaseSoftwareIndex",component:()=>t.e("chunk-23da996a").then(t.bind(null,"0570"))},{path:"/base/socket/httpserver",name:"BaseSocketHttpServer",component:()=>t.e("chunk-3f2d6b1e").then(t.bind(null,"8f29"))},{path:"/base/socket/socketserver",name:"BaseSocketSocketServer",component:()=>Promise.all([t.e("chunk-8cf37860"),t.e("chunk-4edf2cac")]).then(t.bind(null,"2ec5"))},{path:"/base/system/index",name:"BaseSystemIndex",component:()=>t.e("chunk-34fd7d2f").then(t.bind(null,"4a19"))},{path:"/base/testapi/index",name:"BaseTestApiIndex",component:()=>t.e("chunk-0b68908e").then(t.bind(null,"acbf"))},{path:"/base/updater/index",name:"BaseUpdaterIndex",component:()=>t.e("chunk-5a2e4377").then(t.bind(null,"8f7f"))}]},{path:"/other",name:"Other",component:C,props:{id:"other"},redirect:{name:"OtherTestIndex"},children:[{path:"/other/test/index",name:"OtherTestIndex",component:()=>t.e("chunk-59f3a09c").then(t.bind(null,"1768"))},{path:"/other/java/index",name:"OtherJavaIndex",component:()=>t.e("chunk-8c9d8a4a").then(t.bind(null,"fa8c"))}]}]},{path:"/special",component:N,children:[{path:"subwindow",name:"SpecialSubwindowIpc",component:()=>t.e("chunk-8cf97b86").then(t.bind(null,"9c4e"))}]}],E=b["a"].prototype.push;b["a"].prototype.push=function(e,n,t){return n||t?E.call(this,e,n,t):E.call(this,e).catch(e=>e)},s["a"].use(b["a"]);var V=new b["a"]({mode:"hash",routes:O}),_=t("b775");const{ipcRenderer:R}=window.require&&window.require("electron")||window.electron||{},J=(e,n)=>{const t=R.invoke(e,n);return t},H=(e,n)=>{const t=R.sendSync(e,n);return t};var P={install(e){e.prototype.$ipc=R,e.prototype.$ipcInvoke=J,e.prototype.$ipcSendSync=H}},L=t("4eb5"),M=t.n(L);s["a"].use(M.a);const q=()=>{for(var e=[],n="0123456789abcdef",t=0;t<32;t++)e[t]=n.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=n.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23];var a=e.join("");return a},G=e=>new Promise((n,t)=>{if(!e)return t("请传入url内容"),null;if(/\.(png|jpe?g|gif|svg|ico)(\?.*)?$/.test(e)){const t=new Image;t.setAttribute("crossOrigin","anonymous"),t.src=e,t.onload=()=>{const a=document.createElement("canvas"),c=a.getContext("2d");a.width=t.width,a.height=t.height,c.drawImage(t,0,0,t.width,t.height);const s=e.substring(e.lastIndexOf(".")+1).toLowerCase(),o=a.toDataURL("image/"+s);n(o||"")}}else t("非(png/jpe?g/gif/svg等)图片地址")}),X=e=>{(void 0).$copyText(e).then(e=>{console.log("已复制至剪切板：",e),(void 0).$message.success("已复制至剪切板")},e=>{console.log("复制失败：",e),(void 0).$message.error("复制失败")})};var W=function(e){e.prototype.$baseUtil={uuid:q,imgUrlToBase64:G,copy:X}},D=t("8ea8"),Q=t.n(D);s["a"].use(Q.a),s["a"].use(o["a"]),s["a"].use(_["a"]),s["a"].use(P),s["a"].use(W),s["a"].config.productionTip=!1,new s["a"]({router:V,render:e=>e(f)}).$mount("#app")},"89b9":function(e,n,t){},b775:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("bc3a"),c=t.n(a),s=t("cff8"),o=t.n(s),r=t("56cd");const u={vm:{},install(e,n){this.installed||(this.installed=!0,n?(e.axios=n,Object.defineProperties(e.prototype,{axios:{get:function(){return n}},$http:{get:function(){return n}}})):console.error("You have to install axios"))}},i=c.a.create({baseURL:"",timeout:6e4}),d=e=>{if(e.response){const n=e.response.data;403===e.response.status&&r["a"].error({message:"Forbidden",description:n.message}),401!==e.response.status||n.result&&n.result.isLogin||r["a"].error({message:"Unauthorized",description:"Authorization verification failed"})}return Promise.reject(e)};i.interceptors.request.use(e=>{const n=o.a.get("token");return n&&(e.headers["Access-Token"]=n),e},d),i.interceptors.response.use(e=>e.data,d);const l={vm:{},install(e){e.use(u,i)}};n["b"]=i},b845:function(e,n,t){"use strict";t("faca")},cf05:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKBAMAAACJBws2AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUdwTAAAAAAAAGnp9TR1e////xw7PomJic7Ozk+xujkBbTkAAAACdFJOUwDmP/qKdQAAA/lJREFUeNrt3M1u2kAQwHHyBskrOO4WrjWK5Ct1qHqNCsnZENpcKyXtEzScgQtvW2hMYuP9MMbxDtV/LoQDzk+zM+vdlexO5yTi7EJ+nHfOAvmBEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlCi9K9U0Wa+SmWzlQ/QS8UCuMlxGr7GSqgyjfPRlKotICUyNUi33lNGVQGUJGUULccpeGRnF4pSaVHpPZkl5GWkjlaXUIz030L6yZ1BGopRLk3IhSBmakH6n9j3lxKiMBnKUZmT0SYwytChjMcpLi9LnlFlULm3KhRClsiF9TuwFZc+qjIUorWXpszALyoldOZChXNqVCxlKO9LjvJ5XKofySoQydChjEcref6GMRCgvUbanTCUoJyj1oWazVPqIb4zbkN09GbIC06dyh3QPusd7z2xWmXl6Stdqo/8+VVmhMv2t3PJIVzK9rYILqXQl09uOor6yzd1ZEekYcm873frKXouTen2lam8i2itLR2H6Os06Rjlpb0VUf8Sthdns/fGYXKrW7jzHKIPPbZ1lHaXstXZkcERdWrq8nwz1V+iONjHe/PH993y++34XfNx+jDYf86fmlcYuTzahvdSHTHm9/UzLytHoT+NKU//EW2UyMCm/BeHIqBwNmlaa+mf1T6nLZpbLrkV50+iayJzMfpKYmN2XXN6/qLTK28aV+jbfITUtlOXy2qK8a3Stbmzz1auyXJpZXT7uOBrlqMl9z+7nS33rZGHI5eNuaFtSlvaSBWSpMru5XN4coMwzgxrKvdIsIkuVmc9leoiy5tnGWzyYkaVk5uryKThIWe+cKH+Br5rG0fdPlssvz7/S4DBlvTO34hWS9TJer5NyDLV1WfxeTRkE6eHnl+VItKHN5XT37w5S1jgLrqpMDXX5nHpRhnrlwNTjt3KV+fnypw/lVK8cGufLsSBlYryP3/pQJpWV48NXG++uTDW5tK0vpSjH/pSqkjLrcduOQoAyy6U6AeXmPv5DtPLt1GDuRVmte9oIlJ6VgSjl9CSUYZU1kVTlQJZSnYQyENLiDuVURvM4lKGM5nEolYyydD2nK2PAXcpQxIA7n3mW0OFu5VRCKp1KJSGV7qfcQwGprPAsvvcGr6RU3se70nsNlHdktbcvZI0+9IWs+I4INdsYPb6JgfdtoESJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRokSJEiVKlChRojQoL+THeeck4i8yG7NSukIx+wAAAABJRU5ErkJggg=="},d4dd:function(e,n,t){"use strict";t("044b")},f4b7:function(e,n){},faca:function(e,n,t){}});
//# sourceMappingURL=app.884813b7.js.map