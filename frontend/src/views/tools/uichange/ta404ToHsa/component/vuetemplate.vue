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
      let str = '<ncp-table\n' +
          '  :columnDefs="columns"\n' +
          '  :data="datas"\n' +
          '  :enablePagination="true"\n' +
          '  :paginationConfig="paginationConfig"\n' +
          '  :useExternalPagination="true"\n' +
          '  @paginationConfigChange=""\n' +
          '  v-loading="false"\n' +
          '  :selectType="\'single\'"\n' +
          '  @rowDblClick="dialogDblClick"\n' +
          '  ref="table"\n' +
          '></ncp-table>\n' +
          '\n' +
          '//js部分\n' +
          'const paginationConfig = {pageSize: 10,pageNumber: 1,total: 0}\n' +
          '\n' +
          'dialogDblClick(row) {\n' +
          '  console.log(row)\n' +
          '}'
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
