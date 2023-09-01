//系统接口地址
const systemConfig = {
    getTimestamp:'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp', //淘宝时间接口
    qinggan:'https://v.api.aa1.cn/api/api-wenan-qg/index.php?aa1=json',//情感每日一言
    nongli:'https://v.api.aa1.cn/api/nl/',//nongli
    everyDay60s: 'https://api.qqsuu.cn/api/dm-60s?apiKey=e18b80066bac37152264225b73be4471',
    oilprice:'https://api.qqsuu.cn/api/dm-oilprice',
    jiejiari: 'https://api.qqsuu.cn/api/dm-jiejiari',
    lish:'https://api.qqsuu.cn/api/dm-lishi',//历史
    webSocketUrl:'ws://localhost:8888/hotel/websocket/',
    hotelUrl:'http://localhost:8888/hotel/',
    hotelID:'97dce59722ead87b30203c294ebd3790'
}
export { systemConfig }
