<template>
  <div>
    <a-modal v-model="visible" title="input代码生成" on-ok="handleOk">
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
              message="参考:[{ required: true, message: '请输入' }]"
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
      form: this.$form.createForm(this, {name:'selectname'}),
      formItemLayout,
      loading: false,
      visible: false,
      check: true
    };
  },
  methods: {
    showModal() {
      //
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
            '                <el-input\n' +
                  '                  v-model="' + values.prop + '"\n' +
                  '                  class="widthAuto"\n' +
                  '                  style="width:100%"\n' +
                  '                >\n'+
            '                </el-input>\n' +
                '              </el-form-item>\n'
            this.$emit('setStr',str)
            this.form.resetFields();
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
