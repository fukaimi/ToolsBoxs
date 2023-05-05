<template>
  <div>
    <a-spin :spinning="spinning">
      <div style="text-align: left;height: 100vh">
        <b-code-editor
          ref="editor"
          v-model="kzt"
          :auto-format="true"
          :smart-indent="true"
          theme="idea"
          :indent-unit="4"
          :line-wrap="false"
          style="height: 100vh"
          :lint="false">
        </b-code-editor>
      </div>
    </a-spin>
  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main"
import Vue from 'vue'
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard)



export default {
  data() {
    return {
      spinning: false,
      formsource: {},
      visible2: false,
      kzt: '',
      txt: '',
      isUpdate: false,
      resourceLis: [],
      resourceUrl: '',
      visible: false
    };
  },
  created() {
    this.initScene()
  },
  methods: {
    initScene() {//场景初始化
      const self = this;
      const params = {
        action: 'getSceneTemp',
        info: {
          scene: 'BULB'
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.length === 0) {
          this.isUpdate = false
          return;
        }
        let ressource = eval('(' + res.result[0].alldata + ')')
        this.resourceUrl = ressource.resourceUrl
        this.kzt = ressource.kzt
        this.isUpdate = true
        self.$message.success(`完成`);
      })
    },
    kztChange(e) {
      const kzt = this.kzt
      const resourceUrl = this.resourceUrl
      let info = {
        scene: "BULB",
        memo: '草稿',
        alldata: JSON.stringify({kzt: kzt, resourceUrl: resourceUrl})
      }
      if (this.isUpdate) {//更新
        const params = {
          action: 'updateSceneTemp',
          info: info
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          if (res.result) {
            this.isUpdate = true
            return;
          }
        })
      } else {//新增
        const params = {
          action: 'addSceneTemp',
          info: info
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          if (res.result) {
            this.isUpdate = true
            return;
          }

        })
      }

    },
    delData(data_id) {
      const self = this;
      const params = {
        action: 'delDataConfig',
        info: {
          data_id: data_id
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          self.$message.success(`删除成功`);
          this.initData()
          this.resourceUrl = ''
          return;
        }
        self.$message.success(`删除失败`);
      })
    },
    testSelect(e) {
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      let value = e.target.value;
      console.log(e.target.selectionStart, e.target.selectionEnd, e.target.value);

      let selectVal = "";
      if (value && end != 0) { //防止 没选中
        selectVal = value.slice(start, end);
      }
      console.log(selectVal)
      this.txt = selectVal;
    },
    showModal() {
      this.formInline = {
        data_value: 'http://',
        data_desc: '',
      }
      this.visible = true;
    },
    closeModal() {
      this.visible2 = false;
      this.visible = false;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk(e) {
      console.log(e);
      this.handleSubmit(e)
      this.visible = false;
    },
    handleSubmit(e) {
      console.log(this.formInline);
      if (!this.formInline.data_desc) {
        return
      }
      const self = this;
      const params = {
        action: 'addDataConfig',
        info: {
          ...this.formInline,
          data_key: 'MYSQL_API_URL',
          data_memo: 'mysql数据源',
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          self.$message.success(`新增成功`);
          this.initData()
          return;
        }
        self.$message.success(`新增失败`);
      })
    },
    post() {
      this.spinning = true
      const self = this;
      const params = {
        action: 'POST',
        data: {
          url: this.resourceUrl,
          sqlStr: this.txt,
          token: this.token,
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.code === 0) {
          self.$message.success(`执行成功`);
          this.spinning = false
          this.columns = []
          const columnall = []
          let data1 = res.result.data;
          let data1Element = {}
          if (data1) {
            data1Element = data1[0];
            for (let key of Object.keys(data1Element)) {
              console.log(key);
              let column = {
                title: key,
                dataIndex: key,
                ellipsis: true
              }
              this.columns.push(column)
            }
            this.columns.push({title: 'description', dataIndex: 'description', ellipsis: true})

            const finalData = []
            for (let i = 0; i < data1.length; i++) {
              data1[i].description = JSON.stringify(data1[i])
              finalData.push(data1[i])
            }
            this.data = finalData
          }
          return;
        }
        this.spinning = false
        self.$message.error(res.result.message);
      })
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style scoped>
/*/deep/.CodeMirror {*/
/*  font-family: monospace;*/
/*  height: 100vh;*/
/*  color: black;*/
/*  direction: ltr;*/
/*  width: 45rem;*/
/*}*/
/deep/ .CodeMirror {
  font-family: monospace;
  height: 100vh;
  color: black;
  direction: ltr;
}
</style>
