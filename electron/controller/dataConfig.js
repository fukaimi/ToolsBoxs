'use strict';

const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const {exec} = require('child_process');
const {Controller, Utils} = require('ee-core');
const electronApp = require('electron').app;
const {
    dialog, shell, BrowserView,
    Notification, powerMonitor, screen, nativeTheme
} = require('electron');
const dayjs = require('dayjs');

let myTimer = null;
let browserViewObj = null;
let notificationObj = null;

/**
 * 示例控制器
 * @class
 */
class DataConfigController extends Controller {

    constructor(ctx) {
        super(ctx);
    }

    /**
     * 所有方法接收两个参数
     * @param args 前端传的参数
     * @param event - ipc通信时才有值。invoke()方法时，event == IpcMainInvokeEvent; send()/sendSync()方法时，event == IpcMainEvent
     */

    /**
     * test
     */
    async test() {
        const result = await this.service.example.test('electron');

        let tmpDir = Utils.getLogDir();
        console.log('tmpDir:', tmpDir);

        // console.log('this.app.request:', this.app.request.query);

        // const exampleAddon = this.app.addon.example;
        // const str = exampleAddon.hello();
        // console.log('str:', str);

        return result;
    }

    async requestService(args){
        const {service} = this;
        const paramsObj = args;
        console.log('网络请求入参 paramsObj:', paramsObj);
        const result = {
            res:null
        }
        result.res = await service.dataConfig.requestService(paramsObj)
        return result
    }

    /**
     * sqlite数据库操作
     */
    async sqlitedbOperation(args) {
        const {service} = this;
        const paramsObj = args;
        console.log('eeeee paramsObj:', paramsObj);
        const data = {
            action: paramsObj.action,
            result: null,
            all_list: []
        };

        switch (paramsObj.action) {
            case 'getDataConfigByKey' :
                data.result = await service.dataConfig.getDataConfigByKey(paramsObj.info.data_key);
                break;
            case 'addDataConfig':
                data.result = await service.dataConfig.addDataConfig(paramsObj.info);
                break;
            case 'delDataConfig' :
                data.result = await service.dataConfig.delDataConfig(paramsObj.info.data_id);
                break;
            case 'POST':
                data.result = await service.dataConfig.post(paramsObj.data)
                break;
            case 'GET':
                data.result = await service.dataConfig.get(paramsObj.data)
                break;
            case 'update' :
                data.result = await service.storage.updateDataSqlite(paramsObj.update_name, paramsObj.update_age);
                break;
            case 'get' :
                data.result = await service.favoriteurl.getDataSqlite(paramsObj.info.nid);
                break;
            case 'getDataDir' :
                data.result = await service.favoriteurl.getDataDir();
                break;
            case 'setDataDir' :
                data.result = await service.favoriteurl.setCustomDataDir(paramsObj.data_dir);
                break;
            case 'addSceneTemp':
                data.result = await service.dataConfig.addSceneTemp(paramsObj.info)
                break;
            case 'updateSceneTemp':
                data.result = await service.dataConfig.updateSceneTemp(paramsObj.info)
                break;
            case 'getSceneTemp':
                data.result = await service.dataConfig.getSceneTemp(paramsObj.info.scene)
                break;
            case 'addTask':
                data.result = await service.dataConfig.addTask(paramsObj.data)
                break;
            case 'getAllTask':
                data.result = await service.dataConfig.getAllTask()
                break;
            case 'delTask':
                data.result = await service.dataConfig.delTask(paramsObj.data.TASK_ROOT_ID)
                break
        }
        console.log('data out:', data);
        return data;
    }

    /**
     * 消息提示对话框
     */
    messageShow() {
        dialog.showMessageBoxSync({
            type: 'info', // "none", "info", "error", "question" 或者 "warning"
            title: '自定义标题-message',
            message: '自定义消息内容',
            detail: '其它的额外信息'
        })

        return '打开了消息框';
    }

    /**
     * 消息提示与确认对话框
     */
    messageShowConfirm() {
        const res = dialog.showMessageBoxSync({
            type: 'info',
            title: '自定义标题-message',
            message: '自定义消息内容',
            detail: '其它的额外信息',
            cancelId: 1, // 用于取消对话框的按钮的索引
            defaultId: 0, // 设置默认选中的按钮
            buttons: ['确认', '取消'], // 按钮及索引
        })
        let data = (res === 0) ? '点击确认按钮' : '点击取消按钮';

        return data;
    }

    /**
     * 选择目录
     */
    selectFolder() {
        const filePaths = dialog.showOpenDialogSync({
            properties: ['openDirectory', 'createDirectory']
        });

        if (_.isEmpty(filePaths)) {
            return null
        }

        return filePaths[0];
    }

    /**
     * 打开目录
     */
    openDirectory(args) {
        if (!args.id) {
            return false;
        }
        let dir = '';
        if (path.isAbsolute(args.id)) {
            dir = args.id;
        } else {
            dir = electronApp.getPath(args.id);
        }

        shell.openPath(dir);
        return true;
    }

    /**
     * 加载视图内容
     */
    loadViewContent(args) {
        let content = null;
        if (args.type == 'html') {
            content = path.join('file://', electronApp.getAppPath(), args.content)
        } else {
            content = args.content;
        }

        browserViewObj = new BrowserView();
        this.app.electron.mainWindow.setBrowserView(browserViewObj)
        browserViewObj.setBounds({
            x: 300,
            y: 170,
            width: 650,
            height: 400
        });
        browserViewObj.webContents.loadURL(content);
        return true
    }

    /**
     * 移除视图内容
     */
    removeViewContent() {
        this.app.electron.mainWindow.removeBrowserView(browserViewObj);
        return true
    }

    /**
     * 打开新窗口
     */
    createWindow(args) {
        let content = null;
        if (args.type == 'html') {
            content = path.join('file://', electronApp.getAppPath(), args.content)
        } else if (args.type == 'web') {
            content = args.content;
        } else if (args.type == 'vue') {
            let addr = 'http://localhost:8080'
            if (this.config.env == 'prod') {
                const mainServer = this.app.config.mainServer;
                addr = mainServer.protocol + mainServer.host + ':' + mainServer.port;
            }

            content = addr + args.content;
        } else {
            // some
        }

        const addonWindow = this.app.addon.window;
        let opt = {
            title: args.windowName || 'new window'
        }
        const name = args.windowName || 'window-1';
        const win = addonWindow.create(name, opt);
        const winContentsId = win.webContents.id;

        // load page
        win.loadURL(content);

        return winContentsId
    }

    /**
     * 获取窗口contents id
     */
    getWCid(args) {
        const addonWindow = this.app.addon.window;

        // 主窗口的name默认是main，其它窗口name开发者自己定义
        const name = args;
        const id = addonWindow.getWCid(name);

        return id;
    }

    /**
     * 加载扩展程序
     */
    // async loadExtension (args) {
    //   const crxFile = args[0];
    //   if (_.isEmpty(crxFile)) {
    //     return false;
    //   }
    //   const extensionId = path.basename(crxFile, '.crx');
    //   const chromeExtensionDir = chromeExtension.getDirectory();
    //   const extensionDir = path.join(chromeExtensionDir, extensionId);

    //   console.log("[api] [example] [loadExtension] extension id:", extensionId);
    //   unzip(crxFile, extensionDir).then(() => {
    //     console.log("[api] [example] [loadExtension] unzip success!");
    //     chromeExtension.load(extensionId);
    //   });

    //   return true;
    // }

    /**
     * 创建系统通知
     */
    sendNotification(arg, event) {
        const channel = 'controller.example.sendNotification';
        if (!Notification.isSupported()) {
            return '当前系统不支持通知';
        }

        let options = {};
        if (!_.isEmpty(arg.title)) {
            options.title = arg.title;
        }
        if (!_.isEmpty(arg.subtitle)) {
            options.subtitle = arg.subtitle;
        }
        if (!_.isEmpty(arg.body)) {
            options.body = arg.body;
        }
        if (!_.isEmpty(arg.silent)) {
            options.silent = arg.silent;
        }

        notificationObj = new Notification(options);

        if (arg.clickEvent) {
            notificationObj.on('click', (e) => {
                let data = {
                    type: 'click',
                    msg: '您点击了通知消息'
                }
                event.reply(`${channel}`, data)
            });
        }

        if (arg.closeEvent) {
            notificationObj.on('close', (e) => {
                let data = {
                    type: 'close',
                    msg: '您关闭了通知消息'
                }
                event.reply(`${channel}`, data)
            });
        }

        notificationObj.show();

        return true
    }

    /**
     * 电源监控
     */
    initPowerMonitor(arg, event) {
        const channel = 'controller.example.initPowerMonitor';
        powerMonitor.on('on-ac', (e) => {
            let data = {
                type: 'on-ac',
                msg: '接入了电源'
            }
            event.reply(`${channel}`, data)
        });

        powerMonitor.on('on-battery', (e) => {
            let data = {
                type: 'on-battery',
                msg: '使用电池中'
            }
            event.reply(`${channel}`, data)
        });

        powerMonitor.on('lock-screen', (e) => {
            let data = {
                type: 'lock-screen',
                msg: '锁屏了'
            }
            event.reply(`${channel}`, data)
        });

        powerMonitor.on('unlock-screen', (e) => {
            let data = {
                type: 'unlock-screen',
                msg: '解锁了'
            }
            event.reply(`${channel}`, data)
        });

        return true
    }

    /**
     * 获取屏幕信息
     */
    getScreen(arg) {
        let data = [];
        let res = {};
        if (arg == 0) {
            let res = screen.getCursorScreenPoint();
            data = [
                {
                    title: '横坐标',
                    desc: res.x
                },
                {
                    title: '纵坐标',
                    desc: res.y
                },
            ]

            return data;
        }
        if (arg == 1) {
            res = screen.getPrimaryDisplay();
        }
        if (arg == 2) {
            let resArr = screen.getAllDisplays();
            // 数组，只取一个吧
            res = resArr[0];
        }
        // console.log('[electron] [ipc] [example] [getScreen] res:', res);
        data = [
            {
                title: '分辨率',
                desc: res.bounds.width + ' x ' + res.bounds.height
            },
            {
                title: '单色显示器',
                desc: res.monochrome ? '是' : '否'
            },
            {
                title: '色深',
                desc: res.colorDepth
            },
            {
                title: '色域',
                desc: res.colorSpace
            },
            {
                title: 'scaleFactor',
                desc: res.scaleFactor
            },
            {
                title: '加速器',
                desc: res.accelerometerSupport
            },
            {
                title: '触控',
                desc: res.touchSupport == 'unknown' ? '不支持' : '支持'
            },
        ]

        return data;
    }

    /**
     * 调用其它程序（exe、bash等可执行程序）
     */
    openSoftware(softName) {
        if (!softName) {
            return false;
        }

        let softwarePath = path.join(Utils.getExtraResourcesDir(), softName);
        this.app.logger.info('[openSoftware] softwarePath:', softwarePath);

        // 检查程序是否存在
        if (!fs.existsSync(softwarePath)) {
            return false;
        }
        // 命令行字符串 并 执行
        let cmdStr = 'start ' + softwarePath;
        exec(cmdStr);

        return true;
    }

    /**
     * 获取系统主题
     */
    getTheme() {
        let theme = 'system';
        if (nativeTheme.shouldUseHighContrastColors) {
            theme = 'light';
        } else if (nativeTheme.shouldUseInvertedColorScheme) {
            theme = 'dark';
        }

        return theme;
    }

    /**
     * 设置系统主题
     */
    setTheme(args) {

        // TODO 好像没有什么明显效果
        nativeTheme.themeSource = args;

        return args;
    }


    /**
     * 检查是否有新版本
     */
    checkForUpdater() {
        const autoUpdaterAddon = this.app.addon.autoUpdater;
        autoUpdaterAddon.checkUpdate();

        return;
    }

    /**
     * 下载新版本
     */
    downloadApp() {
        const autoUpdaterAddon = this.app.addon.autoUpdater;
        autoUpdaterAddon.download();
        return;
    }

    /**
     * 检测http服务是否开启
     */
    async checkHttpServer() {
        const httpServerConfig = this.app.config.httpServer;
        const url = httpServerConfig.protocol + httpServerConfig.host + ':' + httpServerConfig.port;

        const data = {
            enable: httpServerConfig.enable,
            server: url
        }
        return data;
    }

    /**
     * 一个http请求访问此方法
     */
    async doHttpRequest() {
        // http方法
        const method = this.app.request.method;
        // http get 参数
        let params = this.app.request.query;
        params = (params instanceof Object) ? params : JSON.parse(JSON.stringify(params));
        // http post 参数
        const body = this.app.request.body;

        const httpInfo = {
            method,
            params,
            body
        }
        console.log('httpInfo:', httpInfo);

        if (!body.id) {
            return false;
        }
        const dir = electronApp.getPath(body.id);
        shell.openPath(dir);

        return true;
    }

    /**
     * 一个socket io请求访问此方法
     */
    async doSocketRequest(args) {
        if (!args.id) {
            return false;
        }
        const dir = electronApp.getPath(args.id);
        shell.openPath(dir);

        return true;
    }

    /**
     * 异步消息类型
     * @param args 前端传的参数
     * @param event - IpcMainInvokeEvent 文档：https://www.electronjs.org/zh/docs/latest/api/structures/ipc-main-invoke-event
     */
    async ipcInvokeMsg(args, event) {
        let timeNow = dayjs().format('YYYY-MM-DD HH:mm:ss');
        const data = args + ' - ' + timeNow;

        return data;
    }

    /**
     * 同步消息类型
     * @param args 前端传的参数
     * @param event - IpcMainEvent 文档：https://www.electronjs.org/docs/latest/api/structures/ipc-main-event
     */
    async ipcSendSyncMsg(args) {
        let timeNow = dayjs().format('YYYY-MM-DD HH:mm:ss');
        const data = args + ' - ' + timeNow;

        return data;
    }

    /**
     * 双向异步通信
     * @param args 前端传的参数
     * @param event - IpcMainEvent 文档：https://www.electronjs.org/docs/latest/api/structures/ipc-main-event
     */
    ipcSendMsg(args, event) {
        // 前端ipc频道 channel
        const channel = 'controller.example.ipcSendMsg';

        if (args.type == 'start') {
            // 每隔1秒，向前端页面发送消息
            // 用定时器模拟
            myTimer = setInterval(function (e, c, msg) {
                let timeNow = Date.now();
                let data = msg + ':' + timeNow;
                e.reply(`${c}`, data)
            }, 1000, event, channel, args.content)

            return '开始了'
        } else if (args.type == 'end') {
            clearInterval(myTimer);
            return '停止了'
        } else {
            return 'ohther'
        }
    }

    /**
     * 上传文件
     */
    async uploadFile() {
        let tmpDir = Utils.getLogDir();
        const files = this.app.request.files;
        let file = files.file;

        let tmpFilePath = path.join(tmpDir, file.originalFilename);
        try {
            let tmpFile = fs.readFileSync(file.filepath);
            fs.writeFileSync(tmpFilePath, tmpFile);
        } finally {
            await fs.unlink(file.filepath, function () {
            });
        }
        const fileStream = fs.createReadStream(tmpFilePath);
        const uploadRes = await this.service.example.uploadFileToSMMS(fileStream);

        return uploadRes;
    }

    /**
     * 启动java项目
     */
    async startJavaServer() {
        let data = {
            code: 0,
            msg: '',
            server: ''
        }
        const javaCfg = this.app.config.addons.javaServer || {};
        if (!javaCfg.enable) {
            data.code = -1;
            data.msg = 'addon not enabled!';
            return data;
        }

        const javaServerAddon = this.app.addon.javaServer;
        await javaServerAddon.createServer();

        data.server = 'http://localhost:' + javaCfg.port;

        return data;
    }

    /**
     * 关闭java项目
     */
    async closeJavaServer() {
        let data = {
            code: 0,
            msg: '',
        }
        const javaCfg = this.app.config.addons.javaServer || {};
        if (!javaCfg.enable) {
            data.code = -1;
            data.msg = 'addon not enabled!';
            return data;
        }

        const javaServerAddon = this.app.addon.javaServer;
        await javaServerAddon.kill();

        return data;
    }

    /**
     * 测试接口
     */
    hello(args) {
        console.log('hello ', args);
    }
}

DataConfigController.toString = () => '[class DataConfigController]';
module.exports = DataConfigController;
