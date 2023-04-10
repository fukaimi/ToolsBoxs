<template>
  <div>
    <a-modal v-model="visible" title="下拉框代码生成" on-ok="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
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
          <template>
            <a-alert
              message="参考:[{ required: true, message: '请选择' }]"
              banner
              closable
            />
          </template>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="rules"
          >
            <a-input
              v-decorator="[
                'rules',
                { rules: [{ message: '请输入rules!' }] },
              ]"
              placeholder="rules值,需要带[]"
              value="[{ required: true, message: '请选择' }]"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="采用字典值"
          >
            <a-switch checked-children="使用字典值" un-checked-children="自定义下拉框" default-checked @change="zdchange" />
          </a-form-item>
          <a-form-item
            v-show="check"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="字典码"
          >
            <a-input
              v-decorator="[
                'natType',
                { rules: [{ message: '请输入字典值!' }] },
              ]"
              placeholder="rules值,需要带[]"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            v-show="!check"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="下拉框内容"
          >
            <a-textarea
              v-decorator="[
                'options',
                { rules: [{ message: '请输入rules!' }] },
              ]"
              placeholder="格式:值,描述 回车"
              :auto-size="{ minRows: 5, maxRows: 10 }"
            />
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
  props:{
    mark:{
      type:Number,
      default: 0
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, {name:'selectname',rules:'[{ required: true, message: \'请选择\' }]'}),
      formItemLayout,
      loading: false,
      visible: false,
      check: true
    };
  },
  methods: {
    showModal() {
      this.form.resetFields();
      this.visible = true;
    },
    zdchange(checked){
        console.log(`a-switch to ${checked}`);
      this.check = checked
    },
    handleOk(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          setTimeout(() => {
            this.visible = false;
            this.loading = false;
            let str = '          <el-form-item\n' +
                '                label="' + values.title + '"\n' +
                '                prop="' + values.prop +  '"\n'
            if(values.rules){
              str +='                :rules="' + values.rules +'"\n'
            }

            str +='              >\n'
            if (this.check) {
              str += '                <ncp-select\n' +
                  '                  v-model="' + values.prop + '"\n' +
                  '                  type="' + values.natType + '"\n' +
                  '                  clearable\n' +
                  '                  class="widthAuto"\n' +
                  '                  style="width:100%"\n' +
                  '                >\n'
            }else {
              str +=
                  '                <el-select\n' +
                  '                  v-model="' + values.prop + '"\n' +
                  '                  clearable\n' +
                  '                  class="widthAuto"\n' +
                  '                  style="width:100%"\n' +
                  '                >\n'+
                  '                  <el-option\n' +
                  '                    v-for="item in natDatas.' + values.prop +'s"\n' +
                  '                    :key="item.value"\n' +
                  '                    :label="item.label"\n' +
                  '                    :value="item.value"\n' +
                  '                  >\n' +
                  '                  </el-option>\n'
            }
            if(this.check){
              str +=    '                </ncp-select>\n'
            }else {
              str +=    '                </el-select>\n'
            }
            str +=      '              </el-form-item>\n'
            if (this.mark !== 0){
              let li = 24 / this.mark
              // let sli = 24 - li
              str = '<hsa-col :sm="24" :md="12" :lg="' + li + '">\n' + str
              str += '</hsa-col>\n'
            }
            if (values.options) {
              str += '//以下是js部分 \n'
              let value = values.options
              let code = value.split(/[(\r\n)\r\n]+/); // 根据换行或者回车进行识别
              code.forEach((item, index) => { // 删除空项
                if (!item) {
                  code.splice(index, 1);
                }
              })
              code = Array.from(new Set(code)); // 去重
              console.log(code);
              str += 'const natDatas = {\n' +
                  '  ' + values.prop + 's : ['
              for (let i = 0; i < code.length; i++) {
                let st = code[i]
                let split = st.split(/[(\s)\s]+/);//按空格拆分
                if (split) {
                  split = Array.from(new Set(split)); // 去重
                  if (i > 0) {
                  str += ',\n'
                  }
                  str += '    {\n' +
                      '      value: \'' + split[0] + '\',\n' +
                      '      label: \'' + split[1] + '\'\n' +
                      '    }'
                }

              }
              str += ']\n}'
            }

            this.$emit('setStr',str)
          }, 2000);
        }
      });
    },
    handleCancel(e) {
      this.visible = false;
    },
  },
};
</script>

<style scoped>

</style>
