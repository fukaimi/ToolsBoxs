<template>
  <a-layout id="app-layout-sider">
    <!--    <div style="-webkit-app-region: drag;" class="div"></div>-->
    <a-layout-sider
      v-model="collapsed"
      theme="light"
      class="layout-sider"
    >
      <!--      <tis></tis>-->
      <div class="logo">
        <img class="pic-logo" src="~@/assets/logo.png">
      </div>
      <a-menu class="menu-item" theme="light" mode="inline" :default-selected-keys="[default_key]" @click="menuHandle">
        <a-menu-item v-for="(menuInfo, index) in menu" :key="index">
          <a-icon :type="menuInfo.icon"/>
          {{ menuInfo.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="layout-content">
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

// import Tis from "@/layouts/Tis";
export default {
  name: 'AppSider',
  // components: {Tis},
  data() {
    return {
      collapsed: true,
      default_key: 'menu',
      current: '',
      menu: {
        'menu': {
          extend: false,
          icon: 'appstore',
          title: '首页',
          pageName: 'index',
          params: {},
        },
        'menu_00': {
          extend: true,
          icon: 'youtube',
          title: '生活',
          pageName: 'Apis',
          params: {},
        },
        'menu_0': {
          extend: true,
          icon: 'bug',
          title: '工具',
          pageName: 'Tools',
          params: {},
        },
        // 'music' : {
        //   icon: 'home',
        //   title: '音乐',
        //   pageName: 'Music',
        //   params: {},
        // },
        'menu_1': {
          extend: true,
          icon: 'home',
          title: '其他',
          pageName: 'Base',
          params: {},
        },
        // 'menu_2' : {
        //   icon: 'desktop',
        //   title: '其它',
        //   pageName: 'Other',
        //   params: {},
        // },
      }
    };
  },
  created() {
  },
  mounted() {
    this.menuHandle()
  },
  methods: {
    menuHandle(e) {
      this.current = e ? e.key : this.default_key;
      const linkInfo = this.menu[this.current]
      console.log('[home] load page:', linkInfo.pageName);
      this.$router.push({name: linkInfo.pageName, params: linkInfo.params})
    },
  },
};
</script>
<style lang="less" scoped>
// 嵌套
#app-layout-sider {
  height: 100%;

  .logo {
    border-bottom: 1px solid #e8e8e8;
  }

  .pic-logo {
    height: 32px;
    //background: rgba(139, 137, 137, 0.2);
    margin: 10px;
  }

  .layout-sider {
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
  }

  .menu-item {
    .ant-menu-item {
      background-color: #fff;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 0 0px !important;
    }
  }

  .layout-content {
    //background-color: #fff;
  }
}
</style>
