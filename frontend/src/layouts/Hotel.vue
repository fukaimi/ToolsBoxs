<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" style="-webkit-app-region: drag;-webkit-user-select: none;">
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="[0]" @click="menuHandle">
        <a-menu-item v-for="(item,index) in hotelMenu" :key="index">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <header-page :collapsed="collapsed" :websocketStat="websocketStat" :websocketStatMsg="websocketStatMsg" @collapsedSetting="collapsedSetting"></header-page>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import HeaderPage from '@/views/hotel/index/HeaderPage.vue'
import hotelMenu from "@/config/hotelMenu";
export default {
  name:'Hotel',
  components:{HeaderPage},
  data() {
    return {
      collapsed: false,
      hotelMenu: hotelMenu,
      path:"ws://localhost:8888/hotel/websocket",
      ws:{},
      websocketStat: '0',
      websocketStatMsg: '连接服务中...'
    };
  },
  watch:{
    sockets: {
      connecting () {
        console.log("Socket 正在连接");
        this.$message.success("正在连接服务器")
      },
      disconnect () {
        alert("Socket 断开");
        this.$message.error("服务器已断开")
      },
      connect_error () {
        console.log("Socket 连接失败");
        this.$message.error("服务器连接失败")
      },
      connect () {
        console.log("Socket 连接成功");
        this.$message.success("连接服务器成功")
      },
    },
  },
  mounted() {
    this.init()
    this.menuHandle()
  },
  methods:{
    collapsedSetting(){
      this.collapsed = !this.collapsed
    },
    menuHandle(e) {
      this.current = e ? e.key : 0;
      const linkInfo = this.hotelMenu[this.current]
      console.log('[home] load page:', linkInfo.pageName);
      this.$router.push({name: linkInfo.pageName, params: linkInfo.params})
    },
    init() {
      // 实例化socket，这里的实例化直接赋值给this.ws是为了后面可以在其它的函数中也能调用websocket方法，例如：this.ws.close(); 完成通信后关闭WebSocket连接
      this.websocketStatMsg = '正在连接服务器...'
      this.ws = new WebSocket(this.systemConfig.webSocketUrl + '18206860873')

      //监听是否连接成功
      this.ws.onopen = ()=> {
        console.log('ws连接状态：' +this.ws.readyState);
        //连接成功则发送一个数据
        this.$message.success("已成功连接到服务器")
        this.websocketStatMsg = '已成功连接到服务器'
        this.websocketStat = '1'
        this.ws.send('连接成功');
      }

      //接听服务器发回的信息并处理展示
      this.ws.onmessage = (data)=> {
        console.log('接收到来自服务器的消息：');
        console.log(data)
      }

      //监听连接关闭事件
      this.ws.onclose = ()=>{
        //监听整个过程中websocket的状态
        console.log('ws连接状态：' + this.ws.readyState);
      }

      //监听并处理error事件
      this.ws.onerror = function(error) {
        console.log(error);
        this.websocketStatMsg = 'error'
        this.websocketStat = '0'
      }
    }
  }
};
</script>
<style scoped>
/deep/ .ant-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
  height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
