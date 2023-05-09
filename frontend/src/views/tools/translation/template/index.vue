<template>
  <div>
    <iframe :id="id" :src="src" frameborder="0" ></iframe>
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
    function changeMobsfIframe(id){
      const mobsf = document.getElementById(id);
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
