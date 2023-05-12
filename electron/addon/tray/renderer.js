const electron = require('electron')
const ipc = electron.ipcMain
//登录窗口最小化
ipc.on('window-min', function () {
    mainWindow.minimize();
})
//登录窗口最大化
ipc.on('window-max', function () {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
})
ipc.on('window-close', function () {
    mainWindow.close();
})

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
