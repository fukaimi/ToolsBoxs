<template>
  <div style="width: 95%;height: 90%;border: 1px solid #999999;margin: 0 auto;border-radius: 10px;overflow-y: scroll">
    <div style="margin: 2rem auto;text-align: center">
      <a-tag >
        未开房
      </a-tag>
      <a-tag color="#f50" >
        已开房
      </a-tag>
      <a-tag color="#007F00" >
        包月
      </a-tag>
    </div>
    <a-row
      v-for="(item,index) in floors"
      :key="index"
      style="border-bottom: 1px solid #999999;width: 95%;padding: 5px;margin: 0 auto;overflow-x: scroll">
      <a-space>
        {{ item.floorNum }}楼
        <a-dropdown-button v-for="(it,ind) in item.roomDTOS" :key="ind" :type="it.roomUse === '0' ? 'default' : it.roomUse === '1' ? 'danger':'primary'">
          {{ it.roomId }}
          <a-menu v-if="it.roomUse === '0'" slot="overlay">
            <a-menu-item key="3" style="color: green" @click="handleMenuClick(it)">
              <a-icon type="tags"/>
              开房
            </a-menu-item>
          </a-menu>
          <a-menu v-else slot="overlay">
            <a-menu-item key="3" style="color: red" @click="handleMenuClick(it)">
              <a-icon type="poweroff"/>
              退房
            </a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </a-space>
    </a-row>

    <!--    添加 房间-->
    <template>
      <div>
        <a-modal v-model="visible2" title="添加房间" on-ok="handleCancel2">
          <template slot="footer">
            <a-button key="back" @click="handleCancel2">
              关闭
            </a-button>
            <a-button key="submit" type="primary" @click="saveRoom">
              保存
            </a-button>
          </template>
          <a-form :form="roomForm" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
            <a-form-item label="楼层号">
              <a-input
                v-decorator="['floorNum', { rules: [{ required: true, message: '请输入楼层号' }] }]"
                style="width: 100%"
                disabled
              />
            </a-form-item>
            <a-form-item label="楼层编码">
              <a-input
                v-decorator="['floorId', { rules: [{ required: true, message: '请输入楼层编码' }] }]"
                disabled
              />
            </a-form-item>
            <a-form-item label="房间号">
              <a-input
                v-decorator="[
                  'roomId',
                  { rules: [{ required: true, message: '请输入房间号' }] },
                ]"
                placeholder="请输入房间号"
              >
              </a-input>
            </a-form-item>
            <a-form-item label="房间类型">
              <a-select
                v-decorator="['roomType', { rules: [{ required: true, message: '请选择房间类型' }] }]"
                placeholder="请选择房间类型"
              >

                <a-select-option value="标间">
                  标间
                </a-select-option>
                <a-select-option value="双人间">
                  双人间
                </a-select-option>
                <a-select-option value="长租房">
                  长租房
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="金额">
              <a-input-number
                v-decorator="['roomAmount', { rules: [{ required: true, message: '请输入金额' }] }]"
                :min="1"
                :max="10000"
                :precision="2"
                :step="2"
              />
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
    </template>
  </div>
</template>

<script>
import moment from "moment";
import {ipcApiRoute} from "@/api/main";

export default {
  name: "Index",
  data() {
    return {
      loading: false,
      visible: false,
      visible2: false,
      floors: [],
      floorNum: 0,
      roomForm: this.$form.createForm(this, {}),
    }
  },
  mounted() {
    this.queryFloor()
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    showModal2() {
      this.visible2 = true;
    },
    handleOk(e) {
      this.loading = true;
      const params = {
        action: 'POST',
        data: {
          floorNum: this.floorNum,
          hotelId: this.systemConfig.hotelID,
          url: this.systemConfig.hotelUrl + "web/floorController/addFloor"
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.code === 0) {
          this.$message.success("添加成功")
        } else {
          this.$message.error(res.result.message)
        }
      })
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    queryFloor() {//全部查询
      const params = {
        action: 'POST',
        data: {
          hotelId: this.systemConfig.hotelID,
          url: this.systemConfig.hotelUrl + "web/floorController/getList"
        }
      }
      this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
        if (res.result.code === 0) {
          //楼层数据
          this.floors = res.result.data
        } else {
          this.$message.error(res.result.message)
        }
      })
    },
    handleCancel(e) {
      this.visible = false;
    },
    handleCancel2(e) {
      this.visible2 = false;
      this.roomFormRest()
    },
    addRoom(item) {
      this.showModal2()
      setTimeout(()=>{
        this.$nextTick(()=>{
          this.roomForm.setFieldsValue({...item})
        },1000)
      })
    },
    roomFormRest() {
      this.roomForm.resetFields();
    },
    saveRoom() {
      this.roomForm.validateFields((err, values) => {
        if (!err) {
          const params = {
            action: 'POST',
            data: {
              ...values,
              url: this.systemConfig.hotelUrl + "web/roomController/saveRoom"
            }
          }
          this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
            if (res.result.code === 0) {
              //楼层数据
              this.$message.success("添加成功")
              this.queryFloor()
              this.visible2 = false
            } else {
              this.$message.error(res.result.message)
            }
          })
        }
      });
    },
    handleMenuClick(values) {
      this.$confirm({
        content: '确认删除此房间?',
        okText: '删除',
        onOk: () => {
          // return new Promise((resolve, reject) => {
          const params = {
            action: 'POST',
            data: {
              ...values,
              url: this.systemConfig.hotelUrl + "web/roomController/delRoom"
            }
          }
          this.$ipcInvoke(ipcApiRoute.dataConfigOperation, params).then(res => {
            if (res.result.code === 0) {
              //楼层数据
              this.$message.success("已经删除")
              this.queryFloor()
            } else {
              this.$message.error(res.result.message)
            }
          })
          //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          // }).catch(() => console.log('Oops errors!'));
        },
        cancelText: '关闭',
        onCancel: () => {
        },
      });
    },
  },
}
</script>

<style scoped>

</style>
