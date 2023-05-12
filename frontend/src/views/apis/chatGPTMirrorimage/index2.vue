<template>
  <div>
    <home/>
    <div style="float: left;text-align: left;" class="divBox">
      <a-card title="ChatGPT镜像站" style="background-color:rgba(0,0,0,0.1);border-radius: 1rem">
        <a-select slot="extra" v-model="city" default-value="1" style="width: 120px" @change="query">
          <a-select-option value="1">镜像1</a-select-option>
          <a-select-option value="2">镜像2</a-select-option>
        </a-select>
        <div style="width: 42rem">
          <a :href="href" target="_blank">点击访问</a>
        </div>
      </a-card>
    </div>
  </div>

</template>

<script>
import moment from "moment";
import {ipcApiRoute} from "@/api/main";
import Home from "@/views/base/common/home";

export default {
  name: "OilPrice",
  components: {Home},
  data() {
    return {
      href: 'https://chat.extkj.cn',
      city: '1',
      oilprice: {
        prov: 'Loading...',
        p0: '0',
        p89: '0',
        p92: '0',
        p95: '0',
        p98: '0',
        time: '0000-00-00'
      },
      styleGren: {color: '#0bea0d'},
      styleWarn: {color: '#e88d09'},
      styleRed: {color: '#FF0000FF'},

    }
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      if (this.city === '1') {
        this.href = 'https://chat.extkj.cn'
      }
      if(this.city === '2')
      {
        this.href = 'https://chat.binjie.site:7777'
      }
    }

}
}
</script>

<style scoped>
.divBox {
  /*background:red;*/
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
