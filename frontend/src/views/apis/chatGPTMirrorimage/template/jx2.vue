<template>
  <div>
    <iframe id="google" src="https://chat.binjie.site:7777" frameborder="0" ></iframe>
  </div>
</template>


<script>
export default {
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
    }
  },
  mounted(){
    /**
     * iframe-宽高自适应显示
     */
    function changeMobsfIframe(){
      const mobsf = document.getElementById('google');
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
