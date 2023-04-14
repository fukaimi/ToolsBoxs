<template>
  <div>
    <a-row style="padding-top:1rem;text-align: left;">
      <a-col :xs="4" :sm="8" :md="10" :lg="4" :xl="2">
        <div style="padding-left: 1rem">
          <a-button type="primary" block class="but" @click="showModaCom(5)">
            获取VUE模板
          </a-button>
          <a-button type="primary" block class="but" @click="showModal">
            新建表单
          </a-button>
          <a-button type="primary" block class="but" @click="showModaCom(1)">
            新建Card
          </a-button>
          <a-button type="primary" block class="but" @click="showModaCom(2)">
            新建下拉框
          </a-button>
          <a-button type="primary" :mark="mark" block class="but" @click="showModaCom(3)">
            新建输入框
          </a-button>
          <a-button type="primary" block class="but" @click="showModaCom(4)">
            新建日期框
          </a-button>
          <a-button type="primary" block class="but" @click="showModaCom(6)">
            新建表格
          </a-button>
          <a-button type="primary" block @click="showModaCom(7)">
            生成表格列
          </a-button>
          <a-button type="danger" block class="but" @click="onCopy">
            复制内容
          </a-button>
          <a-button type="danger" block class="but" @click="reSet">
            清空内容
          </a-button>
        </div>
      </a-col>

      <a-col :xs="4" :sm="8" :md="10" :lg="4" :xl="22">
        <a-space :span="24" style="margin-left: 5rem">
          <a-tag color="#2db7f5">
            列数 {{ mark }}
          </a-tag> <a-slider v-model="mark" :marks="marks" :default-value="mark" :max="4" style="width: 35rem"/>
        </a-space>


        <b-code-editor
          ref="editor"
          v-model="jsonStr2"
          :auto-format="true"
          :smart-indent="true"
          theme="idea"
          :indent-unit="4"
          :line-wrap="false"
          :lint="false">
        </b-code-editor>
      </a-col>
    </a-row>

    <template>
      <div>
        <a-modal v-model="visible" title="表单填写" width="70em" @ok="handleOk">
          <a-space>
            <b>ref:</b>
            <a-input
              v-model="from.ref"
              placeholder="请填写"
              :max-length="25"
              style="width: 10em"
            />
            <b>model:</b>
            <a-input
              v-model="from.model"
              placeholder="请填写"
              :max-length="25"
              style="width: 10em"
            />
            <b>size:</b>
            <a-select v-model="from.size" default-value="medium" style="width: 10em">
              <a-select-option value="medium">
                medium(标准)
              </a-select-option>
              <a-select-option value="small">
                small(小)
              </a-select-option>
              <a-select-option value="mini">
                mini(较小)
              </a-select-option>
            </a-select>
          </a-space>
          <br/>
          <a-space v-for="(item,index) in addItemAbs" :key="index" style="padding-top: 1em">
            <a-tag color="#f50">
              <span v-if="item.i === 1">文本框</span>
              <span v-if="item.i === 2">下拉框</span>
              <span v-if="item.i === 3">日期框</span>
              <span v-if="item.i === 4">卡片</span>
            </a-tag>
            <a-tag color="#2db7f5">
              {{ item.label }}
            </a-tag>
            <a-tag color="#2db7f5">
              {{ item.prop }}
            </a-tag>
            <a-icon type="close-circle" @click="removeItem(index)"/>
          </a-space>
          <br/>
          <a-space style="padding-top: 1em">
            <div>
              <a-button type="dashed" icon="add" @click="addItem(1)">
                增加文本框
              </a-button>
              <a-button type="dashed" icon="add" @click="addItem(2)">
                增加下拉框
              </a-button>
              <a-button type="dashed" icon="add" @click="addItem(3)">
                增加日期框
              </a-button>
              <a-button type="dashed" icon="add" @click="addItem(4)">
                增加卡片
              </a-button>
            </div>
          </a-space>
        </a-modal>
      </div>
    </template>

    <a-drawer
      title="控件属性填写"
      :closable="false"
      :visible="visible2"
      width="50em"
      @close="onClose"
    >
      <b>名称:</b>
      <a-input
        v-model="addItemAb.label"
        placeholder="请输入"
        :max-length="25"
        style="width: 43em;margin-top: 1em"
      />
      <b>ID/Key:</b>
      <a-input
        v-model="addItemAb.prop"
        placeholder="请输入"
        :max-length="25"
        style="width: 42em;margin-top: 1em"
      />
      <b>rules:</b>
      <a-input
        v-model="addItemAb.rule"
        placeholder="请输入"
        :max-length="2500"
        style="width: 44em;margin-top: 1em"
      />
      <b v-if="va === 2">字典码:</b>
      <a-input
        v-if="va === 2"
        v-model="addItemAb.type"
        placeholder="请输入"
        :max-length="25"
        style="width: 43em;margin-top: 1em"
      />
      <b v-if="va === 3">格式:</b>
      <a-input
        v-if="va === 3"
        v-model="addItemAb.format"
        placeholder="请输入"
        :max-length="25"
        style="width: 43em;margin-top: 1em"
      />

      <a-button type="primary" style="margin-top: 2em" @click="okItem">
        确认
      </a-button>
    </a-drawer>

    <card ref="card" @setStr="setStr"></card>
    <selectdiy ref="selectdiy" :mark="mark" @setStr="setStr"></selectdiy>
    <inputdiy ref="inputdiy" :mark="mark" @setStr="setStr"></inputdiy>
    <datecom ref="datecom" :mark="mark" @setStr="setStr"></datecom>
    <vuetemplate ref="vuetemplate" @setStr="setStr"></vuetemplate>
    <tablecom ref="tablecom" @setStr="setStr" ></tablecom>
  </div>
</template>

<script>
import card from "@/views/tools/uichange/ta404ToHsa/component/card";
import selectdiy from "@/views/tools/uichange/ta404ToHsa/component/select";
import inputdiy from "@/views/tools/uichange/ta404ToHsa/component/input";
import datecom from "@/views/tools/uichange/ta404ToHsa/component/datecom";
import vuetemplate from "@/views/tools/uichange/ta404ToHsa/component/vuetemplate";
import tablecom from "@/views/tools/uichange/ta404ToHsa/component/tablecom";

export default {
  name: "Index",
  components:{card,selectdiy,inputdiy,datecom,vuetemplate,tablecom},
  data() {
    return {
      mark:0,
      marks: {
        0: '无',
        1: '1列',
        2: '2列',
        3: '3列',
        4: {
          style: {
            color: '#f50',
          },
          label: <strong>4列</strong>,
        },
      },
      pid: 0,
      forms: [],
      from: {
        fromstart: '      <el-form\n' +
            '        label-position="right"\n' +
            '        label-width="100px"\n' +
            '        @submit.native.prevent\n' +
            '        size="medium"\n',
        fromend: '\n</el-form>',
        ref: '',
        model: '',
        size: '',
        strall: ''
      },
      visible: false,
      visible2: false,
      jsonStr: '',
      jsonStr2: '',
      va: 0,
      addItemAb: {
        i: 1,
        pid: 0,
        allstr: '',
        label: '',
        prop: '',
        rule: '',
        type: '',
        format: '',
        elformitemstar: '   <hsa-col :sm="24" :md="12" :lg="8">\n' +
            '              <el-form-item',
        elformitemend: '              </el-form-item>\n' +
            '            </hsa-col>'
      },
      addItemAbs: []
    }
  },
  methods: {
    setStr(str){
      this.jsonStr2 = str
    },
    reSet(){
      this.jsonStr2 = ''
    },
    taToHsa() {
      let jsonStr = this.jsonStr;
      alert(jsonStr.split("\n")[2]);


      // const getElementByID = document.getElementById("getAttr")
      // const getElementByQuery = document.querySelector('p');
      console.log(jsonStr.getAttribute("title"));
    },
    showModal() {
      this.visible = true;
    },
    showModaCom(i){
      if (i === 1){
        this.$refs.card.showModal()
      }
      if (i===2){
        this.$refs.selectdiy.showModal()
      }
      if (i===3){
        this.$refs.inputdiy.showModal()
      }
      if (i===4){
        this.$refs.datecom.showModal()
      }
      if (i===5){
        this.$refs.vuetemplate.getVueTemplate()
      }
      if (i===6){
        this.$refs.vuetemplate.getTable()
      }
      if (i===7){
        this.$refs.tablecom.showModal()
      }

    },
    onClose() {
      this.visible2 = false
    }
    ,
    handleOk(e) {
      console.log(e);
      this.visible = false;
      //开始表单拼接
      let from = this.from
      let str = from.fromstart +
          'ref="' + this.from.ref + '"' +
          '\n :model="' + this.from.model + '"\n' + '>'
      let j = 0;
      for (let i = 0; i < this.addItemAbs.length; i++) {
        str += this.addItemAbs[i].allstr
        if (j !== 0 && this.addItemAbs[i].pid === (j + 1)) {
          str += '          </hsa-title-pane-item>\n' +
              '        </hsa-title-pane>\n'
          j === 0
        }
        if (this.addItemAbs[i].type === 4) {
          j = this.addItemAbs[i].pid
        }
      }
      if (j !== 0) {
        str += '          </hsa-title-pane-item>\n' +
            '        </hsa-title-pane>\n'
      }
      str += from.fromend
      from.strall = str
      this.forms.push(from)
      this.jsonStr2 = '<template>\n' +
          '  <hsa-adaptive-container>\n' +
          '    <hsa-adaptive-pane>\n'
      for (let i = 0; i < this.forms.length; i++) {
        this.jsonStr2 += this.forms[i].strall
      }
      this.jsonStr2 += '    </hsa-adaptive-pane>\n' +
          '  </hsa-adaptive-container>\n' +
          '</template>\n' +
          '<script>\n' +
          '// 引入分页组件\n' +
          'import layoutMixin from \'@ncp-web/hsa-ui/lib/mixins/adaptive-layout-mixin\'\n'
      this.jsonStr2 += 'export default {\n' +
          '  mixins: [layoutMixin],\n' +
          '  components: {},\n' +
          '  data() {\n' +
          '    return {' +
          '    }\n' +
          '  },\n' +
          '  created() {\n' +
          '   \n' +
          '  },\n' +
          '  computed: {},\n' +
          '  methods: {\n' +
          '  \n' +
          '  }\n' +
          '}\n' +
          '</' +
          'script> \n' +
          '<style lang="scss" scoped></style>\n'
      this.pid = 0

    }
    ,
    addItem(i) {
      if (!this.from.model) {
        return this.$message.error("请填写From表单数据")
      }
      this.addItemAb.prop = ''
      this.addItemAb.label = ''
      this.addItemAb.rule = ''
      this.visible2 = true
      this.va = i
      if (i === 4) {
        this.pid++
      }

    },
    okItem() {
      let addItem = Object.assign({}, this.addItemAb);
      if (this.va === 1) {
        let str = addItem.elformitemstar
        if (addItem.label) {
          str += '\n label="' + addItem.label + '"\n'
        }
        if (addItem.prop) {
          str += '\n prop="' + addItem.prop + '"'
        }
        str += '\n >\n<el-input'
        if (addItem.prop) {
          str += '\n v-model="' + this.from.model + "." + addItem.prop + '"'
        }
        if (addItem.rule) {
          str += '\n rules="{' + addItem.rule + '}"'
        }
        str += '\n          class="widthAuto"' +
            '\n      ></el-input>' + addItem.elformitemend
        addItem.allstr = str
        addItem.type = this.va
        addItem.pid = this.pid
        this.addItemAbs.push(addItem)
        this.onClose()
        return
      }
      if (this.va === 2) {
        let str = addItem.elformitemstar
        if (addItem.label) {
          str += '\n label="' + addItem.label + '"\n'
        }
        if (addItem.prop) {
          str += '\n prop="' + addItem.prop + '"\n'
        }
        str += '\n>\n<ncp-select'
        if (addItem.prop) {
          str += '\n v-model="' + this.from.model + "." + addItem.prop + '"'
        }
        if (addItem.rule) {
          str += '\n rules="{' + addItem.rule + '}"'
        }
        str += '\ntype="' + addItem.type + '"\n'
        str += '\n   clearable \n' + '       class="widthAuto"' +
            '\n      ></ncp-select>' + addItem.elformitemend
        addItem.allstr = str
        addItem.type = this.va
        addItem.pid = this.pid
        this.addItemAbs.push(addItem)
        this.onClose()
        return;
      }
      if (this.va === 3) {
        let str = addItem.elformitemstar
        if (addItem.label) {
          str += '\nlabel="' + addItem.label + '"\n'
        }
        if (addItem.prop) {
          str += '\nprop="' + addItem.prop + '"\n'
        }
        str += '\n>\n<el-date-picker'
        if (addItem.prop) {
          str += '\n v-model="' + this.from.model + "." + addItem.prop + '"'
        }
        if (addItem.rule) {
          str += '\n rules="{' + addItem.rule + '}"'
        }
        str += '\n placeholder="请输入证件开始日期"\n' +
            '          style="width: 100%;"\n' +
            '          type="date"\n'
        str += 'format="' + addItem.format + '"\n'
        str += 'value-format="timestamp"\n'
        str += 'class="widthAuto"\n' +
            '      ></el-date-picker>' + addItem.elformitemend
        addItem.allstr = str
        addItem.type = this.va
        addItem.pid = this.pid
        this.addItemAbs.push(addItem)
        this.onClose()
        return
      }
      if (this.va === 4) {
        let str = '<hsa-title-pane :value ="[\'' + addItem.prop +'\']" >\n' +
        '<hsa-title-pane-item name = "' + addItem.prop + '" >\n' +
        '<template slot = "title" >\n' +
        ' <span class="collapseTitleSpan">' + addItem.label + '</span>\n' +
        '</template>'
        addItem.allstr = str
        addItem.pid = this.pid
        addItem.type = this.va
        this.addItemAbs.push(addItem)
        this.onClose()
        return
      }
    },
    removeItem(delete_index) {
      this.addItemAbs.splice(delete_index, 1)
    },
    onCopy() {
      this.$copyText(this.jsonStr2).then(
          e=>{
            console.log('复制成功：', e);
            this.$message.success("复制成功")
            this.change()
          },
          e=>{
            console.log('复制失败：', e);
            this.$message.error("复制失败")
            this.change()
          }
      )
    },

  }
}
</script>

<style scoped>
/deep/ .CodeMirror {
  font-family: monospace;
  height: 50em;
  color: black;
  direction: ltr;
  width: 50rem;
}
.but{
  margin-top: 1rem
}
</style>
