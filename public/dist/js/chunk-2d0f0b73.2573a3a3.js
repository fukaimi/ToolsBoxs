(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0b73"],{"9e0a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},t._l(t.menu,(function(n,r){return e("a-tab-pane",{key:r,attrs:{tab:n.tab}},["youdao"===n.key?e("youdao"):t._e(),"microsoft"===n.key?e("microsoft"):t._e(),"tencent"===n.key?e("tencent"):t._e(),"google"===n.key?e("google"):t._e(),"iciba"===n.key?e("iciba"):t._e()],1)})),1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:t.id,src:t.src,frameborder:"0"}})])},c=[],s={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(t){const e=document.getElementById(t),n=document.body.clientWidth,r=document.body.clientHeight;e.style.width=Number(n)-0+"px",e.style.height=Number(r)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},u=s,d=n("0c7c"),a=Object(d["a"])(u,i,c,!1,null,null,null),l=(a.exports,function(){var t=this;t._self._c;return t._m(0)}),m=[function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:"yuodao",src:"https://fanyi.youdao.com/index.html#/",frameborder:"0"}})])}],f={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(){const t=document.getElementById("yuodao"),e=document.body.clientWidth,n=document.body.clientHeight;t.style.width=Number(e)-0+"px",t.style.height=Number(n)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},h=f,y=Object(d["a"])(h,l,m,!1,null,null,null),b=y.exports,p=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:"microsoft",src:"https://cn.bing.com/translator?ref=TThis&text=&from=en&to=zh-Hans",frameborder:"0"}})])}],_={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(){const t=document.getElementById("microsoft"),e=document.body.clientWidth,n=document.body.clientHeight;t.style.width=Number(e)-0+"px",t.style.height=Number(n)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},w=_,x=Object(d["a"])(w,p,g,!1,null,null,null),v=x.exports,S=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:"tencent",src:"https://fanyi.qq.com/",frameborder:"0"}})])}],N={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(){const t=document.getElementById("tencent"),e=document.body.clientWidth,n=document.body.clientHeight;t.style.width=Number(e)-0+"px",t.style.height=Number(n)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},z=N,H=Object(d["a"])(z,S,k,!1,null,null,null),j=H.exports,O=function(){var t=this;t._self._c;return t._m(0)},B=[function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:"google",src:"https://translate.gl.xcxbq.cn/",frameborder:"0"}})])}],E={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(){const t=document.getElementById("google"),e=document.body.clientWidth,n=document.body.clientHeight;t.style.width=Number(e)-0+"px",t.style.height=Number(n)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},I=E,W=Object(d["a"])(I,O,B,!1,null,null,null),q=W.exports,T=function(){var t=this;t._self._c;return t._m(0)},J=[function(){var t=this,e=t._self._c;return e("div",[e("iframe",{attrs:{id:"iciba",src:"https://www.iciba.com/fy",frameborder:"0"}})])}],A={props:{src:{type:String,default:""},id:{type:String,default:""}},data(){return{}},mounted(){function t(){const t=document.getElementById("iciba"),e=document.body.clientWidth,n=document.body.clientHeight;t.style.width=Number(e)-0+"px",t.style.height=Number(n)-0+"px"}t(),window.onresize=function(){t()}},methods:{setSrc(t){this.src=t}}},C=A,D=Object(d["a"])(C,T,J,!1,null,null,null),F=D.exports;const G=[{key:"youdao",tab:"有道翻译",src:"https://fanyi.youdao.com/index.html#/"},{key:"microsoft",tab:"微软翻译",src:"https://cn.bing.com/translator?ref=TThis&text=&from=en&to=zh-Hans"},{key:"tencent",tab:"腾讯翻译",src:"https://fanyi.qq.com/"},{key:"google",tab:"谷歌翻译",src:"https://fanyi.baidu.com/"},{key:"iciba",tab:"金山词霸",src:"https://www.iciba.com/fy"}];var K={components:{youdao:b,microsoft:v,tencent:j,google:q,iciba:F},data(){return{menu:G}},mounted(){},methods:{callback(t){console.log(t)}}},L=K,M=Object(d["a"])(L,r,o,!1,null,null,null);e["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0f0b73.2573a3a3.js.map