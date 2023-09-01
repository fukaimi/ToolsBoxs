<template>
  <div style="width: 100%;height: 2.2rem;-webkit-app-region: drag;-webkit-user-select: none;position: absolute;z-index: 9999">
    <div style="width: 7rem;padding: 0.5rem 0 0 0.2rem;-webkit-app-region: no-drag;">
      <a @click="delWin('window-min')"><a-icon type="minus-circle" class="min" /></a>
      <a @click="delWin('window-max')"><a-icon type="plus-circle" class="max"/></a>
      <a @click="delWin('window-close')"><a-icon type="close-circle" class="close"/></a>

    </div>
  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main";
import moment from "moment";

export default {
  name: "NavIndex",
  props:{
    black:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    delWin(item){
      const self = this;
      this.$ipcInvoke(ipcApiRoute.delWindows, item).then(res => {
        if (res.result) {
          this.jiejiari = res.result.data.list[0];
          this.today = moment(this.jiejiari.date).format('DD')
        }
      })
    },
    blackIndex(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
.min{
  font-size: 1.3rem;background: red;color: #ffffff;border-radius: 15px;margin: 0.2rem
}
.min:hover{
  font-size: 1.3rem;background: #ffffff;color: red;border-radius: 15px;margin: 0.2rem
}
.max{
  font-size: 1.3rem;background: orange;color: #ffffff;border-radius: 15px;margin: 0.2rem
}
.max:hover{
  font-size: 1.3rem;background: #ffffff;color: orange;border-radius: 15px;margin: 0.2rem
}
.close{
  font-size: 1.3rem;background: green;color: #ffffff;border-radius: 15px;margin: 0.2rem
}
.close:hover{
  font-size: 1.3rem;background: #ffffff;color: green;border-radius: 15px;margin: 0.2rem
}
</style>
