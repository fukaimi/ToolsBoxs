<template>
  <div>
    <home/>
    <div class="baseHeight" style="padding: 1rem">
      <div>
        <a-card title="查询条件" style="border: 1px solid black;border-radius: 0.3rem">
          <a-form layout="inline" :form="form" @submit="handleSubmit" >
            <a-row :gutter="24">
              <a-form-item label="任务名称" :span="12" >
                <a-input
                  v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
                />
              </a-form-item>
              <a-form-item label="任务ID" :span="8" >
                <a-input
                  v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
                />
              </a-form-item>

              <a-form-item style="float: right;">
                <a-button type="primary" html-type="submit">
                  查询
                </a-button>
                <a-divider type="vertical" />
                <a-button type="primary" html-type="submit" @click="showModal">
                  新建任务
                </a-button>
              </a-form-item>
            </a-row>
          </a-form>
        </a-card>
      </div>
      <div style="height: 65vh;padding-top: 1rem;">
        <a-card title="任务列表" style="border: 1px solid black;height: 100%">
          <a-table :columns="columns" :data-source="data">
            <span slot="action" slot-scope="text, record">
              <a-icon type="setting" @click="manageTaskItems(record)"/>
              <a-divider type="vertical" />
              <a-icon type="play-square" style="color: green"/>
              <a-divider type="vertical" />
              <a-icon type="delete" style="color: red" @click="deleteTask(record)"/>
            </span>
          </a-table>
        </a-card>
      </div>

    </div>

    <!--    新增任务弹窗-->
    <template>
      <div>
        <a-modal v-model="taskVisible" title="新增任务" @ok="handleOk" >
          <template slot="footer">
            <a-button key="back" @click="closeTaskModal">
              关闭
            </a-button>
            <a-button key="submit" type="primary" @click="handleOk">
              保存
            </a-button>
          </template>
          <a-form layout="vertical" :form="addTaskForm">
            <a-form-item label="任务名称">
              <a-input
                v-decorator="[
                  'TASK_ROOT_NAME',
                  {
                    rules: [{ required: true, message: '请输入任务名称!' }],
                  }
                ]"
              />
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
    </template>


  </div>
</template>


<script>
import Home from "@/views/base/common/home.vue";
import { v4 as uuidv4 } from 'uuid';
import {ipcApiRoute} from "@/api/main"

const columns = [
  {
    title:'任务ID',
    dataIndex: 'TASK_ROOT_ID',
    key: 'TASK_ROOT_ID'
  },
  {
    title: '任务名称',
    dataIndex: 'TASK_ROOT_NAME',
    key: 'TASK_ROOT_NAME',
  },
  {
    title: '创建时间',
    dataIndex: 'TASK_ROOT_CREATE_TIME',
    key: 'TASK_ROOT_CREATE_TIME',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    TASK_ROOT_ID:'0001',
    TASK_ROOT_NAME:'商保直付S126补传',
    TASK_ROOT_CREATE_TIME:'2023年6月30日10:59:07'
  }
];

export default {
  name: 'AutoRunApi',
  components: {Home},
  props: {},
  data() {
    return {
      data,
      columns,
      form: this.$form.createForm(this, { name: 'coordinated' }),
      addTaskForm: this.$form.createForm(this,{}),
      taskVisible: false,
    }
  },
  mounted() {
    this.queryTask()
  },
  methods: {
    queryTask(){
      const params = {
        action: 'getAllTask'
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(ress => {
        this.data = ress.result
      })
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
    manageTaskItems(record){

    },
    showModal() {
      this.taskVisible = true;
    },
    closeTaskModal(){
      this.taskVisible = false;
    },
    handleOk(e) {
      console.log(e);
      e.preventDefault();
      this.addTaskForm.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          ...fieldsValue,
          TASK_ROOT_ID:uuidv4(),
          TASK_ROOT_CREATE_TIME:new Date()
        };
        const self = this;
        const params = {
          action: 'addTask',
          data: {
            ...values
          }
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
          this.$message.success("新增成功")
          const params = {
            action: 'getAllTask'
          }
          this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(ress => {
            this.data = ress.result
            this.taskVisible = false;
          })
        })

        console.log('Received values of form: ', values);
      });
    },
    deleteTask(record){
      const self = this;
      const params = {
        action: 'delTask',
        data: {
          ...record
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        this.$message.success("删除完成")
        const params = {
          action: 'getAllTask'
        }
        this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(ress => {
          this.data = ress.result
        })
      })
    }
  }
}
</script>
