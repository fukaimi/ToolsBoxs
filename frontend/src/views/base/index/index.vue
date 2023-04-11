<template>
  <div
    id="app"
    :style="autoUrl">
    <div class="divBox">
      <span style="color: #fff;font-size: 9rem;font-family: 方正粗圆_GBK">{{ nowtime }} <font size="5rem">{{
        xq
      }}</font><br></span>
      <span style="color: #fff;">{{ today }}&nbsp;&nbsp;&nbsp;&nbsp;{{ nl }}
        <a-tag color="#2db7f5">
          {{ jq }}
        </a-tag>
        <a-tag color="#2db7f5">
          {{ gzr }}
        </a-tag>
      </span>
    </div>
    <div
      style="background-color:rgba(0,0,0,0.5);width: 30%;height: 10%;position: absolute;right: 0;bottom: 0;border-radius: 0.4rem;color: #fff;text-align: left">
      <a-tag color="#2db7f5" style="margin-left: 0.5rem">
        <a-icon type="alert"/>
        每日一言:
      </a-tag>
      {{ qinggan }}
      <a-icon type="reload" @click="qingan"/>
    </div>
    <a-button-group>
      <a-button type="link" @click="add">
        <a-icon type="left"/>
        下一张
      </a-button>
      <a-button type="link" @click="ss"> 上一张
        <a-icon type="right"/>
      </a-button>
    </a-button-group>
  </div>
</template>

<script>
import {ipcApiRoute} from "@/api/main";
import moment from "moment";

export default {
  name: "Index",
  data() {
    return {
      resourceUrl: 'https://cn.bing.com/HPImageArchive.aspx',//https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1,
      nowDate: 1681184369653,
      nowtime: '00:00',
      ynr: '',
      qinggan: '',
      today: '',
      jq: '',
      nl: '',
      xq: '',
      gzr: '',
      nly: '',
      n: 1,
      intervalId: null,
      autoUrl:'background:url(https://cn.bing.com/th?id=OHR.Aldeyjarfoss_ZH-CN0106567013_1920x1080.jpg&rf=LaDigue_1920x1080.jpg) no-repeat;'
    }
  },
  created() {
    this.init()
    this.qingan()
    // this.get(1)
  },
  mounted() {
    this.get(1)
    // this.init()
    this.dataRefreh()
  },
  methods: {
    init() {
      this.nowtime = moment(new Date()).format("HH:mm")
      const self = this;
      const params = {
        action: 'GET',
        data: {
          url: this.systemConfig.nongli
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          let result = res.result;
          this.today = result.today
          this.jq = result.jq
          this.nl = result.nl
          this.xq = result.xq
          this.gzr = result.gzr
          this.nly = result.nly
        }
      })
    },
    qingan() {
      const self = this;
      const params = {
        action: 'GET',
        data: {
          url: this.systemConfig.qinggan
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          let returnElement = res.result[0];
          this.qinggan = returnElement.qinggan
        }
      })
    },
    add() {
      this.get(this.n++)
    },
    ss() {
      this.get(this.n--)
    },
    get(n) {
      if(n <=0){
        this.n = 10
        n = 10
      }
      if(n >=10){
        this.n = 1
        n = 1
      }
      const self = this;
      const params = {
        action: 'GET',
        data: {
          url: this.resourceUrl,
          format: 'js',
          n: n
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        this.$nextTick(() => {
          this.autoUrl = 'background:url(https://cn.bing.com/' + res.result.images[n - 1].url + ') no-repeat;'
        })
      })
    },
    // 定时刷新数据函数
    dataRefreh () {
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return
      }
      // 计时器为空，操作
      this.intervalId = setInterval(() => {
        this.nowtime = moment(new Date()).format("HH:mm")
      }, 1000)
    },
    // 停止定时器
    clear () {
      clearInterval(this.intervalId) // 清除计时器
      this.intervalId = null // 设置为null
    },
  }
}
</script>

<style scoped>
html, body, #app {
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
}

.divBox {
  /*background:red;*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#app {
  height: 100%;
  text-align: center;
.layout-sider {
  border-top: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  background-color: #FAFAFA;
  overflow: auto;
}
}
</style>
