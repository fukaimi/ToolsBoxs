<template>
  <div id="app"><template>
    <div>
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane v-for="item in menu" :key="item.index" :tab="item.title">
          <montage v-if="item.key === 'montage'"></montage>
        </a-tab-pane>
      </a-tabs>
    </div>
  </template></div>
</template>

<script>
import montage from "@/views/tools/txtTool/part/montage";

export default {
  components:{
    montage
  },
  data() {
    return {
      menu:[
        {
          title: '文本拼接',
          index:'1',
          key:'montage'

        }
      ]
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
}
</script>

<style scoped>
html, body, #app {
  height: 100%;
}
</style>
