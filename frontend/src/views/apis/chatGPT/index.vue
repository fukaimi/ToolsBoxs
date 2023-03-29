<template>
  <div id="app">
    <template>
      <a-alert message="正在与ChatGPT对话..." type="info" close-text="关闭提示" banner/>
    </template>
    <div class="chatBody">
      <a-row>
        <a-col :span="24">
          <div style="float: left;background:#009c50;border-radius:0.4rem;text-align: left;font-size: 1.5rem;">
            sssssssssssssssssssssssssssssssssssss
          </div>
        </a-col>
        <a-col :span="24">
          <div style="float: right;background:#999999;border-radius:0.4rem;text-align: left;font-size: 1.5rem;">
            ddddddddddddddddddddddddddddddddddddddddd
          </div>
        </a-col>
      </a-row>


    </div>
    <div class="footer">
      <a-textarea placeholder="请输入" allow-clear :rows="5">
      </a-textarea>
      <a-button type="dashed" style="float: right;margin-top:0.5rem">
        发送(Enter)
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.chatBody {
  border: 1px solid red;
  height: 70%;
  width: 95%;
  margin: 0 auto;
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

</style>
