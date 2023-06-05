<template>
  <div style="background-color: #F5F5F5;-webkit-app-region: drag;-webkit-user-select: none;">
    <a-page-header
      :ghost="false"
      title=""
      sub-title=""
      @back="collapsedSetting"
    >
      <template slot="backIcon">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" class="noDrg"/>
      </template>
      <template slot="extra">
        <font v-if="websocketStat === '0'" :color="websocketStat === '0' ? 'red' : 'green'">{{ websocketStatMsg }}</font>
        <font v-if="websocketStat === '1'" color="green">已连接到服务器</font>
        <a-icon v-if="count===0" :style="{ fontSize: '18px', color: '#000' }" type="bell" />
        <a-badge :count="count" :style="{ fontSize: '18px', color: '#000' }"/>

        <span style="font-weight:bold">{{ nowtime }}&nbsp;&nbsp;</span>
        <a-popover placement="bottom" class="noDrg" >
          <template slot="title">
            <div class="con">
              <div class="now-data-myself noDrg ">
                <div class="now-data-myself-time">{{ date }}</div>
                <div class="now-data-myself-week">{{ week }}</div>
              </div>
              <Calendar
                @choseDay="clickDay"
                @changeMonth="changeDate"
                @isToday="clickToday"
              ></Calendar>
            </div>
          </template>
          <a-button type="link">{{ week }}</a-button>
        </a-popover>

        <a @click="delWin('window-min')"><a-icon type="minus-circle" class="min noDrg" /></a>
        <a @click="delWin('window-max')"><a-icon type="plus-circle" class="max noDrg"/></a>
        <a @click="delWin('window-close')"><a-icon type="close-circle" class="close noDrg"/></a>

      </template>
      <template slot="extra" class="noDrg">

      </template>

    </a-page-header>
  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main";
import moment from "moment";
import Calendar from 'vue-calendar-component';


export default {
  components: {
    Calendar
  },
  props:{
    collapsed:{
      type:Boolean,
      default: false
    },
    websocketStat:{
      type:String,
      default: '0'
    },
    websocketStatMsg:{
      type:String,
      default: '服务未连接'
    }
  },
  data(){
    return {
      count: 0,
      date: "",
      week: "",
      nowtime: ''
    };
  },
  created() {
    var now = new Date();
    this.date = now.getDate();//得到日期
    var day = now.getDay();//得到周几
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    this.week = arr_week[day];
    this.nowtime = moment(new Date()).format("HH:mm:ss")
    this.dataRefreh()
  },
  methods:{
    // 定时刷新数据函数
    dataRefreh() {
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return
      }
      // 计时器为空，操作
      this.intervalId = setInterval(() => {
        this.nowtime = moment(new Date()).format("HH:mm:ss")
      }, 1000)
    },
    delWin(item){
      const self = this;
      this.$ipcInvoke(ipcApiRoute.delWindows, item)
    },
    collapsedSetting(){
      this.$emit('collapsedSetting')
    },
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); // 跳到了本月
    }
  }
}
</script>
<style>
tr:last-child td {
  padding-bottom: 0;
}
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
.noDrg{
  -webkit-app-region: no-drag;
}

.now-data-myself {
  width: 40%;
  position: absolute;
  border-right: 1px solid rgba(227, 227, 227, 0.6);
}
.con {
  position: relative;
  max-width: 280px;
  margin: auto;
}
.con .wh_content_all {
  background: transparent !important;
}
.wh_top_changge li {
  color: #F56C6C !important;
  font-size: 15px !important;
}
.wh_content_item, .wh_content_item_tag {
  color: #303133 !important;
}
.wh_content_item .wh_isToday {
  background: #00d985  !important;
  color: #fff  !important;
}
.wh_content_item .wh_chose_day {
  background: #409EFF  !important;
  color: #ffff  !important;
}
.wh_item_date:hover {
  background: rgb(217, 236, 255) !important;
  border-radius: 100px !important;
  color: rgb(102, 177, 255)  !important;
}
.wh_jiantou1[data-v-2ebcbc83] {
  border-top: 2px solid #909399;
  border-left: 2px solid #909399;
  width: 7px;
  height: 7px;
}
.wh_jiantou2[data-v-2ebcbc83] {
  border-top: 2px solid #909399;
  border-right: 2px solid #909399;
  width: 7px;
  height: 7px;
}
.wh_top_tag[data-v-2ebcbc83] {
  color: #409EFF;
  border-top: 1px solid rgba(227, 227, 227, 0.6);
  border-bottom: 1px solid rgba(227, 227, 227, 0.6);
}
.wh_container[data-v-2ebcbc83] {
  max-width: 280px;
}
.wh_top_changge[data-v-2ebcbc83] {
  display: flex;
  width: 50%;
  margin-left: 43%;
}
.now-data-myself-time {
  color: #F56C6C;
  font-size: 28px;
  height: 30px;
  font-family: "Helvetica Neue";
}
.now-data-myself-week {
  font-size: 10px;
  color: #909399;
}
.wh_top_changge .wh_content_li[data-v-2ebcbc83] {
  font-family: Helvetica;
}
</style>
