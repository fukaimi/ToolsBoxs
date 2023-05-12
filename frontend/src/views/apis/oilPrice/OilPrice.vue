<template>
  <div>
    <home/>

    <div style="float: left;text-align: left;" class="divBox">

      <a-card title="今日油价" style="background-color:rgba(0,0,0,0.1);border-radius: 1rem">
        <a-select slot="extra" v-model="city" default-value="云南" style="width: 120px" @change="query">
          <a-select-option value="湖南">湖南</a-select-option>
          <a-select-option value="湖北">湖北</a-select-option>
          <a-select-option value="广东">广东</a-select-option>
          <a-select-option value="广西">广西</a-select-option>
          <a-select-option value="河南">河南</a-select-option>
          <a-select-option value="河北">河北</a-select-option>
          <a-select-option value="山东">山东</a-select-option>
          <a-select-option value="山西">山西</a-select-option>
          <a-select-option value="江苏">江苏</a-select-option>
          <a-select-option value="浙江">浙江</a-select-option>
          <a-select-option value="江西">江西</a-select-option>
          <a-select-option value="黑龙江">江黑龙江</a-select-option>
          <a-select-option value="新疆">新疆</a-select-option>
          <a-select-option value="云南">云南</a-select-option>
          <a-select-option value="贵州">贵州</a-select-option>
          <a-select-option value="福建">福建</a-select-option>
          <a-select-option value="吉林">吉林</a-select-option>
          <a-select-option value="安徽">安徽</a-select-option>
          <a-select-option value="四川">四川</a-select-option>
          <a-select-option value="西藏">西藏</a-select-option>
          <a-select-option value="宁夏">宁夏</a-select-option>
          <a-select-option value="辽宁">辽宁</a-select-option>
          <a-select-option value="青海">青海</a-select-option>
          <a-select-option value="甘肃">甘肃</a-select-option>
          <a-select-option value="陕西">陕西</a-select-option>
          <a-select-option value="内蒙古">内蒙古</a-select-option>
          <a-select-option value="台湾">台湾</a-select-option>
          <a-select-option value="北京">北京</a-select-option>
          <a-select-option value="上海">上海</a-select-option>
          <a-select-option value="天津">天津</a-select-option>
        </a-select>

        <a-descriptions :title="oilprice.prov">
          <a-descriptions-item label="零号柴油">
            <span :style="oilprice.p0 < 7 ? styleGren : oilprice.p0 > 8 ? styleRed : styleWarn">{{
              oilprice.p0
            }} 元</span>
          </a-descriptions-item>
          <a-descriptions-item label="89号汽油">
            <span :style="oilprice.p89 < 7 ? styleGren : oilprice.p89 > 8 ? styleRed : styleWarn">{{
              oilprice.p89
            }} 元</span>
          </a-descriptions-item>
          <a-descriptions-item label="92号汽油">
            <span :style="oilprice.p92 < 7 ? styleGren : oilprice.p92 > 8 ? styleRed : styleWarn">{{
              oilprice.p92
            }} 元</span>
          </a-descriptions-item>
          <a-descriptions-item label="95号汽油">
            <span :style="oilprice.p95 < 7 ? styleGren : oilprice.p95 > 8 ? styleRed : styleWarn">{{
              oilprice.p95
            }} 元</span>
          </a-descriptions-item>
          <a-descriptions-item label="98号汽油">
            <span :style="oilprice.p98 < 7 ? styleGren : oilprice.p98 > 8 ? styleRed : styleWarn">{{
              oilprice.p98
            }} 元</span>
          </a-descriptions-item>
          <a-descriptions-item label="数据更新时间">
            {{ oilprice.time }}
          </a-descriptions-item>
        </a-descriptions>
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
      city: '云南',
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
      //https://api.qqsuu.cn/api/dm-oilprice?prov=云南
      this.nowtime = moment(new Date()).format("HH:mm")
      const self = this;
      const params = {
        action: 'GET',
        data: {
          url: this.systemConfig.oilprice,
          prov: this.city
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          this.oilprice = res.result.data;
        }
      })
    },
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
