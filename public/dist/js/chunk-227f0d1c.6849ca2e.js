(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-227f0d1c"],{"14b0":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("a-row",{staticStyle:{"padding-top":"1rem","text-align":"left"}},[t("a-col",{attrs:{xs:4,sm:8,md:10,lg:4,xl:2}},[t("div",{staticStyle:{"padding-left":"1rem"}},[t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(5)}}},[e._v(" 获取VUE模板 ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:e.showModal}},[e._v(" 新建表单 ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(1)}}},[e._v(" 新建Card ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(2)}}},[e._v(" 新建下拉框 ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(3)}}},[e._v(" 新建输入框 ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(4)}}},[e._v(" 新建日期框 ")]),t("a-button",{staticClass:"but",attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(6)}}},[e._v(" 新建表格 ")]),t("a-button",{attrs:{type:"primary",block:""},on:{click:function(t){return e.showModaCom(7)}}},[e._v(" 生成表格列 ")]),t("a-button",{staticClass:"but",attrs:{type:"danger",block:""},on:{click:e.onCopy}},[e._v(" 复制内容 ")]),t("a-button",{staticClass:"but",attrs:{type:"danger",block:""},on:{click:e.reSet}},[e._v(" 清空内容 ")])],1)]),t("a-col",{attrs:{xs:4,sm:8,md:10,lg:4,xl:22}},[t("b-code-editor",{ref:"editor",attrs:{"auto-format":!0,"smart-indent":!0,theme:"idea","indent-unit":4,"line-wrap":!1,lint:!1},model:{value:e.jsonStr2,callback:function(t){e.jsonStr2=t},expression:"jsonStr2"}})],1)],1),[t("div",[t("a-modal",{attrs:{title:"表单填写",width:"70em"},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("a-space",[t("b",[e._v("ref:")]),t("a-input",{staticStyle:{width:"10em"},attrs:{placeholder:"请填写","max-length":25},model:{value:e.from.ref,callback:function(t){e.$set(e.from,"ref",t)},expression:"from.ref"}}),t("b",[e._v("model:")]),t("a-input",{staticStyle:{width:"10em"},attrs:{placeholder:"请填写","max-length":25},model:{value:e.from.model,callback:function(t){e.$set(e.from,"model",t)},expression:"from.model"}}),t("b",[e._v("size:")]),t("a-select",{staticStyle:{width:"10em"},attrs:{"default-value":"medium"},model:{value:e.from.size,callback:function(t){e.$set(e.from,"size",t)},expression:"from.size"}},[t("a-select-option",{attrs:{value:"medium"}},[e._v(" medium(标准) ")]),t("a-select-option",{attrs:{value:"small"}},[e._v(" small(小) ")]),t("a-select-option",{attrs:{value:"mini"}},[e._v(" mini(较小) ")])],1)],1),t("br"),e._l(e.addItemAbs,(function(a,l){return t("a-space",{key:l,staticStyle:{"padding-top":"1em"}},[t("a-tag",{attrs:{color:"#f50"}},[1===a.i?t("span",[e._v("文本框")]):e._e(),2===a.i?t("span",[e._v("下拉框")]):e._e(),3===a.i?t("span",[e._v("日期框")]):e._e(),4===a.i?t("span",[e._v("卡片")]):e._e()]),t("a-tag",{attrs:{color:"#2db7f5"}},[e._v(" "+e._s(a.label)+" ")]),t("a-tag",{attrs:{color:"#2db7f5"}},[e._v(" "+e._s(a.prop)+" ")]),t("a-icon",{attrs:{type:"close-circle"},on:{click:function(t){return e.removeItem(l)}}})],1)})),t("br"),t("a-space",{staticStyle:{"padding-top":"1em"}},[t("div",[t("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(t){return e.addItem(1)}}},[e._v(" 增加文本框 ")]),t("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(t){return e.addItem(2)}}},[e._v(" 增加下拉框 ")]),t("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(t){return e.addItem(3)}}},[e._v(" 增加日期框 ")]),t("a-button",{attrs:{type:"dashed",icon:"add"},on:{click:function(t){return e.addItem(4)}}},[e._v(" 增加卡片 ")])],1)])],2)],1)],t("a-drawer",{attrs:{title:"控件属性填写",closable:!1,visible:e.visible2,width:"50em"},on:{close:e.onClose}},[t("b",[e._v("名称:")]),t("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:e.addItemAb.label,callback:function(t){e.$set(e.addItemAb,"label",t)},expression:"addItemAb.label"}}),t("b",[e._v("ID/Key:")]),t("a-input",{staticStyle:{width:"42em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:e.addItemAb.prop,callback:function(t){e.$set(e.addItemAb,"prop",t)},expression:"addItemAb.prop"}}),t("b",[e._v("rules:")]),t("a-input",{staticStyle:{width:"44em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":2500},model:{value:e.addItemAb.rule,callback:function(t){e.$set(e.addItemAb,"rule",t)},expression:"addItemAb.rule"}}),2===e.va?t("b",[e._v("字典码:")]):e._e(),2===e.va?t("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:e.addItemAb.type,callback:function(t){e.$set(e.addItemAb,"type",t)},expression:"addItemAb.type"}}):e._e(),3===e.va?t("b",[e._v("格式:")]):e._e(),3===e.va?t("a-input",{staticStyle:{width:"43em","margin-top":"1em"},attrs:{placeholder:"请输入","max-length":25},model:{value:e.addItemAb.format,callback:function(t){e.$set(e.addItemAb,"format",t)},expression:"addItemAb.format"}}):e._e(),t("a-button",{staticStyle:{"margin-top":"2em"},attrs:{type:"primary"},on:{click:e.okItem}},[e._v(" 确认 ")])],1),t("card",{ref:"card",on:{setStr:e.setStr}}),t("selectdiy",{ref:"selectdiy",on:{setStr:e.setStr}}),t("inputdiy",{ref:"inputdiy",on:{setStr:e.setStr}}),t("datecom",{ref:"datecom",on:{setStr:e.setStr}}),t("vuetemplate",{ref:"vuetemplate",on:{setStr:e.setStr}}),t("tablecom",{ref:"tablecom",on:{setStr:e.setStr}})],2)},r=[],o=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:"Card代码生成","on-ok":"handleOk"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" 取消 ")]),t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1),[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"标题"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n              'title',\n              { rules: [{ required: true, message: '请输入名称!' }] },\n            ]"}],attrs:{placeholder:"name值"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"value名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["cardValue",{rules:[{required:!0,message:"请输入value名称!"}]}],expression:"[\n              'cardValue',\n              { rules: [{ required: true, message: '请输入value名称!' }] },\n            ]"}],attrs:{placeholder:"Value值"}})],1)],1)]],2)],1)}),s=[];const i={labelCol:{span:8},wrapperCol:{span:16}};var n={data(){return{form:this.$form.createForm(this,{name:"cardname"}),formItemLayout:i,loading:!1,visible:!1}},methods:{showModal(){this.form.resetFields(),this.visible=!0},handleOk(e){this.form.validateFields((e,t)=>{e||(this.loading=!0,setTimeout(()=>{this.visible=!1,this.loading=!1;let e="        <hsa-title-pane :value=\"['"+t.cardValue+'\']">\n          <hsa-title-pane-item name="'+t.cardValue+'">\n            <template slot="title">\n              <span class="collapseTitleSpan">'+t.title+"</span>\n            </template>\n          </hsa-title-pane-item>\n        </hsa-title-pane>";this.$emit("setStr",e)},2e3))})},handleCancel(e){this.visible=!1}}},m=n,p=a("2877"),c=Object(p["a"])(m,o,s,!1,null,"4098adda",null),d=c.exports,u=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:"下拉框代码生成","on-ok":"handleOk"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" 取消 ")]),t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1),[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n              'title',\n              { rules: [{ required: true, message: '请输入名称!' }] },\n            ]"}],attrs:{placeholder:"名称"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"字段ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prop",{rules:[{required:!0,message:"请输入prop名称!"}]}],expression:"[\n              'prop',\n              { rules: [{ required: true, message: '请输入prop名称!' }] },\n            ]"}],attrs:{placeholder:"prop值"}})],1),[t("a-alert",{attrs:{message:"参考:[{ required: true, message: '请选择' }]",banner:"",closable:""}})],t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"rules"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["rules",{rules:[{message:"请输入rules!"}]}],expression:"[\n              'rules',\n              { rules: [{ message: '请输入rules!' }] },\n            ]"}],attrs:{placeholder:"rules值,需要带[]",value:"[{ required: true, message: '请选择' }]"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"采用字典值"}},[t("a-switch",{attrs:{"checked-children":"使用字典值","un-checked-children":"自定义下拉框","default-checked":""},on:{change:e.zdchange}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.check,expression:"check"}],attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"字典码"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["natType",{rules:[{message:"请输入字典值!"}]}],expression:"[\n              'natType',\n              { rules: [{ message: '请输入字典值!' }] },\n            ]"}],attrs:{placeholder:"rules值,需要带[]"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.check,expression:"!check"}],attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"下拉框内容"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["options",{rules:[{message:"请输入rules!"}]}],expression:"[\n              'options',\n              { rules: [{ message: '请输入rules!' }] },\n            ]"}],attrs:{placeholder:"格式:值,描述 回车","auto-size":{minRows:5,maxRows:10}}})],1)],2)]],2)],1)},h=[];const b={labelCol:{span:8},wrapperCol:{span:16}};var f={data(){return{form:this.$form.createForm(this,{name:"selectname",rules:"[{ required: true, message: '请选择' }]"}),formItemLayout:b,loading:!1,visible:!1,check:!0}},methods:{showModal(){this.form.resetFields(),this.visible=!0},zdchange(e){console.log("a-switch to "+e),this.check=e},handleOk(e){this.form.validateFields((e,t)=>{e||(this.loading=!0,setTimeout(()=>{this.visible=!1,this.loading=!1;let e='          <el-form-item\n                label="'+t.title+'"\n                prop="'+t.prop+'"\n';if(t.rules&&(e+='                :rules="'+t.rules+'"\n'),e+="              >\n",this.check?e+='                <ncp-select\n                  v-model="'+t.prop+'"\n                  type="'+t.natType+'"\n                  clearable\n                  class="widthAuto"\n                  style="width:100%"\n                >\n':e+='                <el-select\n                  v-model="'+t.prop+'"\n                  clearable\n                  class="widthAuto"\n                  style="width:100%"\n                >\n                  <el-option\n                    v-for="item in natDatas.'+t.prop+'s"\n                    :key="item.value"\n                    :label="item.label"\n                    :value="item.value"\n                  >\n                  </el-option>\n',this.check?e+="                </ncp-select>\n":e+="                </el-select>\n",e+="              </el-form-item>\n",t.options){e+="//以下是js部分 \n";let a=t.options,l=a.split(/[(\r\n)\r\n]+/);l.forEach((e,t)=>{e||l.splice(t,1)}),l=Array.from(new Set(l)),console.log(l),e+="const natDatas = {\n  "+t.prop+"s : [";for(let t=0;t<l.length;t++){let a=l[t],r=a.split(/[(\s)\s]+/);r&&(r=Array.from(new Set(r)),t>0&&(e+=",\n"),e+="    {\n      value: '"+r[0]+"',\n      label: '"+r[1]+"'\n    }")}e+="]\n}"}this.$emit("setStr",e)},2e3))})},handleCancel(e){this.visible=!1}}},v=f,g=Object(p["a"])(v,u,h,!1,null,"27e9a0b8",null),y=g.exports,w=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:"input代码生成","on-ok":"handleOk"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" 取消 ")]),t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1),[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n              'title',\n              { rules: [{ required: true, message: '请输入名称!' }] },\n            ]"}],attrs:{placeholder:"名称"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"字段ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prop",{rules:[{required:!0,message:"请输入prop名称!"}]}],expression:"[\n              'prop',\n              { rules: [{ required: true, message: '请输入prop名称!' }] },\n            ]"}],attrs:{placeholder:"prop值"}})],1),[t("a-alert",{attrs:{message:"参考:[{ required: true, message: '请输入' }]",banner:"",closable:""}})],t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"rules"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["rules",{rules:[{message:"请输入rules!"}]}],expression:"[\n              'rules',\n              { rules: [{ message: '请输入rules!' }] },\n            ]"}],attrs:{placeholder:"rules值,需要带[]"}})],1)],2)]],2)],1)},k=[];const C={labelCol:{span:8},wrapperCol:{span:16}};var I={data(){return{form:this.$form.createForm(this,{name:"selectname"}),formItemLayout:C,loading:!1,visible:!1,check:!0}},methods:{showModal(){this.visible=!0},zdchange(e){console.log("a-switch to "+e),this.check=e},handleOk(e){this.form.validateFields((e,t)=>{e||(this.loading=!0,setTimeout(()=>{this.visible=!1,this.loading=!1;let e='          <el-form-item\n                label="'+t.title+'"\n                prop="'+t.prop+'"\n';t.rules&&(e+='                :rules="'+t.rules+'"\n'),e+='              >\n                <el-input\n                  v-model="'+t.prop+'"\n                  class="widthAuto"\n                  style="width:100%"\n                >\n                </el-input>\n              </el-form-item>\n',this.$emit("setStr",e),this.form.resetFields()},2e3))})},handleCancel(e){this.visible=!1}}},x=I,_=Object(p["a"])(x,w,k,!1,null,"0ba17874",null),S=_.exports,L=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:"时间框代码生成","on-ok":"handleOk"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" 取消 ")]),t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1),[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n              'title',\n              { rules: [{ required: true, message: '请输入名称!' }] },\n            ]"}],attrs:{placeholder:"名称"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"字段ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prop",{rules:[{required:!0,message:"请输入prop名称!"}]}],expression:"[\n              'prop',\n              { rules: [{ required: true, message: '请输入prop名称!' }] },\n            ]"}],attrs:{placeholder:"prop值"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"日期格式"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["format",{rules:[{required:!0,message:"请输入格式!"}]}],expression:"[\n              'format',\n              { rules: [{required: true, message: '请输入格式!' }] },\n            ]"}],attrs:{placeholder:"yyyyMMdd"}})],1),[t("a-alert",{attrs:{message:"参考:[{ required: true, message: '请选择' }]",banner:"",closable:"",size:"mini"}})],t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"rules"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["rules",{rules:[{message:"请输入rules!"}]}],expression:"[\n              'rules',\n              { rules: [{ message: '请输入rules!' }] },\n            ]"}],attrs:{placeholder:"rules值,需要带[]",value:"[{ required: true, message: '请选择' }]"}})],1)],2)]],2)],1)},A=[];const O={labelCol:{span:8},wrapperCol:{span:16}};var $={data(){return{form:this.$form.createForm(this,{name:"selectname"}),formItemLayout:O,loading:!1,visible:!1,check:!0}},methods:{showModal(){this.form.resetFields(),this.visible=!0},zdchange(e){console.log("a-switch to "+e),this.check=e},handleOk(e){this.form.validateFields((e,t)=>{e||(this.loading=!0,setTimeout(()=>{this.visible=!1,this.loading=!1;let e='          <el-form-item\n                label="'+t.title+'"\n                prop="'+t.prop+'"\n';t.rules&&(e+='                :rules="'+t.rules+'"\n'),e+='              >\n                <el-date-picker\n                  v-model="'+t.prop+'"\n',t.format&&(e+='                  format="'+t.format+'"\n'),e+='                  class="widthAuto"\n                  style="width:100%"\n                  value-format="timestamp"\n                >\n                </<el-date-picker>\n              </el-form-item>\n',this.$emit("setStr",e)},2e3))})},handleCancel(e){this.visible=!1}}},q=$,M=Object(p["a"])(q,L,A,!1,null,"0bfe01d5",null),j=M.exports,N=function(){var e=this,t=e._self._c;return t("div")},T=[],V={name:"Vuetemplate",data(){return{vuestr:""}},methods:{getVueTemplate(){let e="<template>\n  <hsa-adaptive-container>\n    <hsa-adaptive-pane>\n     \n    </hsa-adaptive-pane>\n  </hsa-adaptive-container>\n</template>\n<script>\n// 引入分页组件\nimport layoutMixin from '@ncp-web/hsa-ui/lib/mixins/adaptive-layout-mixin'\n\nexport default {\n  mixins: [layoutMixin],\n  components: {},\n  data() {\n    return {\n\n    }\n  },\n  created() {\n\n  },\n  computed: {},\n  methods: {}\n}\n<\/script>\n<style lang=\"scss\" scoped></style>";this.blac(e)},getTable(){let e='<ncp-table\n  :columnDefs="columns"\n  :data="datas"\n  :enablePagination="true"\n  :paginationConfig="paginationConfig"\n  :useExternalPagination="true"\n  @paginationConfigChange=""\n  v-loading="false"\n  :selectType="\'single\'"\n  @rowDblClick="dialogDblClick"\n  ref="table"\n></ncp-table>\n\n//js部分\nconst paginationConfig = {pageSize: 10,pageNumber: 1,total: 0}\n\ndialogDblClick(row) {\n  console.log(row)\n}';this.blac(e)},blac(e){this.$emit("setStr",e)}}},z=V,F=Object(p["a"])(z,N,T,!1,null,"bfc913be",null),D=F.exports,E=function(){var e=this,t=e._self._c;return t("div",[t("a-modal",{attrs:{title:"表格列代码生成","on-ok":"handleOk",width:"50rem"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("template",{slot:"footer"},[t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleOk}},[e._v(" 确认 ")])],1),e._l(e.str,(function(a,l){return t("a-space",{key:l,staticStyle:{width:"50rem","padding-top":"1rem"}},[t("a-icon",{attrs:{type:"close-circle"},on:{click:function(t){return e.removeItem(l)}}}),t("a-tag",{attrs:{color:"#f50"}},[e._v(" "+e._s(a.label)+" ")]),t("a-tag",{attrs:{color:"#2db7f5"}},[e._v(" "+e._s(a.prop)+" ")]),t("a-tag",{attrs:{color:"#87d068"}},[e._v(" "+e._s(a.align)+" ")]),t("a-tag",{attrs:{color:"#108ee9"}},[e._v(" "+e._s("cz"===a.prop?"操作列":"非操作列")+" ")])],1)})),t("br"),t("a-space",{staticStyle:{"padding-top":"2rem"}},[t("a-button",{attrs:{type:"dashed"},on:{click:e.showModal2}},[e._v(" 新增列 ")]),t("a-button",{attrs:{type:"dashed"},on:{click:function(t){return e.additem(2)}}},[e._v(" 新增操作列 ")])],1)],2),t("a-modal",{attrs:{title:"列属性填写","on-ok":"handleOk"},model:{value:e.visible2,callback:function(t){e.visible2=t},expression:"visible2"}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v(" 取消 ")]),t("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.additem(1)}}},[e._v(" 确认 ")])],1),[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n              'title',\n              { rules: [{ required: true, message: '请输入名称!' }] },\n            ]"}],attrs:{placeholder:"名称"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"字段ID"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["prop",{rules:[{required:!0,message:"请输入prop名称!"}]}],expression:"[\n              'prop',\n              { rules: [{ required: true, message: '请输入prop名称!' }] },\n            ]"}],attrs:{placeholder:"prop值"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"列布局"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["align",{rules:[{message:"请选择"}],initialValue:"left"}],expression:"['align',{ rules: [{ message: '请选择' }] ,initialValue:'left'},]"}],attrs:{"default-value":"left"}},[t("a-select-option",{attrs:{value:"left"}},[e._v(" left ")]),t("a-select-option",{attrs:{value:"center"}},[e._v(" center ")]),t("a-select-option",{attrs:{value:"right"}},[e._v(" right ")])],1)],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"表头布局"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["headerAlign",{rules:[{message:"请选择"}],initialValue:"left"}],expression:"['headerAlign',{ rules: [{ message: '请选择' }],initialValue:'left' },]"}],attrs:{"default-value":"left"}},[t("a-select-option",{attrs:{value:"left"}},[e._v(" left ")]),t("a-select-option",{attrs:{value:"center"}},[e._v(" center ")]),t("a-select-option",{attrs:{value:"right"}},[e._v(" right ")])],1)],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"超出提示"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["showOverflowTooltip",{rules:[{message:"请选择"}],initialValue:"true"}],expression:"['showOverflowTooltip',\n                          { rules: [{ message: '请选择' }] ,initialValue:'true'}]"}],attrs:{"default-value":"true"}},[t("a-select-option",{attrs:{value:"true"}},[e._v(" 是 ")]),t("a-select-option",{attrs:{value:"false"}},[e._v(" 否 ")])],1)],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"宽"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["width",{rules:[{required:!0,message:"请输入!"}],initialValue:220}],expression:"[\n              'width',\n              { rules: [{ required: true, message: '请输入!' }] ,initialValue:220},\n            ]"}],attrs:{placeholder:"宽"}})],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"列固定"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["fixed",{rules:[{message:"请选择"}],initialValue:"none"}],expression:"['fixed',{ rules: [{ message: '请选择' }] ,initialValue:'none'},]"}],attrs:{"default-value":"none"},model:{value:e.form.fixed,callback:function(t){e.$set(e.form,"fixed",t)},expression:"form.fixed"}},[t("a-select-option",{attrs:{value:"none"}},[e._v(" 无 ")]),t("a-select-option",{attrs:{value:"left"}},[e._v(" left ")]),t("a-select-option",{attrs:{value:"right"}},[e._v(" right ")])],1)],1),t("a-form-item",{attrs:{"label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol,label:"码值"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["filters",{rules:[{message:"请输入!"}]}],expression:"[\n              'filters',\n              { rules: [{message: '请输入!' }] },\n            ]"}],attrs:{placeholder:"码值/或转码"}})],1)],1)]],2)],1)},J=[];const P={labelCol:{span:8},wrapperCol:{span:16}};var R={data(){return{form:this.$form.createForm(this,{showOverflowTooltip:!0}),formItemLayout:P,loading:!1,visible:!1,visible2:!1,check:!0,str:[]}},created(){this.$form.setFieldsValue({showOverflowTooltip:!0})},methods:{showModal(){this.visible=!0,this.str=[]},showModal2(){this.form.resetFields(),this.visible2=!0},zdchange(e){console.log("a-switch to "+e),this.check=e},additem(e){if(1===e&&this.form.validateFields((e,t)=>{if(!e){let e={label:t.title,prop:t.prop,showOverflowTooltip:t.showOverflowTooltip,sortable:!0},a="{\n label: '"+t.title+"',\n prop: '"+t.prop+"',\n showOverflowTooltip: "+t.showOverflowTooltip+",\n sortable:true,";t.align&&(e.align=t.align,a+="\n align: '"+t.align+"',"),t.headerAlign&&(e.headerAlign=t.headerAlign,a+="\n headerAlign: '"+t.headerAlign+"',"),t.filters&&(e.filters="['"+t.filters+"']",a+="\n filters: ['"+t.filters+"'],"),"none"!==t.fixed&&(e.fixed=t.fixed,a+="\n fixed: '"+t.fixed+"',"),a+="\n}",e.jsonStr=a,this.str.push(e),this.visible2=!1}}),2===e){let e={label:"操作",prop:"cz",jsonStr:"{\n        label: '操作',\n        type: 'Button',\n        buttonGroup: [\n          {\n            type: 'primary',\n            icon: 'el-icon-edit',\n            id: 'edit',\n            title: '办理',\n            size: 'mini',\n            handle: row => this.cz(row)\n          }\n        ],\n        minWidth: '80px',\n        // 操作列必需右固定\n        fixed: 'right'\n      }"};this.str.push(e),this.visible2=!1}},handleOk(e){const t=this.str;let a="const columns = [";for(let l=0;l<t.length;l++)l>0&&(a+=","),a+=t[l].jsonStr;a+="]",this.$emit("setStr",a),this.visible=!1},handleCancel(e){this.visible2=!1},removeItem(e){this.str.splice(e,1)}}},B=R,G=Object(p["a"])(B,E,J,!1,null,"dc556966",null),H=G.exports,K={name:"Index",components:{card:d,selectdiy:y,inputdiy:S,datecom:j,vuetemplate:D,tablecom:H},data(){return{pid:0,forms:[],from:{fromstart:'      <el-form\n        label-position="right"\n        label-width="100px"\n        @submit.native.prevent\n',fromend:"\n</el-form>",ref:"",model:"",size:"",strall:""},visible:!1,visible2:!1,jsonStr:"",jsonStr2:"",va:0,addItemAb:{i:1,pid:0,allstr:"",label:"",prop:"",rule:"",type:"",format:"",elformitemstar:'   <hsa-col :sm="24" :md="12" :lg="8">\n              <el-form-item',elformitemend:"              </el-form-item>\n            </hsa-col>"},addItemAbs:[]}},methods:{setStr(e){this.jsonStr2=e},reSet(){this.jsonStr2=""},taToHsa(){let e=this.jsonStr;alert(e.split("\n")[2]),console.log(e.getAttribute("title"))},showModal(){this.visible=!0},showModaCom(e){1===e&&this.$refs.card.showModal(),2===e&&this.$refs.selectdiy.showModal(),3===e&&this.$refs.inputdiy.showModal(),4===e&&this.$refs.datecom.showModal(),5===e&&this.$refs.vuetemplate.getVueTemplate(),6===e&&this.$refs.vuetemplate.getTable(),7===e&&this.$refs.tablecom.showModal()},onClose(){this.visible2=!1},handleOk(e){console.log(e),this.visible=!1;let t=this.from,a=t.fromstart+'ref="'+this.from.ref+'"\n :model="'+this.from.model+'"\n>',l=0;for(let r=0;r<this.addItemAbs.length;r++)a+=this.addItemAbs[r].allstr,0!==l&&this.addItemAbs[r].pid===l+1&&(a+="          </hsa-title-pane-item>\n        </hsa-title-pane>\n"),4===this.addItemAbs[r].type&&(l=this.addItemAbs[r].pid);0!==l&&(a+="          </hsa-title-pane-item>\n        </hsa-title-pane>\n"),a+=t.fromend,t.strall=a,this.forms.push(t),this.jsonStr2="<template>\n  <hsa-adaptive-container>\n    <hsa-adaptive-pane>\n";for(let r=0;r<this.forms.length;r++)this.jsonStr2+=this.forms[r].strall;this.jsonStr2+="    </hsa-adaptive-pane>\n  </hsa-adaptive-container>\n</template>\n<script>\n// 引入分页组件\nimport layoutMixin from '@ncp-web/hsa-ui/lib/mixins/adaptive-layout-mixin'\n",this.jsonStr2+='export default {\n  mixins: [layoutMixin],\n  components: {},\n  data() {\n    return {    }\n  },\n  created() {\n   \n  },\n  computed: {},\n  methods: {\n  \n  }\n}\n<\/script> \n<style lang="scss" scoped></style>\n',this.pid=0},addItem(e){if(!this.from.model)return this.$message.error("请填写From表单数据");this.addItemAb.prop="",this.addItemAb.label="",this.addItemAb.rule="",this.visible2=!0,this.va=e,4===e&&this.pid++},okItem(){let e=Object.assign({},this.addItemAb);if(1===this.va){let t=e.elformitemstar;return e.label&&(t+='\n label="'+e.label+'"\n'),e.prop&&(t+='\n prop="'+e.prop+'"'),t+="\n >\n<el-input",e.prop&&(t+='\n v-model="'+this.from.model+"."+e.prop+'"'),e.rule&&(t+='\n rules="{'+e.rule+'}"'),t+='\n          class="widthAuto"\n      ></el-input>'+e.elformitemend,e.allstr=t,e.type=this.va,e.pid=this.pid,this.addItemAbs.push(e),void this.onClose()}if(2===this.va){let t=e.elformitemstar;return e.label&&(t+='\n label="'+e.label+'"\n'),e.prop&&(t+='\n prop="'+e.prop+'"\n'),t+="\n>\n<ncp-select",e.prop&&(t+='\n v-model="'+this.from.model+"."+e.prop+'"'),e.rule&&(t+='\n rules="{'+e.rule+'}"'),t+='\ntype="'+e.type+'"\n',t+='\n   clearable \n       class="widthAuto"\n      ></ncp-select>'+e.elformitemend,e.allstr=t,e.type=this.va,e.pid=this.pid,this.addItemAbs.push(e),void this.onClose()}if(3===this.va){let t=e.elformitemstar;return e.label&&(t+='\nlabel="'+e.label+'"\n'),e.prop&&(t+='\nprop="'+e.prop+'"\n'),t+="\n>\n<el-date-picker",e.prop&&(t+='\n v-model="'+this.from.model+"."+e.prop+'"'),e.rule&&(t+='\n rules="{'+e.rule+'}"'),t+='\n placeholder="请输入证件开始日期"\n          style="width: 100%;"\n          type="date"\n',t+='format="'+e.format+'"\n',t+='value-format="timestamp"\n',t+='class="widthAuto"\n      ></el-date-picker>'+e.elformitemend,e.allstr=t,e.type=this.va,e.pid=this.pid,this.addItemAbs.push(e),void this.onClose()}if(4===this.va){let t="<hsa-title-pane :value =\"['"+e.prop+'\']" >\n<hsa-title-pane-item name = "'+e.prop+'" >\n<template slot = "title" >\n <span class="collapseTitleSpan">'+e.label+"</span>\n</template>";return e.allstr=t,e.pid=this.pid,e.type=this.va,this.addItemAbs.push(e),void this.onClose()}},removeItem(e){this.addItemAbs.splice(e,1)},onCopy(){this.$copyText(this.jsonStr2).then(e=>{console.log("复制成功：",e),this.$message.success("复制成功"),this.change()},e=>{console.log("复制失败：",e),this.$message.error("复制失败"),this.change()})}}},U=K,W=(a("dd56"),Object(p["a"])(U,l,r,!1,null,"c39d3164",null));t["default"]=W.exports},"71ab":function(e,t,a){},dd56:function(e,t,a){"use strict";a("71ab")}}]);
//# sourceMappingURL=chunk-227f0d1c.6849ca2e.js.map