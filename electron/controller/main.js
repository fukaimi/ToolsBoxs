const {
    app,
    BrowserWindow,
    ipcRenderer,
    ipcMain
} = require('electron')

//登录窗口最小化
ipcMain.on('window-min', function () {
    mainWindow.minimize();
})
//登录窗口最大化
ipcMain.on('window-max', function () {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
})
//关闭窗口
ipcMain.on('window-close', function () {
    mainWindow.close();
})
