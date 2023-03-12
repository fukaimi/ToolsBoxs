## 2.5.0
1. 增加开发模式自定义协议头
2. 增加sqlite数据库db文件自定义目录
3. 增加sqlite数据库动态切库demo
4. 增加远程web使用教程及demo
5. 删除loading文件、ci/cd配置文件
6. 删除ee-core中无用的constant
7. 升级ee-core到1.5.0

## 2.4.0
1. 增加混淆/bytecode加密配置opt,提升安全性
2. 增加插件的方式重写托盘、唤醒、升级、安全、扩展等功能
3. 增加java服务插件，感谢“zuihou”提供的PR
4. 增加jave服务demo，jar等完整用例
5. 增加Utils库函数：getEnv/getAppUserDataDir/getHomeDir/getBaseDir/
    getRootDir/getAppVersion/getExecDir/getAddonConfig/
    getMainServerConfig/getHttpServerConfig/getSocketServerConfig
6. 移除多余代码
7. 升级ee-core到1.4.1

## 2.3.0
1. 增加addon插件模块，开发者可以自由扩展app对象
2. 内置window插件，实现多窗口通信
3. 增加上传文件demo
4. 增加多窗口通信demo，实现子窗口与主进程通信、子窗口之间互相通信
5. 增加插件config配置
6. 优化title显示
7. 增加更强大obfuscator混淆功能，提供strict类型
8. 移除uglify混淆及包
9. 升级ee-core到1.4.0

## 2.2.1
1. 增加http服务请求过滤配置
2. 优化http服务开启后，浏览器默认请求报错
3. 将开发环境热启动配置加入config
4. 构建包支持windows免安装版、arm64版
5. 构建包支持linux arm64版、armv7l版、rpm包、pacman包
6. 关闭上下文隔离配置

## 2.2.0
1. 修复加密配置

## 2.1.9
1. 增加bytecode字节码加密的配置文件
2. 增加加密类型、目录、文件后缀可扩展
3. sqlite功能可选
4. 增加上下文隔离
5. 修复win7系统下开发异常

## 2.1.8
1. 安全性更新
2. 支持bytecode字节码加密
3. 优化压缩混淆加密
4. 将废弃compress、restore命令，使用encrypt替代
5. mainServer增加option支持
6. 限制控制器业务必须为class文件

## 2.1.7
1. 增加ssl，支持https
2. 优化http服务的路由写法
3. 优化utils部分函数 && 修复错误。
4. 优化http返回状态码
5. 去除ee-core中延迟加载功能
6. 去除ee-core中无效代码

## 2.1.6
1. 增加sqlite数据库
2. 增加sqlite增删改查demo
3. 增加http服务body，支持表单、文件等
4. 修复热重启bug
5. 升级ee-core到1.2.8

## 2.1.5
1. 增加ee-core命令

## 2.1.4
1. 增加开发环境代码热重载
2. 增加菜单栏配置属性
3. 增加配置选项，开启/关闭硬件加速
4. 优化启动
5. 修复linux系统构建的deb包，安装后图标显示问题
6. 升级electron-builder到23.0.3
7. 升级ee-core到1.2.6
8. 升级electron到13.6.9
9. 移除loading页

## 2.1.2
1. ipc通信增加 invoke/handle 模型
2. ipcRender增加 invoke异步/sendSync同步方法
3. 优化ee-core代码
4. 优化storage demo
5. 优化ipc通信 同步、异步、双向通信demo
6. 替换所有前端ipcCall为ipcInvoke
7. 修复ipc并发请求问题

## 2.1.1
1. 修复托盘窗口关闭问题
2. 修复ee-core窗口事件
3. 优化mac系统应用坞点击显示
4. 优化单应用模式
5. 优化代码加密

## 2.1.0
1. 增加内置http server服务，支持配置host、端口、跨域等属性
2. 增加http服务相关demo
3. 增加socket服务相关demo
4. 优化内置socket server服务，支持开启/关闭
5. 优化前端主菜单、子菜单
6. 升级前端组件库
7. 升级store包
8. 一些代码优化

## 2.0.6
1. 增加socket service options，支持path,connectTimeout,maxHttpBufferSize,cors等属性
2. 修复任务栏显示问题
3. 修复socket跨域问题
4. 修复构建应用失败问题

## 2.0.5
1. 增加生命周期函数 appReady()
2. 增加dll调用方法
3. 增加Utils工具类方法，获取额外资源目录
4. 增加socket.koa属性
5. 修复co包异常
6. 优化软件调用demo

## 2.0.3
1. 增加html模式，前端支持多个html页面
2. 增加socket服务，第三方应用可调用EE应用
3. 增加全局config属性: userHome、appVersion、isPackaged、execDir
4. 增加Utils工具类方法，获取socket端口，socket频道
5. 优化应用创建逻辑
6. 优化配置文件
7. 优化pkg方法
8. 优化动态端口获取

## 2.0.0
1. 框架重构
2. 增加控制器
3. 增加服务器
4. 增加ipc
5. 增加socket
6. 增加storage
7. 增加全局app对象
8. 增加预加载
9. 增加核心npm包
10. 增加....  太多了

## 1.16.3
1. 增加手动更新 和 强制更新
2. 修复ipc监听
3. 限制一个窗口
4. 更新demo

## 1.16.2
1. 忘记更新什么了

## 1.16.1
1. 代码压缩与混淆，增加安全性
2. 新logo
3. 文档更新

## 1.16.0
1. 增加lowdb数据库实例代码
2. 更新npm源
3. 更新electron版本
4. 打包过滤frontend

## 1.15.0
1. 增加chrome扩展程序（重点）
2. 增加web(html)内容嵌入
3. 增加多窗口打开
4. 增加桌面通知
5. 增加电源监控
6. 增加获取显示器信息
7. 增加系统主题设置
8. 修改功能分类
9. 删除非必要代码

## 1.14.0
1. 视图样式重构
2. demo增加分类
3. demo界面优化，重新排版
4. 增加选择文件夹目录
5. 增加ipc通信模块与apis模块语法统一
6. 增加路由分类
7. 增加ipc支持长通信，服务端持续向页面发消息
8. 增加操作系统弹框demo
9. 删除非必要代码
10. 修复拉伸窗口空白

## 1.13.0
1. 修复自动更新
2. 支持将任意网站打包成桌面软件
3. 优化启动时白屏问题
4. 安全检查，防止inspect debug
5. 自动升级支持多平台更新
6. 部分代码优化

## 1.12.0
1. 崩溃上报
2. 调用第三方软件 及 demo实现
3. 名称设置
4. 方法注释说明

## 1.11.0
1. 唤醒应用功能
2. 优化代码

## 1.10.0
1. 优化代码结构，功能模块更加合理。
2. 升级electron核心到12版本。
3. 升级electron-builder，支持Mac M1芯片架构。
4. 增加快捷键功能模块并提供demo。
5. 修复ejs bug。
6. 修复引入路径。
7. 优化自动升级重复代码、废弃旧的api。