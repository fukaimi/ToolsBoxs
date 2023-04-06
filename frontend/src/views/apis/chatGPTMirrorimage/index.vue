<template>
  <a-tabs default-active-key="chatgptmirror">
    <a-tab-pane v-for="item in lis" :key="item.key" >
      <span slot="tab">
        <a-icon type="database" />
        {{ item.title }}
      </span>
      <index1 v-if="item.key === 'chatgptmirror'"></index1>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import index1 from "@/views/apis/chatGPTMirrorimage/index1";

const lis = [
  {
    key: 'chatgptmirror',
    title: '镜像1'
  }
]

export default {
  name: "Index",
  components:{index1},
  data(){
    return{
      lis
    }
  }
}
</script>

<style scoped>

</style>
