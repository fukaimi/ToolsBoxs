/*************************************************
 ** preload为预加载模块，该文件将会在程序启动时加载 **
 *************************************************/

/**
 * 预加载模块入口
 * @param {Object} app - 全局app对象
 */
module.exports = async (app) => {

  //已实现的功能模块，可选择性使用和修改
  const trayAddon = app.addon.tray;
  const securityAddon = app.addon.security;
  const awakenAddon = app.addon.awaken;
  const autoUpdaterAddon = app.addon.autoUpdater;
  
  trayAddon.create();
  securityAddon.create();
  awakenAddon.create();
  autoUpdaterAddon.create();
}