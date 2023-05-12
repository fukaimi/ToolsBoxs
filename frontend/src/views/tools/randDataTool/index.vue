<template>
  <div>
    <home/>
    <div class="baseHeight">
      <!--    <a-radio-group v-model="mode" :style="{ marginBottom: '8px' }">-->
      <!--      <a-radio-button value="top">-->
      <!--        Horizontal-->
      <!--      </a-radio-button>-->
      <!--      <a-radio-button value="left">-->
      <!--        Vertical-->
      <!--      </a-radio-button>-->
      <!--    </a-radio-group>-->
      <a-tabs
        default-active-key="1"
        :tab-position="mode"
        :style="{ height: '50rem' }"
        @prevClick="callback"
        @nextClick="callback"
      >
        <a-tab-pane v-for="item in tabs" :key="item.key" :tab="item.title">
          <bank v-if="item.path === 'banktool'"></bank>
          <name v-if="item.path === 'nametool'"></name>
          <idcard v-if="item.path === 'idcardtool'"></idcard>
          <phone v-if="item.path === 'phonetool'"></phone>
          <generator-credit-code v-if="item.path === 'gencodetool'"></generator-credit-code>
          <generator-org-code v-if="item.path === 'genorgcodetool'"></generator-org-code>
        </a-tab-pane>

      </a-tabs>
    </div>
  </div>
</template>
<script>
import bank from './bank'
import name from './name'
import idcard from './idcard'
import phone from './phone'
import generatorCreditCode from './generatorCreditCode'
import generatorOrgCode from './generatorOrgCode'
import Home from "@/views/base/common/home";

export default {
  components: {Home, bank, name, idcard, phone, generatorCreditCode, generatorOrgCode},
  data() {
    return {
      mode: 'top',
      tabs: [
        {
          key: '1',
          title: '银行账号',
          path: 'banktool'
        }, {
          key: '2',
          title: '姓名',
          path: 'nametool'
        }, {
          key: '3',
          title: '身份证',
          path: 'idcardtool'
        }, {
          key: '4',
          title: '手机号码',
          path: 'phonetool'
        }, {
          key: '5',
          title: '统一社会信用',
          path: 'gencodetool'
        }, {
          key: '6',
          title: '组织机构代码',
          path: 'genorgcodetool'
        },
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
