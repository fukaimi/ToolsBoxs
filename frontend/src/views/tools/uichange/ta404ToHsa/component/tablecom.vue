<template>
  <div>
    <a-modal v-model="visible" title="表格列代码生成" on-ok="handleOk" width="50rem">
      <template slot="footer">
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
          确认
        </a-button>
      </template>
      <a-space v-for="(item,index) in str" :key="index" style="width: 50rem;padding-top: 1rem">
        <a-icon type="close-circle" @click="removeItem(index)"/>
        <a-tag color="#f50">
          {{ item.label }}
        </a-tag>
        <a-tag color="#2db7f5">
          {{ item.prop }}
        </a-tag>
        <a-tag color="#87d068">
          {{ item.align }}
        </a-tag>
        <a-tag color="#108ee9">
          {{ item.prop === 'cz' ? '操作列' : '非操作列' }}
        </a-tag>
      </a-space>
      <br>
      <a-space style="padding-top: 2rem">
        <a-button type="dashed" @click="showModal2">
          新增列
        </a-button>
        <a-button type="dashed" @click="additem(2)">
          新增操作列
        </a-button>
      </a-space>
    </a-modal>
    <a-modal v-model="visible2" title="列属性填写" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="additem(1)">
          确认
        </a-button>
      </template>
      <template>
        <a-form :form="form" >
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="名称"
          >
            <a-input
              v-decorator="[
                'title',
                { rules: [{ required: true, message: '请输入名称!' }] },
              ]"
              placeholder="名称"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="字段ID"
          >
            <a-input
              v-decorator="[
                'prop',
                { rules: [{ required: true, message: '请输入prop名称!' }] },
              ]"
              placeholder="prop值"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="列布局"
          >
            <a-select
              v-decorator="['align',{ rules: [{ message: '请选择' }] ,initialValue:'left'},]"
              default-value="left"
            >
              <a-select-option value="left">
                left
              </a-select-option>
              <a-select-option value="center">
                center
              </a-select-option>
              <a-select-option value="right">
                right
              </a-select-option>
            </a-select>

          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="表头布局"
          >
            <a-select
              v-decorator="['headerAlign',{ rules: [{ message: '请选择' }],initialValue:'left' },]"
              default-value="left"
            >
              <a-select-option value="left">
                left
              </a-select-option>
              <a-select-option value="center">
                center
              </a-select-option>
              <a-select-option value="right">
                right
              </a-select-option>
            </a-select>

          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="超出提示"
          >
            <a-select
              v-decorator="['showOverflowTooltip',
                            { rules: [{ message: '请选择' }] ,initialValue:'true'}]"
              default-value="true"
            >
              <a-select-option value="true">
                是
              </a-select-option>
              <a-select-option value="false">
                否
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="宽"
          >
            <a-input-number
              v-decorator="[
                'width',
                { rules: [{ required: true, message: '请输入!' }] ,initialValue:220},
              ]"
              placeholder="宽"
            >
            </a-input-number>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="列固定"
          >
            <a-select
              v-model="form.fixed"
              v-decorator="['fixed',{ rules: [{ message: '请选择' }] ,initialValue:'none'},]"
              default-value="none"
            >
              <a-select-option value="none">
                无
              </a-select-option>
              <a-select-option value="left">
                left
              </a-select-option>
              <a-select-option value="right">
                right
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="码值"
          >
            <a-input
              v-decorator="[
                'filters',
                { rules: [{message: '请输入!' }] },
              ]"
              placeholder="码值/或转码"
            >
            </a-input>
          </a-form-item>
        </a-form>
      </template>
    </a-modal>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default {
  data() {
    return {
      form: this.$form.createForm(this,{showOverflowTooltip:true}),
      formItemLayout,
      loading: false,
      visible: false,
      visible2: false,
      check: true,
      str:[]
    };
  },
  created() {
    this.$form.setFieldsValue({showOverflowTooltip:true})
  },
  methods: {
    showModal() {
      //
      this.visible = true;
      this.str = []
    },
    showModal2() {
      //
      this.form.resetFields();
      this.visible2 = true;

    },
    zdchange(checked){
      console.log(`a-switch to ${checked}`);
      this.check = checked
    },
    additem(i){
      if (i===1){
      this.form.validateFields((err, values) => {
        if (!err){
          let param = {
            label: values.title,
            prop: values.prop,
            showOverflowTooltip: values.showOverflowTooltip,
            sortable:true,
          }
          let jsonStr = '{\n' + ' label: \'' + values.title + '\',\n' + ' prop: \'' + values.prop + '\',\n' +' showOverflowTooltip: ' +   values.showOverflowTooltip + ',\n' +' sortable:true,'
          if (values.align){
            param.align = values.align
            jsonStr += '\n align: \'' + values.align + '\','
          }
          if(values.headerAlign){
            param.headerAlign = values.headerAlign
            jsonStr += '\n headerAlign: \'' + values.headerAlign + '\','
          }
          if (values.filters){
            param.filters = '[\'' +values.filters+ '\']'
            jsonStr += '\n filters: ' + '[\'' +values.filters+ '\']' + ','
          }
          if(values.fixed !== 'none'){
            param.fixed = values.fixed
            jsonStr += '\n fixed: \'' +values.fixed+ '\'' + ','
          }
          jsonStr+='\n}'
          param.jsonStr = jsonStr
          this.str.push(param)
          this.visible2 = false
        }
      }
      );}
      if(i===2){
        let param = {
          label: '操作',
          prop: 'cz'
        }
        param.jsonStr = '{\n' +
            '        label: \'操作\',\n' +
            '        type: \'Button\',\n' +
            '        buttonGroup: [\n' +
            '          {\n' +
            '            type: \'primary\',\n' +
            '            icon: \'el-icon-edit\',\n' +
            '            id: \'edit\',\n' +
            '            title: \'办理\',\n' +
            '            size: \'mini\',\n' +
            '            handle: row => this.cz(row)\n' +
            '          }\n' +
            '        ],\n' +
            '        minWidth: \'80px\',\n' +
            '        // 操作列必需右固定\n' +
            '        fixed: \'right\'\n' +
            '      }'
        this.str.push(param)
        this.visible2 = false
      }

    },
    handleOk(e) {
      const str = this.str
      let finaStr = 'const columns = ['
      for (let i = 0; i < str.length; i++) {
        if (i>0){
          finaStr+= ','
        }
        finaStr += str[i].jsonStr
      }
      finaStr += ']'
      this.$emit('setStr',finaStr)
      this.visible = false
    },
    handleCancel(e) {
      this.visible2 = false;
    },
    removeItem(delete_index) {
      this.str.splice(delete_index, 1)
    },
  },
};
</script>

<style scoped>

</style>
