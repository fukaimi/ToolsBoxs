<template>
  <div id="app">
    <a-row>
      <a-col :span="10" style="height: 80%;float: left">
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
                :rows="12"
              />
            </a-form-model-item>

            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">
                生成
              </a-button>
              <a-button style="margin-left: 10px;" type="primary" @click="onCopy">
                复制结果 F2
              </a-button>
              <a-button style="margin-left: 10px;" @click="resetForm">
                重置 F3
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
          theme="dracula"
          :indent-unit="4"
          :line-wrap="true"
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
      nums: 0,
      keys: '',
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
          {min: 3, message: '不得少于3字符', trigger: 'blur'},
        ],
        txt: [
          {required: true, message: '请输入模板', trigger: 'blur'},
          {min: 3,  message: '不得少于3字符', trigger: 'blur'},
        ]
      },
    };
  },
  created() {
  },
  mounted() {
    const that = this;
    //document.addEventListener('keydown', that.handleWatchEnter);
    document.addEventListener('keydown', that.handleWatchEnter)
    document.addEventListener('keyup',this.closeWatch)

  },
  methods: {
    closeWatch() {
      let keys1 = this.keys;
      if (keys1 === 113) {
        this.onCopy()
      }
      if(keys1 === 114){
        this.resetForm
      }
    },
    handleWatchPress(e) {
      this.keys = window.event ? e.keyCode : e.which;
      console.log('++++++++++++++++++' + this.keys);
    },
    handleWatchEnter(e) {
      let key = window.event ? e.keyCode : e.which;
      this.keys = key
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let form = this.form
          let txtTemplate = form.txtTemplate
          let txt = form.txt
          const splitTemplate = txtTemplate.split('$')
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
          } else {
            for (let i = 0; i < code.length; i++) {
              if (code[i]) {
                const splitTxt = code[i].split(/[(\s)\s]+/)//按照空格拆分
                for (let j = 0; j < splitTemplate.length; j++) {
                  if (splitTxt[j]) {
                    str += splitTemplate[j] + splitTxt[j]
                  } else {
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
    onCopy() {
      if (this.jsonStr2) {
        this.$copyText(this.jsonStr2).then(
            e => {
              console.log('复制成功：', e);
              this.$message.success("已复制到剪切板")
            },
            e => {
              console.log('复制失败：', e);
              this.$message.error("复制失败")
            }
        )
      }

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

/deep/ textarea {
  border: none !important;
  resize: none;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
