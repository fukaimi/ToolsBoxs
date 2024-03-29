module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    publicPath: './',
    transpileDependencies: ['screenfull'],//全屏
    runtimeCompiler: true,
    configureWebpack: (config) => {
        config["performance"] = {
            "maxEntrypointSize": 10000000,
            "maxAssetSize": 30000000,
        }
    },
    chainWebpack: config => {
        config.module
            .rule("md")
            .test(/\.md$/)
            .use("vue-loader")
            .loader("vue-loader")
            .end()
            .use("vue-markdown-loader")
            .loader("vue-markdown-loader/lib/markdown-compiler");
        config.plugin('html').tap(args => {
            //args[0].title= '' // 设置title
            return args
        })


    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    //在此处设置，也可以设置直角、边框色、字体大小等
                    'primary-color': '#07C160',
                },
                javascriptEnabled: true
            }
        }
    },
}
