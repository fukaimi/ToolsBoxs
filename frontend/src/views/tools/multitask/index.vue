<template>
  <div>
    <home/>
    <div class="baseHeight" style="padding: 2rem">
      <a-row>
        <a-col :span="18">
          <a-input-group compact>
            <a-select v-model="reqMe" default-value="GET">
              <a-select-option value="POST">
                POST
              </a-select-option>
              <a-select-option value="GET">
                GET
              </a-select-option>
            </a-select>
            <a-input v-model="url" style="width: 80%" placeholder="测试接口地址" />
          </a-input-group>
        </a-col>
        <a-col :span="6">
          并发数:
          <a-input-number id="inputNumber" v-model="runTaskNums" :min="1" :max="100" />
          <a-button type="danger" @click="run">
            执行
          </a-button>
        </a-col>
      </a-row>
      <a-row style="margin-top: 2rem">
        <a-col :span="12">
          接口参数:
          <a-textarea v-model="inData" placeholder="接口参数" :rows="20" style="height: 60vh" allow-clear />
        </a-col>
        <a-col :span="12">
          接口出参:
          <a-textarea v-model="outData" placeholder="接口出参" :rows="20" style="height: 60vh" allow-clear />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import concurrencyRequest from '@/api/concurrencyRequest'
import Home from "@/views/base/common/home";
export default {
  name: "Index",
  components: {Home},
  mixins:[concurrencyRequest],
  data(){
    return{
      runTaskNums: 3,
      reqMe: 'POST',
      url:'',
      inData:'[ { "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" },{ "depCity": "SZX", "arrCity": "BJS", "num": 0,"date": "20230630" }]',
      outData:''
    }
  },
  methods:{
    run(){
      let eval1 = eval("(" + this.inData + ")");
      concurrencyRequest.concurrencyRequest(this.url, eval1,this.runTaskNums,this.reqMe).then(res => {
        console.log(res);
        this.outData = JSON.stringify(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
