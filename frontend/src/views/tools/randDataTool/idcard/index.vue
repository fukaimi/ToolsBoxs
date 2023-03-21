<template>
  <div>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="12">
        <div>
          <a-space style="margin-top: 0.2rem;margin-left:0.3rem;float: left">
            <b>地区:</b>
            <a-cascader
              v-model="selectedValues"
              :fieldNames="{ label: 'name', value: 'code', children: 'children' }"
              :options="areaData"
              placeholder="请选择"
              :size="size"
              @change="onChange"
            />
          </a-space>
          <a-space style="margin-top: 0.2rem;margin-left:0.3rem;float: left">
            <b>生日:</b>
            <a-date-picker v-model="birDate" :default-value="moment('2000/01/01', dateFormat)" :format="dateFormat" :size="size" style="width: 8rem" />
            <b>条数:</b>
            <a-input-number id="inputNumber" v-model="value" :size="size" :min="1" :max="100" />
          </a-space>
          <a-space style="margin-top: 0.2rem;margin-left:0.3rem;float: left">
            <b>换行符:</b>
            <a-input v-model="hl" placeholder="默认是回车" :size="size"/>
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
import areaData from "@/views/tools/randDataTool/com/citys";
import randomTools from '@/views/tools/randDataTool/com/randomTools'
import moment from 'moment';

export default {
  mixins: [randomTools],
  data() {
    return {
      moment,
      dateFormat:'YYYYMMDD',
      //地区数据
      areaData,
      //选择的数据
      selectedValues: [],
      outText: '',
      value: 1,
      size: 'small',
      bankId: '104',
      hl: '',
      area:'',
      birDate: '20200101'
    };
  },
  watch: {
    defaultValue(newValue) {
      if (newValue.length) {
        this.selectedValues = newValue;
      } else {
        this.selectedValues = [];
      }
    },
  },
  methods: {
    onChange(value) {
      console.log('changed', value);
      this.selectedValues = value
      this.area = value[2]
    }
    ,
    handleChange(value) {
      console.log(`selected ${value}`);
      this.bankId = value
    }
    ,
    random() {
      this.outText = ''
      let value = this.value;
      for (value; value > 0; value--) {
        this.outText += randomTools.getIdCard(this.area,this.birDate) + this.hl + '\n'
      }
    }
    ,
    onCopy() {
      this.$copyText(this.outText).then(
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
    }
    ,
  }
  ,
};
</script>

<style scoped>

</style>
