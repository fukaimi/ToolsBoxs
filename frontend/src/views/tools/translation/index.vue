<template>
  <div>
    <home/>
    <div class="baseHeight">
      <a-tabs type="card" @change="callback">
        <a-tab-pane v-for="(item,index) in menu" :key="index" :tab="item.tab">
          <youdao v-if="item.key === 'youdao'"></youdao>
          <microsoft v-if="item.key === 'microsoft'"></microsoft>
          <tencent v-if="item.key === 'tencent'"></tencent>
          <google v-if="item.key === 'google'"></google>
          <iciba v-if="item.key === 'iciba'"></iciba>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import templateindex from './template/index'
import youdao from "@/views/tools/translation/template/youdao";
import microsoft from "@/views/tools/translation/template/microsoft";
import tencent from "@/views/tools/translation/template/tencent";
import google from "@/views/tools/translation/template/google";
import iciba from "@/views/tools/translation/template/iciba";
import Home from "@/views/base/common/home";

const menu = [
  {
    key: 'youdao',
    tab: '有道翻译',
    src: 'https://fanyi.youdao.com/index.html#/'
  }, {
    key: 'microsoft',
    tab: '微软翻译',
    src: 'https://cn.bing.com/translator?ref=TThis&text=&from=en&to=zh-Hans'
  }, {
    key: 'tencent',
    tab: '腾讯翻译',
    src: 'https://fanyi.qq.com/'
  }, {
    key: 'google',
    tab: '谷歌翻译',
    src: 'https://fanyi.baidu.com/'
  }, {
    key: 'iciba',
    tab: '金山词霸',
    src: 'https://www.iciba.com/fy'
  }]
export default {
  components: {Home, youdao, microsoft, tencent, google, iciba},
  data() {
    return {
      menu
    };
  },
  mounted() {
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
