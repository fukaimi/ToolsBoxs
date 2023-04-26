<template>
  <div></div>
</template>

<script>
export default {
  name: "Vuetemplate",
  data(){
    return{
      vuestr:''
    }
  },
  methods:{
    getVueTemplate(){
      let str = '<template>\n' +
          '  <hsa-adaptive-container>\n' +
          '    <hsa-adaptive-pane>\n' +
          '     \n' +
          '    </hsa-adaptive-pane>\n' +
          '  </hsa-adaptive-container>\n' +
          '</template>\n' +
          '<script>\n' +
          '// 引入分页组件\n' +
          'import layoutMixin from \'@ncp-web/hsa-ui/lib/mixins/adaptive-layout-mixin\'\n' +
          '\n' +
          'export default {\n' +
          '  mixins: [layoutMixin],\n' +
          '  components: {},\n' +
          '  data() {\n' +
          '    return {\n' +
          '\n' +
          '    }\n' +
          '  },\n' +
          '  created() {\n' +
          '\n' +
          '  },\n' +
          '  computed: {},\n' +
          '  methods: {}\n' +
          '}\n' +
          '</'+'script>\n'+
        '<style lang="scss" scoped></style>'
      this.blac(str)
    },
    getTable(){
      let str = '<ta-table bordered \n' +
          '\t:haveSn="true" \n' +
          '\t:showOverflowTooltip="true"  \n' +
          '\t:scroll="{x:1100,y:385}" \n' +
          '\t:rowSelection="rowSelection" \n' +
          '\t:columns="columns" \n' +
          '\t:dataSource="data"\n' +
          '    :class="{\'no-padding\':true}"\n' +
          '>\n' +
          ' <span slot="action" slot-scope="text, record"><ta-table-operate :operate-menu="operateMenu" /></span>\n' +
          '</ta-table>\n' +
          '\n' +
          '//以下就是JS部分\n' +
          ' operateMenu: [\n' +
          '        {\n' +
          '          name: \'delete\',\n' +
          '          style: \'color:#1b65b9;width:100px\',\n' +
          '          onClick: (record) => {\n' +
          '          }\n' +
          '        }\n' +
          '      ],\n' +
          'data:[],\n' +
          'columns:[]'
      this.blac(str)
    },
    blac(str){
      this.$emit('setStr',str)
    }
  }
}
</script>

<style scoped>

</style>
