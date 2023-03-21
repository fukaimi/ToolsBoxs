<template>
  <div>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="12">
        <div>
          <a-space>
            <b>银行:</b>
            <a-select v-model="bankId" default-value="104" style="width: 10rem" :size="size" @change="handleChange">
              <a-select-option value="104">中国银行</a-select-option>
              <a-select-option value="103">农业银行</a-select-option>
              <a-select-option value="102">工商银行</a-select-option>
              <a-select-option value="105">建设银行</a-select-option>
              <a-select-option value="301">交通银行</a-select-option>
              <a-select-option value="100">中国邮政储蓄银行</a-select-option>
              <a-select-option value="308">招商银行</a-select-option>
              <a-select-option value="310">浦发银行</a-select-option>
              <a-select-option value="309">兴业银行</a-select-option>
              <a-select-option value="303">光大银行</a-select-option>
              <a-select-option value="306">广发银行</a-select-option>
              <a-select-option value="308">平安银行</a-select-option>
              <a-select-option value="304">华夏银行</a-select-option>
              <a-select-option value="305">民生银行</a-select-option>
              <a-select-option value="302">中信银行</a-select-option>
              <a-select-option value="308">上海银行</a-select-option>
              <a-select-option value="308">鄂尔多斯银行</a-select-option>
            </a-select>
            <b>条数:</b>
            <a-input-number id="inputNumber" v-model="value" :size="size" :min="1" :max="100" @change="onChange"/>
          </a-space>
          <a-space style="margin-top: 0.2rem;margin-left:0.3rem;float: left" >
            <b>换行符:</b>
            <a-input v-model="hl" placeholder="默认是回车" :size="size" />
            <a-button type="danger" :size="size" @click="random">
              生成
            </a-button>
            <a-button type="primary" :size="size" @click="onCopy">
              复制
            </a-button>
          </a-space>

        </div>
      </a-col>
      <a-col :span="12">
        <div class="height-1000">
          <a-textarea v-model="outText" placeholder="啥子也没有!!!" :rows="18"/>
        </div>
      </a-col>
    </a-row>

  </div>
</template>

<script>
import randomTools from '@/views/tools/randDataTool/com/randomTools'

export default {
  mixins:[randomTools],
  data() {
    return {
      outText: '',
      value: 1,
      size: 'small',
      bankId: '104',
      hl: ''
    };
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
      this.value = value
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      this.bankId = value
    },
    random(){
      this.outText = ''
      let value = this.value;
      for(value;value > 0;value --){
        this.outText += randomTools.getBankCard(this.bankId) + this.hl + '\n'
      }
    },
    onCopy() {
      this.$copyText(this.outText).then(
          e=>{
            console.log('复制成功：', e);
            this.$message.success("复制成功")
            this.change()
          },
          e=>{
            console.log('复制失败：', e);
            this.$message.error("复制失败")
            this.change()
          }
      )
    },
  },
};
</script>

<style scoped>

</style>
