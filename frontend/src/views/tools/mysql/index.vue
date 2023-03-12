<template>
  <div>
    <div style="text-align: left">
      <a-card title="数据源选择" :bordered="false" size="small">
        <template>
          <a-form-model layout="inline" :model="formsource" >
            <a-form-model-item label="源地址">
              <a-select
                v-model="resourceUrl"
                show-search
                placeholder="选择一个调用地址"
                option-filter-prop="children"
                style="width: 350px"
                :filter-option="filterOption"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
              >
                <a-select-option v-for="item in resourceLis" :key="item.data_id" :value="item.data_value" ><a-icon type="close-circle" @click="delData(item.data_id)" />  <a-tag color="#2db7f5">{{ item.data_desc }}</a-tag>{{ item.data_value }}</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item>
              <a-button
                type="primary"
                html-type="submit"
                @click="showModal"
              >
                新增
              </a-button>
              <a-button
                type="danger"
                @click="post"
              >
                执行
              </a-button>
              <a-button @click="showModal2">口令</a-button>
            </a-form-model-item>
          </a-form-model>
        </template>

        <!--        新增弹窗-->
        <template>
          <div>
            <a-modal v-model="visible" title="新增访问源" >
              <template slot="footer">
                <a-button key="ok" type="danger" @click="handleOk">
                  保存
                </a-button>
              </template>
              <template>
                <a-form-model layout="inline" :model="formInline" >
                  <a-form-model-item label="源地址">
                    <a-input v-model="formInline.data_value" default-value="http://" placeholder="输入源地址" style="width: 350px">
                    </a-input>
                  </a-form-model-item>
                  <a-form-model-item label="源名称">
                    <a-input v-model="formInline.data_desc" placeholder="输入源名称" style="width: 350px">
                    </a-input>
                  </a-form-model-item>
                </a-form-model>
              </template>

            </a-modal>
          </div>
        </template>
      </a-card>
      <!--口令-->
      <template>
        <div>
          <a-modal v-model="visible2" title="口令输入" >
            <template slot="footer">
              <a-button key="back" @click="closeModal">
                确认
              </a-button>
            </template>
            <a-input
              v-model="token"
              placeholder="输输入口令"
            />
          </a-modal>
        </div>
      </template>

      <a-card >

        <a-textarea placeholder="" :row="10" :minRows="10" style="height: 200px" @select="testSelect"/>
        <a-tag color="#f50">即将执行SQL:</a-tag>{{ txt }}
      </a-card>
      <a-card >
        <template slot="title">
          <h3>结果集 <a-button key="export" type="primary" @click="exportExcel">导出当前结果集</a-button></h3>

        </template>
        <template>

          <a-table :columns="columns" :data-source="data" :scroll="{ x: 1300 }" bordered>
          </a-table>
        </template>
      </a-card>

    </div>
  </div>
</template>
<script>
import {ipcApiRoute} from "@/api/main"
import exportExcel from '@/utils/exportExcel'
import ExportExcel from "@/utils/exportExcel";
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
];

const data = [
  {
    key: '1',
    name: '符开敏',
    age: 32,
    address: '家里蹲',
  }
];

export default {
  data() {
    return {
      formsource:{},
      visible2: false,
      token:'',
      data,
      columns,
      txt:'',
      resourceLis:[],
      resourceUrl: '',
      visible: false,
      formInline: {
        data_value: 'http://',
        data_desc: '',
      },
    };
  },
  created() {
      this.initData()
  },
  methods: {
    initData(){
      const self = this;
      const params = {
        action: 'getDataConfigByKey',
        info: {
          data_key: 'MYSQL_API_URL'
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.length == 0) {
          self.$message.error(`没有数据`);
          return;
        }
        this.resourceLis = res.result
        self.$message.success(`完成`);
      })
    },
    exportExcel(){
      ExportExcel(this.columns,this.data,'数据集');
    },
    delData(data_id){
      const self = this;
      const params = {
        action: 'delDataConfig',
        info: {
          data_id: data_id
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          self.$message.success(`删除成功`);
          this.initData()
          this.resourceUrl = ''
          return;
        }
        self.$message.success(`删除失败`);
      })
    },
    testSelect(e){
      let start=e.target.selectionStart;
      let end=e.target.selectionEnd;
      let value= e.target.value;                   console.log(e.target.selectionStart,e.target.selectionEnd,e.target.value);

      let selectVal="";
      if(value&&end!=0){ //防止 没选中
        selectVal=value.slice(start,end);
      }
      console.log(selectVal)
      this.txt=selectVal;
    },
    showModal() {
      this.formInline = {
        data_value: 'http://',
        data_desc: '',
      }
      this.visible = true;
    },
    closeModal(){
      this.visible2 = false;
      this.visible = false;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk(e) {
      console.log(e);
      this.handleSubmit(e)
      this.visible = false;
    },
    handleSubmit(e) {
      console.log(this.formInline);
      if (!this.formInline.data_desc){
        return
      }
      const self = this;
      const params = {
        action: 'addDataConfig',
        info: {
          ...this.formInline,
          data_key: 'MYSQL_API_URL',
          data_memo: 'mysql数据源',
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result) {
          self.$message.success(`新增成功`);
          this.initData()
          return;
        }
        self.$message.success(`新增失败`);
      })
    },
    post(){
      const self = this;
      const params = {
        action: 'POST',
        data: {
          url: this.resourceUrl,
          sqlStr: this.txt,
          token: this.token,
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.code === 0) {
          self.$message.success(`执行成功`);
          this.columns = []
          let data1 = res.result.data;
          let data1Element = {}
          if (data1){
            data1Element = data1[0];
            for(let key of Object.keys(data1Element )){
              console.log(key);
              let column = {
                title: key,
                dataIndex:key
              }
              this.columns.push(column)
            }
            this.data = data1
          }
          return;
        }
        self.$message.error(res.result.message);
      })
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
          option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style>

</style>
