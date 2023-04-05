<template>
  <div>
    <iframe id="yuodao" src="https://fanyi.youdao.com/index.html#/" frameborder="0" ></iframe>
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
      const mobsf = document.getElementById('yuodao');
      const deviceWidth = document.body.clientWidth;
      const deviceHeight = document.body.clientHeight;
      mobsf.style.width = (Number(deviceWidth)-240) + 'px'; //数字是页面布局宽度差值
      mobsf.style.height = (Number(deviceHeight)-64) + 'px'; //数字是页面布局高度差
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
