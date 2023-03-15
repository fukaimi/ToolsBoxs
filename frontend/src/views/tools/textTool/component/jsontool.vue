<!-- JSON 格式化工具 -->
<template>
  <div style="float: left;margin-left:2rem ;width: 700px">
    <div class="footer">
      <template>
        <a-space>
          <a-button-group style="margin: 0 auto">
            <a-button type="default" @click="clickFormat">格式化</a-button>
            <a-button type="default" @click="onCopy">复制</a-button>
            <a-button type="default" @click="removeZy">去转移</a-button>
          <!--          <a-upload>-->
          <!--            <a-button>-->
          <!--              <a-icon type="upload"/>-->
          <!--            </a-button>-->
          <!--          </a-upload>-->
          <!--          <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">-->
          <!--            <a-button>Confirm</a-button>-->
          <!--          </a-popconfirm>-->
          </a-button-group>
        </a-space>
      </template>
    </div>
    <div style="width: 750px;height: 700px;text-align: left;padding-top: 1rem">
      <!--      <a-input v-model="jsonStr" autosize type="textarea" placeholder="Please input"/>-->
      <b-code-editor
        ref="editor"
        v-model="jsonStr"
        :auto-format="true"
        :smart-indent="true"
        theme="idea"
        :indent-unit="4"
        :line-wrap="false"
        :lint="false">
      </b-code-editor>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipBoard from 'vue-clipboard2'
import {ipcApiRoute} from "@/api/main";
Vue.use(VueClipBoard)
export default {
  data() {
    return {
      jsonStr: ''
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
          scene: 'jsonTool'
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.length === 0) {
          this.isUpdate = false
          return;
        }
        this.jsonStr =res.result[0].alldata
        if (this.jsonStr){
          const reg = /1(.*)[’|"]$/;//去引号
          this.jsonStr = this.jsonStr.replace(reg,'');
        }
        this.isUpdate = true
        self.$message.success(`完成`);
      })
    },
    change() {
      let info = {
        scene: "jsonTool",
        memo: 'mysql终端',
        alldata: JSON.stringify(this.jsonStr)
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
    onCopy() {
      this.$copyText(this.jsonStr).then(
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
    removeZy(){
      //正则表达式 匹配全部"\" 需要加 /g
      let reg = /\\/g;
//使用replace方法将全部匹配正则表达式的转义符替换为空
      this.jsonStr = this.jsonStr.replace(reg,'');
      this.change()
    },
    clickFormat() {
      // 1、JSON.parse：把JSON字符串转换为JSON对象
      // 2、JSON.stringify：把JSON对象 转换为 有缩进的 JSON字符串格式
      this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, '\t')
      this.change()
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 4rem;
  z-index: 99999;
}
/deep/.CodeMirror {
  font-family: monospace;
  height: 25rem;
  color: black;
  direction: ltr;
  width: 45rem;
}
</style>
