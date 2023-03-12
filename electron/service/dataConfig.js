'use strict';

const Service = require('ee-core').Service;
const Storage = require('ee-core').Storage;
const _ = require('lodash');
const path = require('path');


/**
 * 数据存储
 * @class
 */
class DataConfigService extends Service {

  constructor (ctx) {
    super(ctx);

    // lowdb数据库
    this.systemDB = Storage.JsonDB.connection('system');

    let lowdbOptions = {
      driver: 'lowdb'
    }
    this.demoDB = Storage.JsonDB.connection('demo', lowdbOptions);
    this.demoDBKey = {
      test_data: 'test_data'
    };

    // sqlite数据库
    this.sqliteFile = 'sqlite-demo.db';
    let sqliteOptions = {
      driver: 'sqlite',
      default: {
        timeout: 6000,
        verbose: console.log // 打印sql语法
      }
    }
    this.demoSqliteDB = Storage.JsonDB.connection(this.sqliteFile, sqliteOptions);
  }

  /*
   * 增 Test data
   */
  async addTestData(user) {
    const key = this.demoDBKey.test_data;
    if (!this.demoDB.db.has(key).value()) {
      this.demoDB.db.set(key, []).write();
    }

    const data = this.demoDB.db
    .get(key)
    .push(user)
    .write();

    return data;
  }

  /*
   * 删 Test data
   */
  async delTestData(name = '') {
    const key = this.demoDBKey.test_data;
    const data = this.demoDB.db
    .get(key)
    .remove({name: name})
    .write();

    return data;
  }

  /*
   * 改 Test data
   */
  async updateTestData(name= '', age = 0) {
    const key = this.demoDBKey.test_data;
    const data = this.demoDB.db
    .get(key)
    .find({name: name}) // 修改找到的第一个数据，貌似无法批量修改 todo
    .assign({age: age})
    .write();

    return data;
  }

  /*
   * 查 Test data
   */
  async getTestData(age = 0) {
    const key = this.demoDBKey.test_data;
    let data = this.demoDB.db
    .get(key)
    //.find({age: age}) 查找单个
    .filter(function(o) {
      let isHas = true;
      isHas = age === o.age ? true : false;
      return isHas;
    })
    //.orderBy(['age'], ['name']) 排序
    //.slice(0, 10) 分页
    .value();

    if (_.isEmpty(data)) {
      data = []
    }

    return data;
  }

  /*
   * all Test data
   */
  async getAllTestData() {
    const key = this.demoDBKey.test_data;
    if (!this.demoDB.db.has(key).value()) {
      this.demoDB.db.set(key, []).write();
    }
    let data = this.demoDB.db
    .get(key)
    .value();

    if (_.isEmpty(data)) {
      data = []
    }

    return data;
  }

  /*
   * 检查并创建表 (sqlite)
   */
  async checkAndCreateTableSqlite(tableName = '') {
    if (_.isEmpty(tableName)) {
      throw new Error(`table name is required`);
    }
    // 检查表是否存在
    const userTable = this.demoSqliteDB.db.prepare('SELECT * FROM sqlite_master WHERE type=? AND name = ?');
    const result = userTable.get('table', tableName);
    console.log('result:', result);
    if (result) {
      return;
    }

    // 创建表
    const create_table_user =
    `CREATE TABLE ${tableName}
     (
       "data_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
       "data_key" text NOT NULL,
       "data_value" text NOT NULL,
       "data_memo" text,
       "data_desc" text NOT NULL
     );`
    this.demoSqliteDB.db.exec(create_table_user);

  }

  /*
   * 改 Test data (sqlite)
   */
  async updateDataSqlite(nid= 0, title = '') {
    //console.log("update :", {name, age});


    await this.checkAndCreateTableSqlite(table);

    const updateUser = this.demoSqliteDB.db.prepare(`UPDATE ${table} SET TITLE = @title WHERE nid = @nid`);
    updateUser.run(age, name);

    return true;
  }

  /**
   * 通过代码值获取字典值
   * **/
  async getDataConfigByKey(data_key=''){
    console.log("select :", {data_key});

    let table = 'data_config';
    await this.checkAndCreateTableSqlite(table);

    const selectData= this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} WHERE data_key = @data_key`);
    const datas = selectData.all({data_key: data_key});
    console.log("select datas:", datas);
    return datas;
  }

  /*
* 增 Test data (sqlite)
*/
  async addDataConfig(data) {
    console.log("add data:", data);
    let table = 'data_config';
    await this.checkAndCreateTableSqlite(table);
    const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (data_key, data_value,data_memo,data_desc) VALUES (@data_key, @data_value,@data_memo,@data_desc)`);
    insert.run(data);
    return true;
  }

  /*
 * 删 Test data (sqlite)
 */
  async delDataConfig(data_id = 0) {
    console.log("delete name:", data_id);

    let table = 'data_config';
    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE data_id = ?`);
    delUser.run(data_id);

    return true;
  }


  /**
   * 发起一个网络请求
   */
  async post(param) {
    console.log("POST发起请求:" + param)
    try {
      const headersObj = {
        'Content-Type': 'application/json',
        'Authorization': param.token // 请修改这个token，用你自己的账号token
      };
      const url = param.url;
      const response = await this.app.curl(url, {
        method: 'POST',
        headers: headersObj,
        data: param,
        dataType: 'json',
        timeout: 150000,
      });
      const result = response.data;
      console.log("POST请求应答:" + JSON.stringify(result))
      return result
    }catch (e) {
      return e
    }
  }

  /*
   * all Test data (sqlite)
   */
  async getAllTestDataSqlite() {
    //console.log("select all user");

    await this.checkAndCreateTableSqlite(table);

    const selectAllData = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} `);
    const allData =  selectAllData.all();
    console.log("select allr:", allUser);
    return allUser;
  }

  /*
   * get data dir (sqlite)
   */
  async getDataDir() {
    const dir = this.demoSqliteDB.getStorageDir();

    return dir;
  }

  /*
   * set custom data dir (sqlite)
   */
  async setCustomDataDir(dir) {
    if (_.isEmpty(dir)) {
      return;
    }

    // the absolute path of the db file
    const dbFile = path.join(dir, this.sqliteFile);
    const sqliteOptions = {
      driver: 'sqlite',
      default: {
        timeout: 6000,
        verbose: console.log
      }
    }
    this.demoSqliteDB = Storage.JsonDB.connection(dbFile, sqliteOptions);

    return;
  }
}

DataConfigService.toString = () => '[class DataConfigService]';
module.exports = DataConfigService;
