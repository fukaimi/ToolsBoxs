(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aea8f690"],{"118d":function(t,e,a){"use strict";a("d2db")},"14b0":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t._self._c;return e("div",[e("a-row",{staticStyle:{"padding-top":"1rem","text-align":"left"}},[e("a-col",{attrs:{xs:4,sm:8,md:10,lg:4,xl:2}},[e("div",[e("a-button",{attrs:{type:"primary",block:""},on:{click:t.showModal}},[t._v(" 新建表单 ")]),e("a-button",{staticStyle:{"margin-top":"1em"},attrs:{type:"primary",block:""},on:{click:t.onCopy}},[t._v(" 复制内容 ")])],1)]),e("a-col",{attrs:{xs:4,sm:8,md:10,lg:4,xl:22}},[e("b-code-editor",{ref:"editor",attrs:{"auto-format":!0,"smart-indent":!0,theme:"idea","indent-unit":4,"line-wrap":!1,lint:!1},model:{value:t.jsonStr2,callback:function(e){t.jsonStr2=e},expression:"jsonStr2"}})],1)],1),[e("div",[e("a-modal",{attrs:{title:"表单填写",width:"70em"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[e("a-space",[e("b",[t._v("ref:")]),e("a-input",{staticStyle:{width:"10em"},attrs:{placeholder:"请填写","max-length":25},model:{value:t.from.ref,callback:function(e){t.$set(t.from,"ref",e)},expression:"from.ref"}}),e("b",[t._v("model:")]),e("a-input",{staticStyle:{width:"10em"},attrs:{placeholder:"请填写","max-length":25},model:{value:t.from.model,callback:function(e){t.$set(t.from,"model",e)},expression:"from.model"}}),e("b",[t._v("size:")]),e("a-select",{staticStyle:{width:"10em"},attrs:{"default-value":"medium"},model:{value:t.from.size,callback:function(e){t.$set(t.from,"size",e)},expression:"from.size"}},[e("a-select-option",{attrs:{value:"medium"}},[t._v(" medium(标准) ")]),e("a-select-option",{attrs:{value:"small"}},[t._v(" small(小) ")]),e("a-select-option",{attrs:{value:"mini"}},[t._v(" mini(较小) ")])],1)],1),e("br"),t._l(t.addItemAbs,(function(a,l){return e("a-space",{key:l,staticStyle:{"padding-top":"1em"}},[e("a-tag",{attrs:{color:"#f50"}},[1===a.i?e("span",[t._v("文本框")]):t._e(),2===a.i?e("span",[t._v("下拉框")]):t._e(),3===a.i?e("span",[t._v("日期框")]):t._e(),4===a.i?e("span",[t._v("卡片")]):t._e()]),e("a-tag",{attrs:{color:"#2db7f5"}},[t._v(" "+t._s(a.label)+" ")]),e("a-tag",{attrs:{color:"#2db7f5"}},[t._v(" "+t._s(a.prop)+" ")]),e("a-icon",{attrs:{type:"close-circle"},on:{click:function(e){return t.removeItem(l)}}})],1)})),e("br"),e("a-space",{staticStyle:{"padding-top":"1em"}},[e("div",[e("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(e){return t.addItem(1)}}},[t._v(" 增加文本框 ")]),e("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(e){return t.addItem(2)}}},[t._v(" 增加下拉框 ")]),e("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(e){return t.addItem(3)}}},[t._v(" 增加日期框 ")]),e("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(e){return t.addItem(4)}}},[t._v(" 增加卡片 ")])],1)])],2)],1)],e("a-drawer",{attrs:{title:"控件属性填写",closable:!1,visible:t.visible2,width:"50em"},on:{close:t.onClose}},[e("b",[t._v("名称:")]),e("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:t.addItemAb.label,callback:function(e){t.$set(t.addItemAb,"label",e)},expression:"addItemAb.label"}}),e("b",[t._v("ID/Key:")]),e("a-input",{staticStyle:{width:"42em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:t.addItemAb.prop,callback:function(e){t.$set(t.addItemAb,"prop",e)},expression:"addItemAb.prop"}}),e("b",[t._v("rules:")]),e("a-input",{staticStyle:{width:"44em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":2500},model:{value:t.addItemAb.rule,callback:function(e){t.$set(t.addItemAb,"rule",e)},expression:"addItemAb.rule"}}),2===t.va?e("b",[t._v("字典码:")]):t._e(),2===t.va?e("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:t.addItemAb.type,callback:function(e){t.$set(t.addItemAb,"type",e)},expression:"addItemAb.type"}}):t._e(),3===t.va?e("b",[t._v("格式:")]):t._e(),3===t.va?e("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:t.addItemAb.format,callback:function(e){t.$set(t.addItemAb,"format",e)},expression:"addItemAb.format"}}):t._e(),e("a-button",{staticStyle:{"margin-top":"2em"},attrs:{type:"primary"},on:{click:t.okItem}},[t._v(" 确认 ")])],1)],2)},s=[],i=(a("14d9"),{name:"Index",data(){return{pid:0,forms:[],from:{fromstart:'      <el-form\n        label-position="right"\n        label-width="100px"\n        @submit.native.prevent\n',fromend:"\n</el-form>",ref:"",model:"",size:"",strall:""},visible:!0,visible2:!1,jsonStr:"",jsonStr2:"",va:0,addItemAb:{i:1,pid:0,allstr:"",label:"",prop:"",rule:"",type:"",format:"",elformitemstar:'   <hsa-col :sm="24" :md="12" :lg="8">\n              <el-form-item',elformitemend:"              </el-form-item>\n            </hsa-col>"},addItemAbs:[]}},methods:{taToHsa(){let t=this.jsonStr;alert(t.split("\n")[2]),console.log(t.getAttribute("title"))},showModal(){this.visible=!0},onClose(){this.visible2=!1},handleOk(t){console.log(t),this.visible=!1;let e=this.from,a=e.fromstart+'ref="'+this.from.ref+'"\n :model="'+this.from.model+'"\n>',l=0;for(let s=0;s<this.addItemAbs.length;s++)a+=this.addItemAbs[s].allstr,0!==l&&this.addItemAbs[s].pid>l+1&&(a+="          </hsa-title-pane-item>\n        </hsa-title-pane>\n"),4===this.addItemAbs[s].type&&(l=this.addItemAbs[s].pid);0!==l&&(a+="          </hsa-title-pane-item>\n        </hsa-title-pane>\n"),a+=e.fromend,e.strall=a,this.forms.push(e),this.jsonStr2="<template>\n  <hsa-adaptive-container>\n    <hsa-adaptive-pane>\n";for(let s=0;s<this.forms.length;s++)this.jsonStr2+=this.forms[s].strall;this.jsonStr2+="    </hsa-adaptive-pane>\n  </hsa-adaptive-container>\n</template>\n<script>\n// 引入分页组件\nimport layoutMixin from '@ncp-web/hsa-ui/lib/mixins/adaptive-layout-mixin'\n",this.jsonStr2+='export default {\n  mixins: [layoutMixin],\n  components: {},\n  data() {\n    return {    }\n  },\n  created() {\n   \n  },\n  computed: {},\n  methods: {\n  \n  }\n}\n<\/script> \n<style lang="scss" scoped></style>\n',this.pid=0},addItem(t){if(!this.from.model)return this.$message.error("请填写From表单数据");this.addItemAb.prop="",this.addItemAb.label="",this.addItemAb.rule="",this.visible2=!0,this.va=t,4===t&&this.pid++},okItem(){let t=Object.assign({},this.addItemAb);if(1===this.va){let e=t.elformitemstar;return t.label&&(e+='\n label="'+t.label+'"\n'),t.prop&&(e+='\n prop="'+t.prop+'"'),e+="\n >\n<el-input",t.prop&&(e+='\n v-model="'+this.from.model+"."+t.prop+'"'),t.rule&&(e+='\n rules="{'+t.rule+'}"'),e+='\n          class="widthAuto"\n      ></el-input>'+t.elformitemend,t.allstr=e,t.type=this.va,t.pid=this.pid,this.addItemAbs.push(t),void this.onClose()}if(2===this.va){let e=t.elformitemstar;return t.label&&(e+='\n label="'+t.label+'"\n'),t.prop&&(e+='\n prop="'+t.prop+'"\n'),e+="\n>\n<ncp-select",t.prop&&(e+='\n v-model="'+this.from.model+"."+t.prop+'"'),t.rule&&(e+='\n rules="{'+t.rule+'}"'),e+='\ntype="'+t.type+'"\n',e+='\n   clearable \n       class="widthAuto"\n      ></ncp-select>'+t.elformitemend,t.allstr=e,t.type=this.va,t.pid=this.pid,this.addItemAbs.push(t),void this.onClose()}if(3===this.va){let e=t.elformitemstar;return t.label&&(e+='\nlabel="'+t.label+'"\n'),t.prop&&(e+='\nprop="'+t.prop+'"\n'),e+="\n>\n<el-date-picker",t.prop&&(e+='\n v-model="'+this.from.model+"."+t.prop+'"'),t.rule&&(e+='\n rules="{'+t.rule+'}"'),e+='\n placeholder="请输入证件开始日期"\n          style="width: 100%;"\n          type="date"\n',e+='format="'+t.format+'"\n',e+='value-format="timestamp"\n',e+='class="widthAuto"\n      ></el-date-picker>'+t.elformitemend,t.allstr=e,t.type=this.va,t.pid=this.pid,this.addItemAbs.push(t),void this.onClose()}if(4===this.va){let e="<hsa-title-pane :value =\"['"+t.prop+'\']" >\n<hsa-title-pane-item name = "'+t.prop+'" >\n<template slot = "title" >\n <span class="collapseTitleSpan">'+t.label+"</span>\n</template>";return t.allstr=e,t.pid=this.pid,t.type=this.va,this.addItemAbs.push(t),void this.onClose()}},removeItem(t){this.addItemAbs.splice(t,1)},onCopy(){this.$copyText(this.jsonStr2).then(t=>{console.log("复制成功：",t),this.$message.success("复制成功"),this.change()},t=>{console.log("复制失败：",t),this.$message.error("复制失败"),this.change()})}}}),n=i,o=(a("118d"),a("2877")),r=Object(o["a"])(n,l,s,!1,null,"72bac40a",null);e["default"]=r.exports},d2db:function(t,e,a){}}]);
//# sourceMappingURL=chunk-aea8f690.21947106.js.map