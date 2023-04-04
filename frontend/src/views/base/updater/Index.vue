<template>
  <div>
    <a-result
      status="success"
      title="Tools工具箱"
      sub-title="在这里你可以查看你的软件版本及进行软件更新.(作者:fukaimin)"
    >
      <template #extra>
        <a-button key="console" type="primary" @click="checkForUpdater()">
          检查更新
        </a-button>
        <a-button key="buy" @click="download()">
          下载安装
        </a-button>
        <div v-show="show" class="one-block-2">
          <a-progress :percent="percentNumber" status="active"/>
          <a-space>
            {{ progress }}
          </a-space>
        </div>
      </template>

      <div class="desc">
        <p style="font-size: 16px;">
          <strong>为了保证您能够进行正常的软件升级,请确保达到下面的条件:</strong>
        </p>
        <p style="text-align: left">
          <a-icon :style="{ color: 'green' }" type="check-circle"/>
          能够正常的访问到互联网
          <!--        <a>Thaw immediately &gt;</a>-->
        </p>
        <p style="text-align: left">
          <a-icon :style="{ color: 'green' }" type="check-circle"/>
          能够正常的访问GitHub <a>https://github.com/ &gt;</a>
        </p>
      </div>
    </a-result>
  </div>
</template>
<!--<template>-->
<!--  <div id="app-demo-window">-->
<!--    <div class="one-block-1">-->
<!--      <span>-->
<!--        1. 自动更新(需要检查网络是否支持访问GitHub)-->
<!--      </span>-->
<!--    </div>-->
<!--    <div class="one-block-2">-->
<!--      <a-space>-->
<!--        <a-button @click="checkForUpdater()">检查更新</a-button>-->
<!--        <a-button @click="download()">下载并安装</a-button>-->
<!--      </a-space>-->
<!--    </div>-->
<!--    <div class="one-block-1">-->
<!--      <span>-->
<!--        2. 下载进度-->
<!--      </span>-->
<!--    </div>-->
<!--    <div class="one-block-2">-->
<!--      <a-progress :percent="percentNumber" status="active" />-->
<!--      <a-space>-->
<!--        {{ progress }}-->
<!--      </a-space>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->
<script>
import {ipcApiRoute, specialIpcRoute} from '@/api/main'

export default {
  data() {
    return {
      status: 0, // -1:异常，1：有可用更新，2：没有可用更新，3：下载中, 4：下载完成
      progress: '',
      percentNumber: 0,
      show: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

      const self = this;
      this.$ipc.removeAllListeners(specialIpcRoute.appUpdater);
      this.$ipc.on(specialIpcRoute.appUpdater, (event, result) => {
        result = JSON.parse(result);
        self.status = result.status;
        if (result.status == 3) {
          self.progress = result.desc;
          self.percentNumber = result.percentNumber;
        } else {
          self.$message.info(result.desc);
        }
      })
    },
    checkForUpdater() {
      this.$ipcInvoke(ipcApiRoute.checkForUpdater).then(r => {
        console.log(r);
        this.show = true
      })
    },
    download() {
      if (this.status !== 1) {
        this.$message.info('没有可用版本');
        return
      }
      this.$ipcInvoke(ipcApiRoute.downloadApp).then(r => {
        console.log(r);
        this.show = true
      })
    },
  }
};
</script>
<style lang="less" scoped>
#app-demo-window {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}


.desc p {
  margin-bottom: 1em;
}
</style>
