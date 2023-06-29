<template>
  <div>
    <home/>
    <div class="baseHeight" style="padding: 1rem">
      <a-row>
        <div style="color: #05C1FF;font-size: 1rem">输入MyBatis Log 日志:</div>
      </a-row>
      <a-row>
        <a-col :span="23">
          <a-textarea
            v-model="inData"
            placeholder="请输入MyBatis Log 日志信息"
            class="textarea"
            :rows="8"
            :style="{height: step + 'px' , color:red}"/>
        </a-col>
        <a-col :span="1">
          <a-slider
            v-model="step"
            :min="150"
            :max="step + 10"
            vertical
            :style="{height: step + 'px'}"
            :reverse="true"/>
        </a-col>
      </a-row>
      <a-row style="float: right;padding: 1rem">
        <a-button type="primary" @click="build">
          解析
        </a-button>
        <a-button @click="onCopy">复制</a-button>
        <a-button type="danger" @click="onCopy">
          清空
        </a-button>
      </a-row>
      <a-row>
        <div style="color: #499d1e;font-size: 1rem">解析为可执行SQL:</div>
        <a-textarea v-model="outData" placeholder="SQL信息" class="textareaOut" :rows="8"/>
      </a-row>
    </div>
  </div>
</template>


<script>
import Home from "@/views/base/common/home.vue";
import mybatisSql from "@/api/mybatisSql";

export default {
  name: 'MybatisSql',
  components: {Home},
  props: {},
  data() {
    return {
      inputValue: 1,
      step: 150,
      inData: '',
      outData: ''
    }
  },
  mounted() {
  },
  methods: {
    build() {
      if (!this.inData) {
        this.$message.error("请填写日志内容")
        return
      }
      this.outData = mybatisSql.mybatisBuild(this.inData)
    },
    onClose() {
      this.inData = ''
      this.outData = ''
    },
    onCopy() {
      this.$copyText(this.outData).then(
          e => {
            console.log('复制成功：', e);
            this.$message.success("复制成功")
            this.change()
          },
          e => {
            console.log('复制失败：', e);
            this.$message.error("复制失败")
            this.change()
          }
      )
    },
  }
}
</script>
<style scoped>
.textarea {
  background: #000000;
  color: #009c50;
  font-size: 1rem;
  font-weight: bolder;
  font-family: 幼圆;
  border-radius: 0.5rem;
}

.textareaOut {
  background: #e6e6e6;
  color: #f41616;
  font-size: 1rem;
  font-weight: bolder;
  font-family: 幼圆;
  border-radius: 0.5rem;
}
</style>
