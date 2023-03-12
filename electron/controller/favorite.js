'use strict';

const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { Controller, Utils } = require('ee-core');
const electronApp = require('electron').app;
const {dialog, shell, BrowserView,
  Notification, powerMonitor, screen, nativeTheme} = require('electron');
const dayjs = require('dayjs');

let myTimer = null;
let browserViewObj = null;
let notificationObj = null;

/**
 * 示例控制器
 * @class
 */
class FavoriteController extends Controller {

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
  async test () {
    const result = await this.service.example.test('electron');

    let tmpDir = Utils.getLogDir();
    console.log('tmpDir:', tmpDir);

    // console.log('this.app.request:', this.app.request.query);

    // const exampleAddon = this.app.addon.example;
    // const str = exampleAddon.hello();
    // console.log('str:', str);

    return result;
  }

  /**
   * json数据库操作
   */
  async dbOperation(args) {
    const { service } = this;
    const paramsObj = args;
    console.log('eeeee paramsObj:', paramsObj);
    const data = {
      action: paramsObj.action,
      result: null,
      all_list: []
    };

    switch (paramsObj.action) {
      case 'add' :
        data.result = await service.favoriteurl.addTestData(paramsObj.info);;
        break;
      case 'del' :
        data.result = await service.favoriteurl.delTestData(paramsObj.delete_name);;
        break;
      case 'update' :
        data.result = await service.favoriteurl.updateTestData(paramsObj.update_name, paramsObj.update_age);
        break;
      case 'get' :
        data.result = await service.favoriteurl.getTestData(paramsObj.search_age);
        break;
    }

    data.all_list = await favoriteurl.storage.getAllTestData();

    return data;
  }

  /**
   * sqlite数据库操作
   */
  async sqlitedbOperation(args) {
    const { service } = this;
    const paramsObj = args;
    console.log('eeeee paramsObj:', paramsObj);
    const data = {
      action: paramsObj.action,
      result: null,
      all_list: []
    };

    switch (paramsObj.action) {
      case 'addGroup' :
        data.result = await service.favoriteurl.addDataFavoriteUrlSqlite(paramsObj.info);
        break;
      case 'delGroup' :
        data.result = await service.favoriteurl.delGroupSqlite(paramsObj.info.nid);
        break;
      case 'delUrlItem' :
        data.result = await service.favoriteurl.delUrlItem(paramsObj.info.item_id);
        break;
      case 'addUrlitem':
        data.result = await service.favoriteurl.addUrlitem(paramsObj.info);
        break;
      case 'update' :
        data.result = await service.storage.updateDataSqlite(paramsObj.update_name, paramsObj.update_age);
        break;
      case 'get' :
        data.result = await service.favoriteurl.getDataSqlite(paramsObj.info.nid);
        break;
      case 'getTreeOfPid' :
        data.result = await service.favoriteurl.getTreeOfPid(paramsObj.info.pid);
        break;
      case 'getUrlItem' :
        data.result = await service.favoriteurl.getUrlItem(paramsObj.info.nid);
        break;
      case 'getAll' :
        data.result = await service.favoriteurl.getAllDataSqlite();
        break;
      case 'getDataDir' :
        data.result = await service.favoriteurl.getDataDir();
        break;
      case 'setDataDir' :
        data.result = await service.favoriteurl.setCustomDataDir(paramsObj.data_dir);
        break;
    }
    return data;
  }

}

FavoriteController.toString = () => '[class FavoriteController]';
module.exports = FavoriteController;
