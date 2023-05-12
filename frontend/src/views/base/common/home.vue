<template>
  <div>
    <nav-div :black="true"/>
    <!--    <div style="position: absolute;z-index: 99999;bottom: 2%;right: 2%">-->
    <!--      <a-button type="primary" shape="circle" icon="home" class="but" @click="black"/>-->
    <!--    </div>-->
  </div>
</template>

<script>
import NavDiv from "@/views/base/common/navDiv";
export default {
  name: "Home",
  components: {NavDiv},
  data(){
    return{

    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    black(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style scoped>
.but{
  width: 4rem;height:4rem;background-color:rgba(250,248,248,0);color: #40A9FF;font-size: 2rem;border: 2px solid #40A9FF
}
.but:hover{
  width: 5rem;height:5rem;background-color:green;color: #fff;font-size: 2rem;border: 2px solid green;
}
</style>
