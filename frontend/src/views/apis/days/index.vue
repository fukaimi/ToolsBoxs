<template>
  <div >
    <home/>
    <img :src="src" style="padding-top: 3rem" />
    <a-button size="small" style="position: absolute;z-index: 9999;right: 1rem;top: 1rem" @click="downs">下载</a-button>
  </div>
</template>

<script>
import Home from "@/views/base/common/home";
export default {
  name: "Index",
  components: {Home},
  data(){
    return{
      src:''
    }
  },
  created() {
    this.init()
  },
  methods:{
    init(){
      this.src = this.systemConfig.everyDay60s
    },
    downloadIamge(imgsrc, name) { //下载图片地址和图片名
      var image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        var canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        var a = document.createElement("a"); // 生成一个a元素
        var event = new MouseEvent("click"); // 创建一个单击事件
        a.download = name || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = imgsrc;
    },
    downs() {
      this.downloadIamge(this.src, 'fukaimin');
    }
  }
}
</script>

<style scoped>

</style>
