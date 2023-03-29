<template>
  <div id="app">
    <a-row>
      <a-col :span="10" style="height: 80%;border: 1px solid red;float: left">
        <template>
          <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-model-item ref="name" label="模板" prop="txtTemplate">
              <a-textarea
                v-model="form.txtTemplate"
                placeholder="格式说明: 字符串中$将会被替换为指定的身份证内容 ,例如 姓名$性别$民族 "
                allow-clear
                :rows="5"
              />
            </a-form-model-item>
            <a-form-model-item ref="name" label="参数" prop="txt">
              <a-textarea
                v-model="form.txt"
                placeholder="格式说明: 按照$数量将参数依次用 空格 隔开,例如:张三 男 汉族"
                allow-clear
                :rows="15"
              />
            </a-form-model-item>

            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">
                生成
              </a-button>
              <a-button style="margin-left: 10px;" @click="resetForm">
                重置
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </template>
      </a-col>
      <a-col :span="12" style="float: left;text-align: left">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonStr2: '',
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      other: '',
      form: {
        txtTemplate: '',
        txt: ''
      },
      rules: {
        txtTemplate: [
          {required: true, message: '请输入模板', trigger: 'blur'},
          {min: 3, max: 5000, message: '不得超过5000字符', trigger: 'blur'},
        ],
        txt: [
          {required: true, message: '请输入模板', trigger: 'blur'},
          {min: 3, max: 5000, message: '不得超过5000字符', trigger: 'blur'},
        ]
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          debugger
          let form = this.form
          let txtTemplate = form.txtTemplate
          let txt = form.txt
          const splitTemplate = txtTemplate.split('$')
          debugger
          let code = txt.split(/[(\r\n)\r\n]+/); // 根据换行或者回车进行识别
          code.forEach((item, index) => { // 删除空项
            if (!item) {
              code.splice(index, 1);
            }
          })
          code = Array.from(new Set(code)); // 去重
          //字符串拼接开始

          let str = '';
          if (txtTemplate.substr(0, 1) === '$') { //判断第一个字符串是否是$
            for (let i = 0; i < code.length; i++) {
              if (code[i]) {
                const splitTxt = code[i].split(/[(\s)\s]+/)//按照空格拆分
                for (let j = 0; j < splitTxt.length; j++) {
                  if (splitTemplate[j + 1]) {
                    str += splitTxt[j] + splitTemplate[j + 1]
                  } else {
                    str += splitTxt[j]
                  }
                }
                str += '\n'
              }
            }
          }else{
            for (let i = 0; i < code.length; i++) {
              if (code[i]) {
                const splitTxt = code[i].split(/[(\s)\s]+/)//按照空格拆分
                for (let j = 0; j < splitTemplate.length; j++) {
                  if(splitTxt[j]){
                    str += splitTemplate[j] + splitTxt[j]
                  }else{
                    str += splitTemplate[j]
                  }

                }
                  str += '\n'
              }
            }
          }

          this.jsonStr2 = str
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.jsonStr2 = ''
    },
  },
};
</script>

<style scoped>
/deep/ html, body, #app {
  height: 100%;
}
/deep/ .CodeMirror {
  font-family: monospace;
  height: 50em;
  color: black;
  direction: ltr;

}
</style>
