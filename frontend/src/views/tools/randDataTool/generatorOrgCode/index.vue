<template>
  <div>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="12">
        <div>
          <a-space>
            <b>条数:</b>
            <a-input-number id="inputNumber" v-model="value" :size="size" :min="1" :max="100" @change="onChange"/>
            <b>换行:</b>
            <a-input v-model="hl" placeholder="默认是回车" :size="size" style="width: 10rem"/>
          </a-space>
          <a-space style="margin-top: 0.2rem;margin-left:0.3rem;" >
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
        this.outText += randomTools.generatorOrgCode() + this.hl + '\n'
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
