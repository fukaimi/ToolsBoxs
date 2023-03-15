<template>
  <div style="overflow-y:auto">
    <a-radio-group v-model="mode" style="position: absolute;top: 1rem;right: 1rem;z-index: 99999999">
      <a-radio-button value="top">
        横向
      </a-radio-button>
      <a-radio-button value="left">
        纵向
      </a-radio-button>
    </a-radio-group>
    <a-tabs
      default-active-key="1"
      :tab-position="mode"
      :style="{ height: '600px' }"
      @prevClick="callback"
      @nextClick="callback"
    >
      <a-tab-pane v-for="item in tabs " :key="item.key" :tab="item.title">
        <jsontool v-if="item.path === 'jsontool'" jsontool></jsontool>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import jsontool from './component/jsontool'

export default {
  components: {jsontool},
  data() {
    return {
      mode: 'top',
      tabs: [
        {
          key: '1',
          title: 'JSON工具',
          path: 'jsontool'
        }
      ]
    };
  },
  methods: {
    callback(val) {
      console.log(val);
    },
  },
};
</script>
