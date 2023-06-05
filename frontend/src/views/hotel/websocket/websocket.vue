<template>
  <div></div>
</template>

<script>
export default {
  name: "Websocket",
  data(){
    return{

    }
  },
  created() {
  },
  methods:{
    StartWebSocket(wsUri) {
    const websocket = new WebSocket(this.systemConfig.webSocketUrl);
  websocket.onopen = function(evt) {
    onOpen(evt)
  };
  websocket.onclose = function(evt) {
    onClose(evt)
  };
  websocket.onmessage = function(evt) {
    onMessage(evt)
  };
  websocket.onerror = function(evt) {
    onError(evt)
  };
}
  }
}
</script>

<style scoped>

</style>
