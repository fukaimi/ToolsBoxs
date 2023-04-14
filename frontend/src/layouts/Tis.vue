<template>
  <div class="box1" style="-webkit-app-region: drag;">
    <a-space>
      <span><a-icon type="minus-circle" theme="twoTone" two-tone-color="#fc625d" @click="click(1)"/></span>
      <span><a-icon type="plus-circle" theme="twoTone" two-tone-color="#fdbc40" @click="click(2)"/></span>
      <span><a-icon type="close-circle" theme="twoTone" two-tone-color="#35cd4b" @click="click(3)"/></span>
    </a-space>
  </div>
</template>

<script>
import {ipcApiRoute} from "@/api/main";
export default {
  name: "Tis",
  methods: {
    click(i) {
      this.$message.success(i)
      if (i === 1){
       // ipcRenderer.send('window-min') // 通知主进程我要进行窗口最小化操作
        this.$ipc.on(ipcApiRoute.delWindows, 'window-min')
      }
      // if (i === 2){
      //   ipcRenderer.send('window-max')
      // }
      // if (i === 3){
      //   ipcRenderer.send('window-close')
      // }
    }
  }
}
</script>

<style scoped>
html, body, #app {
  height: 100%;
}

.box {
  position: relative;
  padding: 1rem 1rem;
  -webkit-app-region: drag;
}

.box::before {
  content: '';
  position: absolute;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #fc625d;
  width: 12px;
  height: 12px;
  left: 12px;
  -webkit-box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
  z-index: 2;
}
</style>
