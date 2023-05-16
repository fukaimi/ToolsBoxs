<template>
  <div
    id="app"
    ref="screen"
    :style="autoUrl">
    <nav-index/>
    <span v-show="show" style="margin: 0 auto;position: absolute;z-index: 222"> <a-statistic-countdown
      title="正在启动服务..."
      :value="deadline"
      format="mm:ss:SSS"
      style="margin-right: 50px"
      icon="loading"
    />
    </span>
    <div
      class="divBox"
      style="overflow-y: auto;-webkit-app-region: no-drag;">

      <div style="margin-top: 10rem">
        <template>
          <div>
            <a-row :gutter="16">
              <a-col :span="12">
                <a-card :bordered="false" style="background-color:rgba(0,0,0,0.2);height: 15rem;border-radius: 15px">
                  <span style="color: #fff;font-size: 9rem;font-family: 方正粗圆_GBK">{{ nowtime }}<font size="5rem">{{
                    jiejiari.cnweekday
                  }}</font><br></span>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card
                  :bordered="false"
                  style="background-color:rgba(0,0,0,0.2);height: 15rem;text-align: left;border-radius: 15px">
                  <a-row>
                    <a-col :span="12" style="width: 50%;font-size: 9rem;">
                      <font
                        style="background: #ffffff;border-radius: 5px;background-color:rgba(242,242,242,0.6);color: red;font-weight:bolder">
                        {{ today }}
                      </font>

                    </a-col>
                    <a-col :span="12" style="overflow-y: auto;height: 30vh;">
                      <a-row>
                        <a-col>
                          <span style="color: #ffffff;"><font size="3rem">                      <a-tag color="#2db7f5">
                            {{ jiejiari.info }}
                          </a-tag> {{ jiejiari.date }}{{ jiejiari.lunaryear }}{{ jiejiari.lunarmonth }}{{
                            jiejiari.lunarday
                          }}</font></span>
                        </a-col>
                      </a-row>
                      <a-row v-show="jiejiari.name" style="padding-top: 0.3rem;">
                        <a-tag color="#f50">{{ jiejiari.name }} {{ jiejiari.enname }}</a-tag>
                      </a-row>
                      <a-row style="padding-top: 0.3rem;color: #ffffff;">
                        <font size="3rem">今日</font><font size="3rem" color="red">
                          <a-tag v-if="jiejiari.isnotwork === 0" color="#f50">需要上班</a-tag>
                        </font><font v-if="jiejiari.isnotwork === 1" size="3rem">
                          <a-tag color="#87d068">
                            无需上班
                          </a-tag>
                        </font>
                      </a-row>
                      <a-row v-if="jiejiari.tip" style="color: #ffffff;">
                        <font size="3rem">放假提示: {{ jiejiari.tip }}</font>
                      </a-row>
                      <a-row v-if="jiejiari.rest" style="color: #ffffff;">
                        <font size="3rem">拼假建议: {{ jiejiari.rest }}</font>
                      </a-row>
                      <a-row style="color: #ffffff;">
                        <a-row><font size="2rem">历史今天: </font></a-row>
                        <a-row v-for="(item , inde) in lishi" :key="inde">{{ item.lsdate }} {{ item.title }}</a-row>
                      </a-row>

                    </a-col>
                  </a-row>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </template>
      </div>
      <div
        style="width: 70rem;margin-top: 2rem">
        <a-card
          v-for="(item,index) in mainMenu"
          :key="index"
          :bordered="false"
          style="background-color:rgba(0,0,0,0.5);border-radius: 9px;text-align: left;margin-bottom: 2rem">
          <span slot="title" style="color: #ffffff"><a-icon :type="item.icon"/>&nbsp; &nbsp; {{ item.name }}</span>
          <div>
            <a-button
              v-for="(it,ind) in item.param"
              :key="ind"
              type="dashed"
              ghost
              style="margin:10px"
              @click="openWindow(it.pageName)">
              <a-icon :type="it.icon"/>&nbsp; &nbsp; {{ it.title }}
            </a-button>
          </div>
        </a-card>
      </div>
    </div>

    <div
      style="-webkit-app-region: no-drag;background-color:rgba(0,0,0,0.5);width: 30%;height: 10%;position: absolute;right: 0;bottom: 0.5rem;border-radius: 0.4rem;color: #fff;text-align: left">
      <a-tag color="#2db7f5" style="margin-left: 0.5rem">
        <a-icon type="alert"/>
        每日一言:
      </a-tag>
      {{ qinggan }}
      <a-icon type="reload" @click="qingan"/>
      <a @click="openCrx('ctool_chrome')">加载扩展</a>
    </div>
    <div style="float: right;padding-right: 1rem;padding-top: 1.5rem;-webkit-app-region: no-drag;">

      <!--      <a-switch v-model="checkOpen" checked-children="单窗口模式" un-checked-children="多窗口模式" default-checked/>-->
      <!--      <a-button-group>-->
      <a-tooltip placement="left" title="下一张" :get-popup-container="getPopupContainer">
        <a-button type="link" size="small" icon="double-left" @click="add"/>
      </a-tooltip>
      <a-switch v-model="checked" checked-children="自动换图开" un-checked-children="自动换图关" default-checked/>
      <a-tooltip placement="left" title="上一张" :get-popup-container="getPopupContainer">
        <a-button type="link" icon="double-right" @click="ss"/>
      </a-tooltip>
      <!--a-button        <a-button-->
      <!--          v-if="isFullscreen"-->
      <!--          ref="qp"-->
      <!--          ghost-->
      <!--          icon="fullscreen"-->
      <!--          @click="quanping">-->
      <!--        </a-button>-->
      <!--        <a-button-->
      <!--          v-if="!isFullscreen"-->
      <!--          ghost-->
      <!--          icon="fullscreen-exit"-->
      <!--          @click="quanping">-->
      <!--        </a-button>-->
      <!--      </a-button-group>-->
    </div>
    <div class="power">
      问题反馈&nbsp; &nbsp;<a-icon type="mail"/>
      fukaimi@live.cn &nbsp; &nbsp;<a-icon type="wechat"/>
      fukaimi &nbsp; &nbsp;<a-icon type="qq"/>
      534518938
    </div>
    <vue-particles
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
import screenfull from "screenfull";
import {mainMenu} from "@/config/mainMenu";
import subMenu from "@/config/subMenu";
import NavIndex from "@/views/base/common/navIndex";
import storage from "store2";


export default {
  name: "Index",
  components: {NavIndex},
  data() {
    return {
      show: false,
      deadline: Date.now() + 1000 * 10,//10s
      lishi: [],
      checkOpen: true,
      mainMenu: mainMenu,
      subMenu: subMenu,
      jiejiari: {
        date: "2023-05-01",
        daycode: 1,
        weekday: 1,
        cnweekday: "星期一",
        lunaryear: "癸卯",
        lunarmonth: "三月",
        lunarday: "十二",
        info: "节假日",
        start: 0,
        now: 2,
        end: 4,
        holiday: "5月1号",
        name: "劳动节",
        enname: "International Labour Day",
        isnotwork: 1,
        vacation: [],
        remark: [],
        wage: 3,
        tip: "4月29日至5月3日放假调休，共5天。4月23日（星期日）、5月6日（星期六）上班。",
        rest: "5月4日到5月6日请假3天，加上5月7日周日连休可拼9天长假。"
      },
      isFullscreen: false,//是否全屏
      checked: true,
      mi: 300,
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
      autoUrl: 'background:url(https://cn.bing.com/th?id=OHR.Aldeyjarfoss_ZH-CN0106567013_1920x1080.jpg&rf=LaDigue_1920x1080.jpg) no-repeat;'
    }
  },
  created() {
    this.initTool()
    this.init()
    this.qingan()
    this.initLishi()

  },
  mounted() {
    this.initTool()
    this.get(1)
    this.dataRefreh()
    this.initLishi()
  },
  methods: {
    init() {
      this.nowtime = moment(new Date()).format("HH:mm")
      const self = this;
      const params = {
        action: 'GET',
        data: {
          date: moment(new Date()).format('YYYY-MM-DD'),
          url: this.systemConfig.jiejiari
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          this.jiejiari = res.result.data.list[0];
          this.today = moment(this.jiejiari.date).format('DD')
        }
      })

      // this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
      //   if (res.result) {
      //     let result = res.result;
      //     this.today = result.today
      //     this.jq = result.jq
      //     this.nl = result.nl
      //     this.xq = result.xq
      //     this.gzr = result.gzr
      //     this.nly = result.nly
      //   }
      // })
    },
    openCrx(crxName) {

      // let params = []
      // params.push(crxName)
      // this.$ipcInvoke(ipcApiRoute.openCrx, params).then(res => {console.log(res)})
    },
    initLishi() {
      const params = {
        action: 'GET',
        data: {
          date: moment(new Date()).format('MMDD'),
          url: this.systemConfig.lish
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          this.lishi = res.result.data.list;
        }
      })
    },
    initTool() {
      // for (let mainMenuKey in mainMenu) {
      //   for (let subMenuKey in subMenu) {
      //     if (mainMenu[mainMenuKey].id === subMenuKey) {
      //       let subMenu1 = subMenu[subMenuKey]
      //       for (let subMenu1Key in subMenu1) {
      //         mainMenu[mainMenuKey].param.push(subMenu1[subMenu1Key])
      //       }
      //     }
      //   }
      // }
      // console.log(mainMenu)
    },
    openWindow(pageName) {
      if (pageName === 'BaseUpdaterIndex1') {
        const routeUrl = this.$router.resolve(
            {name: pageName}
        )
        // this.$message.success(routeUrl)
        window.open(routeUrl.href, '_blank')
      } else {
          this.$router.push({name: pageName, params: {checkOpen: this.checkOpen}})
      }
    },
    quanping() {
      screenfull.toggle(this.$refs.screen);
      // if (!this.isFullscreen) {
      //   screenfull.request(); // 全屏
      //   this.isFullscreen = true
      // } else {
      //   screenfull.exit(); // 退出全屏
      this.isFullscreen = !this.isFullscreen
      // }
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
      if (n <= 0) {
        this.n = 9
        n = 9
      }
      if (n >= 9) {
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
    dataRefreh() {
      // 计时器正在进行中，退出函数
      if (this.intervalId != null) {
        return
      }
      // 计时器为空，操作
      this.intervalId = setInterval(() => {
        this.nowtime = moment(new Date()).format("HH:mm")
        this.mi--
        if (Number.isInteger(this.mi / 30)) {
          this.qinggan()
        }
        if (this.mi <= 0) {
          if (this.checked) {
            this.add()
          }
          this.mi = 300
        }
      }, 1000)
    },
    // 停止定时器
    clear() {
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
  /*overflow: hidden;*/
  background-size: cover;
}

.divBox {
  /*background:red;*/
  position: absolute;
  left: 50%;
  top: 50%;
  overflow-y: auto;
  height: 95vh;
  transform: translate(-50%, -50%);
}

#app {
  height: 100%;
  text-align: center;
}

.layout-sider {
  border-top: 1px solid #e8e8e8;
  border-right: 1px solid #e8e8e8;
  background-color: #FAFAFA;
  overflow: auto;
}

::-webkit-scrollbar {
  height: 0;
  width: 0;
  color: transparent;
}

.power {
  position: absolute;
  z-index: 99999;
  bottom: 0px;
  background-color: rgba(248, 247, 247, 0.1);
  width: 30rem;
  border-radius: 15px;
  left: 35%
}

.power:hover {
  position: absolute;
  z-index: 99999;
  bottom: 0px;
  background-color: rgba(248, 247, 247, 0.9);
  width: 30rem;
  border-radius: 15px;
  left: 35%
}

</style>
