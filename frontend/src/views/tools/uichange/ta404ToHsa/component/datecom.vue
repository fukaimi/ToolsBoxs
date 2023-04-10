<template>
  <div>
    <a-modal v-model="visible" title="时间框代码生成" on-ok="handleOk">
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
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="日期格式"
          >
            <a-input
              v-decorator="[
                'format',
                { rules: [{required: true, message: '请输入格式!' }] },
              ]"
              placeholder="yyyyMMdd"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="日期框类型">
            <a-select
              v-decorator="[
                'type',
                { rules: [{ required: true, message: '请选择类型!' }] },
              ]"
              placeholder="请选择类型"
            >
              <a-select-option value="date">
                日
              </a-select-option>
              <a-select-option value="week">
                周
              </a-select-option>
              <a-select-option value="month">
                月
              </a-select-option>
              <a-select-option value="year">
                年
              </a-select-option>
              <a-select-option value="dates">
                多个日期
              </a-select-option>
              <a-select-option value="datetime">
                datetime
              </a-select-option>
              <a-select-option value="datetimerange">
                datetimerange
              </a-select-option>
              <a-select-option value="daterange">
                daterange
              </a-select-option>
              <a-select-option value="monthrange">
                monthrange
              </a-select-option>
            </a-select>
          </a-form-item>
          <template>
            <a-alert
              message="参考:[{ required: true, message: '请选择' }]"
              banner
              closable
              size="mini"
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
      form: this.$form.createForm(this, {name:'selectname'}),
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
            str +='              >\n'+
            '                <el-date-picker\n' +
                  '                  v-model="' + values.prop + '"\n'
            if(values.format){
              str += '                  format="' + values.format +'"\n'
            }
            if(values.type){
              str += '                  type="' + values.type + '"\n'
            }

            str +=      '                  class="widthAuto"\n' +
                  '                  style="width:100%"\n' +
                  '                  value-format="timestamp"\n'+
                  '                >\n'+
            '                </el-date-picker>\n' +
                '              </el-form-item>\n'
            if (this.mark !== 0){
              let li = 24 / this.mark
              // let sli = 24 - li
              str = '<hsa-col :sm="24" :md="12" :lg="' + li + '">\n' + str
              str += '</hsa-col>\n'
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
