<template>
  <div id="app" >
    <keep-alive>
      <!--      首页缓存-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  watch: {},
  methods: {}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  height: 100vh;
}

</style>
