<template>
  <div>
    <a-modal v-model="visible" title="Card代码生成" on-ok="handleOk">
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
            label="标题"
          >
            <a-input
              v-decorator="[
                'title',
                { rules: [{ required: true, message: '请输入名称!' }] },
              ]"
              placeholder="name值"
            >
            </a-input>
          </a-form-item>
          <a-form-item
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
            label="value名称"
          >
            <a-input
              v-decorator="[
                'cardValue',
                { rules: [{ required: true, message: '请输入value名称!' }] },
              ]"
              placeholder="Value值"
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
      form: this.$form.createForm(this, {name:'cardname'}),
      formItemLayout,
      loading: false,
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.form.resetFields();
      this.visible = true;
    },
    handleOk(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          setTimeout(() => {
            this.visible = false;
            this.loading = false;
            let str = '        <hsa-title-pane :value="[\''+ values.cardValue +'\']">\n' +
                '          <hsa-title-pane-item name="' + values.cardValue +'">\n' +
                '            <template slot="title">\n' +
                '              <span class="collapseTitleSpan">' + values.title + '</span>\n' +
                '            </template>\n' +
                '          </hsa-title-pane-item>\n' +
                '        </hsa-title-pane>'

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
