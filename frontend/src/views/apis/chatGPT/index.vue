<template>
  <div id="app">
    <template>
      <a-alert message="正在与ChatGPT对话...(推荐使用免费的ChatGPT镜像站)" type="info" close-text="关闭提示" banner/>
    </template>
    <span v-show="show" style="margin: 0 auto;position: absolute;z-index: 222" > <a-statistic-countdown
      title="AI思考中"
      :value="deadline"
      format="mm:ss:SSS"
      style="margin-right: 50px"
      icon="loading"
    />
    </span>
    <div id="chatBody" ref="chatBody" class="chatBody">
      <div v-for="(item,index) in chatGpts" :key="index" class="chatBox">
        <div v-if="item.type===0" class="chatRow">
          <a-avatar class="chatAvatar" icon="robot"/>
          <div class="chatMsgContent">
            <div class="chatUsername">GhatGPT</div>
            <div class="chatContent"> {{ item.ans }}</div>
          </div>
        </div>
        <div v-if="item.type===1" class="chatRow chatRowMe">
          <div class="chatContent">{{ item.ans }}</div>
          <a-avatar icon="reddit"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <a-textarea v-model="txt" placeholder="请输入" allow-clear :rows="5">
      </a-textarea>
      <a-button type="dashed" style="float: right;margin-top:0.5rem" @click="get">
        发送(Enter)
      </a-button>
    </div>
  </div>
</template>

<script>
import {ipcApiRoute} from "@/api/main";

export default {
  name: "Index",
  data() {
    return {
      deadline: Date.now() + 1000 * 30 * 6,//三分钟
      txt: '',
      resourceUrl: 'https://v1.apigpt.cn/',
      value: '',
      chatGpts: [{
        ans: '您好!',
        type: 0
      }],
      mes: [],
      show: false
    }
  },
  methods: {
    get() {
      if (this.txt.length === 0) {
        self.$message.error('好歹输入点什么东西吧');
        return
      }
      const self = this;
      let me = {
        ans: this.txt,
        type: 1
      }
      this.chatGpts.push(me)
      const params = {
        action: 'GET',
        data: {
          url: this.resourceUrl,
          q: this.txt,
          apitype: 'sql'
        }
      }
      this.txt = ''
      this.show = true
      this.deadline = Date.now() + 1000 * 30 * 6
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.code === 200) {
          let ans = {
            ans: res.result.ChatGPT_Answer === null ? '服务器为做应答' : res.result.ChatGPT_Answer,
            type: 0
          }
          this.chatGpts.push(ans)
          this.$nextTick(() => {
            this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight
          })
          this.show = false
          return
        }
        this.show = false
        self.$message.error(res.result.message);
      })
    },
  }
}
</script>

<style scoped>
.chatBody {
  height: 70%;
  width: 95%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
}

.footer {
  border-radius: 0.5rem;
  width: 80%;
  height: 20%;
  margin: 0 auto;
  bottom: 1rem;

}

/deep/ textarea {
  border: none !important;
  resize: none;
  background-color: rgba(0, 0, 0, 0.1);
}

html, body, #app {
  height: 100%;
}

.chatAppBody {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f1f5f8;
}

.chatTitle {
  background: #fff;
}

.chatBox {
  flex: 1;
  padding: 0 0;
}

.chatBottom {
  background: #fff;
}

.chatRow {
  display: flex;
  align-items: flex-end;
  margin: 5px 0px;

}

.chatAvatar {
  margin-right: 5px;
  flex-shrink: 0;
}

.chatUsername {
  font-size: 12px;
  white-space: nowrap;
  color: #999;
  margin-bottom: 2px;
}

.chatContent {
  text-align: left;
  border-radius: 10px 10px 10px 0px;
  padding: 0.2rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 5px 30px rgb(50 50 93 / 8%), 0 1px 3px rgb(0 0 0 / 5%);
  font-size: 14px;
  word-break: break-all;
  line-height: 21px;
  max-width: 90%;
  /*background: rgba(116, 179, 146, 0.99);*/
}

.chatContentMe {
  border-radius: 10px 10px 10px 0px;
  padding: 0.2rem;
  /*background-color: rgb(255,255,255);*/
  box-shadow: 0 5px 30px rgb(50 50 93 / 8%), 0 1px 3px rgb(0 0 0 / 5%);
  font-size: 14px;
  word-break: break-all;
  line-height: 21px;
  max-width: 90%;
  background: #999999;
}

.chatRowMe {
  justify-content: flex-end;
}

.chatRowMe .chatContent {
  border-radius: 10px 10px 0px 10px;
}

</style>
