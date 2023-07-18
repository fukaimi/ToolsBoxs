//网络请求地址 例如: http://wwww.baidu.com  本地开发时，可直接填写后端测试接口地址(需要设置浏览器允许跨域请求，或后端设置Cross-origin允许跨域)。

//本地开发时，也可使用默认空字符串，但需要在 vue.config.js 文件内设置代理地址

//打包生产时，可填写空字符串，默认使用页面部署所在域名(ip)和端口
let baseConfig = {
    baseUrl: "http://localhost:8080/adps/",
};

//本地开发配置
let config = {
    development: {
        ...baseConfig,
        //如有需要请在此行下面使用 变量覆盖 的方式，覆盖通用基本配置
        baseUrl: "http://localhost:8080/adps/",
    },
    //打包代码配置
    production: {
        ...baseConfig,
        //如有需要请在此行下面使用 变量覆盖 的方式，覆盖通用基本配置
        baseUrl: "/adps",
    },
};

//本地开发时采用 development 中的配置，打包时采用 production 中的配置
let exportConfig =
    process.env.NODE_ENV === "development" ?
        config.development :
        config.production;

//导出
export default exportConfig;
