<template>
  <div type="flex" style="position: fixed; width: 100%;height: 2.5rem;-webkit-app-region: drag;-webkit-user-select: none;">
    <div style="width: 7rem;padding: 0.2rem 0 0 0.2rem;-webkit-app-region: no-drag;">
      <a @click="delWin('window-min')"><a-icon type="minus-circle" class="min" /></a>
      <a @click="delWin('window-max')"><a-icon type="plus-circle" class="max"/></a>
      <a @click="delWin('window-close')"><a-icon type="close-circle" class="close"/></a>
      <a-tooltip placement="left" title="返回" :get-popup-container="getPopupContainer">
        <a v-if="black" @click="blackIndex"><a-icon type="double-left" class="black" /></a>
      </a-tooltip>
    </div>
    <vue-particles
      style="position:absolute; z-index: -1"
      color="#39AFFD"
      :particleOpacity="0.9"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#8DD1FE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main";
import moment from "moment";

export default {
  name: "NavDiv",
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
    },
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
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
.black{
  font-size: 1.2rem;background-color: rgba(248, 246, 246, 0.8);color: #f5222d;border-radius: 15px;margin: 0.2rem
}
.black:hover{
  font-size: 1.2rem;background-color: rgba(44, 229, 31, 0.8);color: #f5222d;border-radius: 15px;margin: 0.2rem
}
</style>
