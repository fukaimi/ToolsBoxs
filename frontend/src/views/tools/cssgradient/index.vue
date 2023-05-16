<template>
  <div>
    <home />
    <div class="baseHeight">
      <iframe id="css" src="https://cssgradient.io/gradient-backgrounds/" frameborder="0" ></iframe>
    </div>
  </div>

</template>


<script>

import Home from "@/views/base/common/home";
export default {
  components: {Home},
  props:{
    src:{
      type:String,
      default: ''
    },
    id:{
      type:String,
      default: ''
    }
  },
  data () {
    return {
      homeShow: false
    }
  },
  created() {
    if(!this.$route.params.checkOpen){
      this.checkOpen = true
    }else {
      this.checkOpen = false
    }
  },
  mounted(){
    /**
     * iframe-宽高自适应显示
     */
    function changeMobsfIframe(){
      const mobsf = document.getElementById('css');
      const deviceWidth = document.body.clientWidth;
      const deviceHeight = document.body.clientHeight;
      mobsf.style.width = (Number(deviceWidth)-0) + 'px'; //数字是页面布局宽度差值
      mobsf.style.height = (Number(deviceHeight)-0) + 'px'; //数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function(){
      changeMobsfIframe()
    }

  },
  methods:{
    setSrc(src) {
      this.src = src
    }
  }
}
</script>
