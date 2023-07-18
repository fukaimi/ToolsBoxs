<template>
  <div>
    <!--    <home/>-->
    <a-row>
      <a-icon type="sound" />:<font style="color: red">查询需要填写员工编号,多条就诊信息时候需要填写就诊编号!</font>
    </a-row>
    <div class="baseHeight" style="">
      <a-row style="height: 95vh;overflow-y: auto">
        <a-card>
          <span slot="title" style="color: #1890FF;font-weight:bolder">查询条件</span>
          <span slot="extra" href="#">
            <a-space>
              <a-button type="dashed" icon="setting" style="color:#1890FF;" @click="showModal">
                代理地址维护
              </a-button>
            </a-space>
          </span>
          <a-form layout="inline" :form="form">
            <a-form-item label="证件号码">
              <a-input
                v-decorator="[
                  'certno',
                  { rules: [{ required: true, message: '请输入证件号码!' }] },
                ]"
                placeholder="证件号码"
              >
                <a-icon slot="prefix" type="credit-card" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item label="入院/就诊日期">
              <a-date-picker
                v-decorator="[
                  'begntime',
                  { rules: [{ required: true, message: '请输入证件号码!' }] },
                ]"
                placeholder="请输入入院/就诊日期"
              />

            </a-form-item>
            <a-form-item label="就诊ID">
              <a-input
                v-decorator="['mdtrtId']"
                placeholder="请输入就诊ID"
              >
                <a-icon slot="prefix" type="credit-card" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item label="员工编号">
              <a-input
                v-decorator="[
                  'author',
                  { rules: [{ required: true, message: '请输入员工编号!' }] },
                ]"
                placeholder="请输入员工编号"
              >
                <a-icon slot="prefix" type="credit-card" style="color:rgba(0,0,0,.25)"/>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" style="float: right" size="small" @click="query">
                查询
              </a-button>
            </a-form-item>
          </a-form>
        </a-card>
        <a-card>
          <span slot="title" style="color: #1890FF;font-weight: bolder">查询结果</span>
          <span slot="extra" href="#">
            <a-space>
              <a-tooltip
                placement="left"
                title="适用场景:有推送任务但是就诊信息在保险系统又未接受到的情况或推送失败的情况下使用!"
                :get-popup-container="getPopupContainer">
                <a-button type="primary" ghost size="small" @click="del('S107')">
                  就诊信息(S107)重推
                </a-button>
              </a-tooltip>
              <a-tooltip
                placement="left"
                title="适用场景:就诊信息已经推送成功,但是长时间保险系统未接受到数据或者费用明细推送推送失败的情况"
                :get-popup-container="getPopupContainer">
                <a-button type="primary" ghost size="small" @click="del('S124')">
                  费用明细(S124)重推
                </a-button>
              </a-tooltip>
              <a-tooltip placement="left" :get-popup-container="getPopupContainer">
                <span
                  slot="title"
                  style="color: red;">该功能会重新推送就诊信息和费用明细,如果已经推送成功请勿使用,否则可能造成数据的重复推送!</span>
                <a-button type="danger" ghost size="small" @click="del('S107ANDS124')">
                  全部重新推送
                </a-button>
              </a-tooltip>
            </a-space>
          </span>
          <a-row>
            <a-col :span="4"><span style="font-weight: bolder;">证件号码:</span>{{ psnBasInfoDTO.certno }}</a-col>
            <a-col :span="4"><span style="font-weight: bolder;">姓名:</span>{{ psnBasInfoDTO.psnName }}</a-col>
            <a-col :span="4"><span style="font-weight: bolder;">个人编号:</span>{{ psnBasInfoDTO.psnNo }}</a-col>
            <a-col :span="4"><span style="font-weight: bolder;">就诊ID:</span>{{ cidsJobDTO.mdtrtId }}</a-col>
            <a-col :span="4"><span style="font-weight: bolder;">推送状态:</span><span>
              <a-tag v-if="cidsJobDTO.dataStatus == -1" color="#f50">推送失败</a-tag>
              <a-tag v-if="cidsJobDTO.dataStatus == 0" color="#2db7f5"><a-icon type="loading"/>推送中</a-tag></span>
              <a-tag v-if="cidsJobDTO.dataStatus == 8" color="#2db7f5"><a-icon type="loading"/>还未完成结算(30分钟后刷新状态)</a-tag></span>
              <a-tag v-if="cidsJobDTO.dataStatus == 1" color="#87d068">
                推送完成
              </a-tag>
            </a-col>
            <a-col :span="4"><span style="font-weight: bolder;">任务创建时间:</span>{{ cidsJobDTO.createTime }}</a-col>
          </a-row>
        </a-card>
        <template>
          <div class="card-container">
            <a-tabs type="card">
              <a-tab-pane key="1">
                <span slot="tab">就诊信息(S107)推送情况
                  <a-button type="primary" ghost size="small" @click="exportExcel(1)">
                    导出
                  </a-button>
                </span>
                <a-table :columns="columns" :data-source="s107s" :scroll="{ x: 1500, y: 300 }" size="small">
                  <span slot="flagValue" slot-scope="flagValue"><a-tag
                    v-if="flagValue == -1"
                    color="#f50">推送失败</a-tag><a-tag
                      v-if="flagValue == 1"
                      color="#87d068">推送完成</a-tag></span>
                  <span slot="reqData" slot-scope="text" ><a-tag color="#2db7f5"><a-icon type="eye" @click="showJson(text)"/></a-tag>{{ text }}</span>
                  <span slot="resData" slot-scope="text" ><a-tag color="#2db7f5"><a-icon type="eye" @click="showJson(text)"/></a-tag>{{ text }}</span>
                </a-table>
              </a-tab-pane>
              <a-tab-pane key="2" >
                <span slot="tab"> 费用明细(S124)推送情况
                  <a-button type="primary" ghost size="small" @click="exportExcel(2)">
                    导出
                  </a-button>
                </span>
                <a-table :columns="columns" :data-source="s124s" :scroll="{ x: 1500, y: 300 }" size="small">
                  <span slot="flagValue" slot-scope="flagValue"><a-tag
                    v-if="flagValue == -1"
                    color="#f50">推送失败</a-tag><a-tag
                      v-if="flagValue == 1"
                      color="#87d068">推送完成</a-tag></span>
                  <span slot="reqData" slot-scope="text" ><a-tag color="#2db7f5"><a-icon type="eye" @click="showJson(text)" /></a-tag>{{ text }}</span>
                  <span slot="resData" slot-scope="text" ><a-tag color="#2db7f5"><a-icon type="eye" @click="showJson(text)"/></a-tag>{{ text }}</span>
                </a-table>
              </a-tab-pane>
            </a-tabs>
          </div>
        </template>
      </a-row>
      <a-modal v-model="visible" title="请输入代理地址" ok-text="确认" cancel-text="取消" @ok="hideModal">
        <a-input v-model="url" />
      </a-modal>

      <a-modal v-model="visible2" title="报文详情" ok-text="确认" cancel-text="取消" width="1000px" @ok="hideModal">
        <!--      <a-input v-model="jsonStr" autosize type="textarea" placeholder="Please input"/>-->
        <b-code-editor
          ref="editor"
          v-model="jsonStr2"
          :auto-format="true"
          :smart-indent="true"
          theme="dracula"
          :indent-unit="4"
          :line-wrap="true"
          :lint="false">
        </b-code-editor>
      </a-modal>
    </div>
  </div>
</template>


<script>
//引入相对应的api
import {MbsToOther} from '@/views/tools/cids/api/cidsRequestConfig.js'
import NavIndex from "@/views/base/common/navIndex.vue";
import moment from 'moment';
import {ipcApiRoute} from "@/api/main"
import aes from '@/api/aes'
import ExportExcel from "@/utils/exportExcel";
import Home from "@/views/base/common/home.vue";


const url = 'http://'//localhost:8989/adps/api/cidsApi/MbsToOther'

const columns = [
  {title: '主键', width: 50, dataIndex: 'indexId', key: 'indexId'},
  {title: '推送状态', dataIndex: 'flagValue', key: 'flagValue', width: 50, scopedSlots: {customRender: 'flagValue'}},
  {title: '医保报文', ellipsis: true, width: 150, dataIndex: 'reqData', key: 'reqData', scopedSlots: {customRender: 'reqData'}},
  {title: '保险系统应答报文', ellipsis: true, dataIndex: 'resData', key: 'resData', width: 150, scopedSlots: {customRender: 'resData'}},
  {title: '备注', ellipsis: true, dataIndex: 'exceptionMsg', key: 'exceptionMsg', width: 150},
  {title: '请求日期', dataIndex: 'createTime', key: 'createTime', width: 50}
];

const s107s = [];
const s124s = [];


export default {
  name: 'Cids',
  components: {Home, NavIndex},
  props: {},
  data() {
    return {
      jsonStr2:'',
      visible2:false,
      visible: false,
      form: this.$form.createForm(this, {certno: '532326199303191016', author: '534518938'}),
      s107s,
      s124s,
      columns,
      url: url,
      psnBasInfoDTO: {certno: '', psnName: '', psnNo: ''},
      cidsJobDTO: {createTime: null, mdtrtId: '', dataStatus: 6},
      cidsData: {},
      isUpdate: false
    }
  },
  mounted() {
    // this.initScene()
  },
  methods: {
    moment,
    initScene() {//场景初始化
      const self = this;
      const params = {
        action: 'getSceneTemp',
        info: {
          scene: 'cidsUrl'
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.length === 0) {
          return;
        }
        this.url = res.result[0].alldata
        this.isUpdate = true
      })
    },
    kztChange() {
      let info = {
        scene: "cidsUrl",
        memo: '商保直付求情地址',
        alldata: this.url
      }
      if (this.isUpdate) {//更新
        const params = {
          action: 'updateSceneTemp',
          info: info
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          if (res.result) {
            this.visible = false;
            this.isUpdate = true
            return;
          }
          this.$message.error("更新失败")
        })
      } else {//新增
        const params = {
          action: 'addSceneTemp',
          info: info
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          if (res.result) {
            this.visible = false;
            this.isUpdate = true
            return;
          }
          this.$message.error("添加失败")
        })
      }

    },
    showJson(text){
      this.visible2 = true
      this.jsonStr2 = text
    },
    hideModal2() {
      this.visible2 = false
      this.jsonStr2 = ''
    },
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.kztChange()
    },
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
    callback(key) {
      console.log(key);
    },
    exportExcel(i) {
      if (i === 1) {
        ExportExcel(this.columns, this.s107s, Date.parse(new Date()) + '.xlsx');
      }
      if (i === 2) {
        ExportExcel(this.columns, this.s124s, Date.parse(new Date()) + '.xlsx');
      }
    },
    query() {
      this.psnBasInfoDTO = {certno: '', psnName: '', psnNo: ''}
      this.cidsJobDTO = {createTime: null, mdtrtId: '', dataStatus: 0}
      this.cidsData = {}
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          //数据瓶装
          let source = values.author + moment(new Date()).format("YYYYMMDDHH") + 'cids'
          // this.$message.success(source)
          let md5Str = aes.md5(source).substr(8, 16)
          // this.$message.success(md5Str)
          // this.$message.success(aes.encrypt(JSON.stringify(values), md5Str))
          let param = {
            code: 'QUERY',
            author: values.author,
            cidsOutApiDTO: aes.encrypt(JSON.stringify(values), md5Str)
          }
          // const self = this;
          // const params = {
          //   action: 'POST',
          //   data: {
          //     ...param,
          //     url: this.url
          //   }
          // }
          // this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          MbsToOther(param).then(res => {
            if(res.code === -1){
              let message = res.message;
              if (message.indexOf("Index") !== -1) {
                this.$message.error("当前日期不存在有效的就诊信息,请检查输入")
                return
              }
              this.$message.error(res.message)
              return;
            }
            let result = res
            this.$message.success(result.message)
            this.cidsData = JSON.parse(aes.decrypt(result.data.replace(/\s*/g, ''), md5Str));
            this.psnBasInfoDTO = this.cidsData.psnBasInfoDTO
            this.cidsJobDTO = this.cidsData.cidsJobDTO
            this.s107s = this.cidsData.s107s
            this.s124s = this.cidsData.s124s
          }).catch(err=>{
            let message = err.message;
            if (message.indexOf("Index") !== -1) {
              this.$message.error("当前日期不存在有效的就诊信息,请检查输入")
              return
            }
            this.$message.error(err.message)
          })
        }
      });
    },
    del(item) {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          //数据瓶装
          let source = values.author + moment(new Date()).format("YYYYMMDDHH") + 'cids'
          // this.$message.success(source)
          let md5Str = aes.md5(source).substr(8, 16)
          // this.$message.success(md5Str)
          // this.$message.success(aes.encrypt(JSON.stringify(values), md5Str))
          if (!this.cidsJobDTO) {
            this.$message.error("数据异常,请查询后重试")
            return
          }
          if (!this.cidsJobDTO.mdtrtId) {
            this.$message.error("数据异常,就诊ID异常,请查询后重试")
            return
          }
          // if (this.cidsJobDTO.dataStatus == 0 ) {
          //   this.$message.error("正在推送中的数据不允许进行重推,请等待推送结束后再进行操作!")
          //   return
          // }
          values.mdtrtId = this.cidsJobDTO.mdtrtId
          let param = {
            code: item,
            author: values.author,
            cidsOutApiDTO: aes.encrypt(JSON.stringify(values), md5Str)
          }
          const self = this;
          const params = {
            action: 'POST',
            data: {
              ...param,
              url: this.url
            }
          }
          // this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          MbsToOther(param).then(res => {
            if(res.code === -1){
              this.$message.error(res.message)
              return;
            }
            let result = res
            this.query()
          }).catch(err=>{
            let message = err.message;
            this.$message.error(err.message)
          })
        }
      });
    },
  }
}
</script>
<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}

.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 50px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
/deep/ html, body, #app {
  height: 100%;
}

/deep/ .CodeMirror {
  font-family: monospace;
  height: 50em;
  color: black;
  direction: ltr;

}

/deep/ textarea {
  border: none !important;
  resize: none;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
