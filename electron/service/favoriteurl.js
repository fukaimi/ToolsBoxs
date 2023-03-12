'use strict';

const Service = require('ee-core').Service;
const Storage = require('ee-core').Storage;
const _ = require('lodash');
const path = require('path');



/**
 * 数据存储
 * @class
 */
class FavoriteurlService extends Service {

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

    if (tableName === 'favorite_url'){
      // 创建表
      const create_table_user =
          `CREATE TABLE ${tableName}
     (
       "nid" text NOT NULL,
       "pid" INTEGER,
       "title" TEXT NOT NULL,
       "leve" integer NOT NULL,
       "memo" text,
       PRIMARY KEY ("nid")
     );`
      this.demoSqliteDB.db.exec(create_table_user);
      const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${tableName} (nid,pid, title,leve,memo) VALUES (0,'', '收藏夹','0','-')`);
      insert.run();

    }

    if (tableName === 'favorite_url_item'){
      // 创建表
      const create_table_user =
          `CREATE TABLE ${tableName}
     (
       "item_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
       "nid" INTEGER NOT NULL,
       "item_url" text NOT NULL,
       "item_title" TEXT NOT NULL,
       "item_ico" blob
     );`
      this.demoSqliteDB.db.exec(create_table_user);
    }

  }


  /*
 * 增 Test data (sqlite)
 */
  async addDataFavoriteUrlSqlite(data) {
    console.log("add data:", data);
    let table = 'favorite_url';
    await this.checkAndCreateTableSqlite(table);

    const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (nid,pid, title,leve,memo) VALUES (@nid,@pid, @title,@leve,@memo)`);
    insert.run(data);

    return true;
  }

  /*
* 增 Test data (sqlite)
*/
  async addUrlitem(data) {
    console.log("add data:", data);
    let table = 'favorite_url_item';
    await this.checkAndCreateTableSqlite(table);

    const insert = this.demoSqliteDB.db.prepare(`INSERT INTO ${table} (nid,item_url, item_title,item_ico) VALUES (@nid,@item_url, @item_title,@item_ico)`);
    insert.run(data);

    return true;
  }

  /*
   * 删 Test data (sqlite)
   */
  async delDataSqlite(nid = 0) {
    //console.log("delete name:", name);


    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE nid = ?`);
    delUser.run(name);

    return true;
  }

  /*
 * 删 Test data (sqlite)
 */
  async delGroupSqlite(nid = 0) {
    console.log("delete nid:", nid);

    let table = 'favorite_url';
    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE nid = ?`);
    delUser.run(nid);

    return true;
  }

  /*
* 删 Test data (sqlite)
*/
  async delUrlItem(item_id = 0) {
    console.log("delete item_id:", item_id);

    let table = 'favorite_url_item';
    await this.checkAndCreateTableSqlite(table);

    const delUser = this.demoSqliteDB.db.prepare(`DELETE FROM ${table} WHERE item_id = ?`);
    delUser.run(item_id);

    return true;
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

  /*
   * 查 Test data (sqlite)
   */
  async getDataSqlite(nid = '') {
    console.log("select :", {nid});

    let table = 'favorite_url';
    await this.checkAndCreateTableSqlite(table);

    const selectData= this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} WHERE nid = @nid`);
    const datas = selectData.all({nid: nid});
    console.log("select datas:", datas);
    return datas;
  }

  /*
 * 查 Test data (sqlite)
 */
  async getTreeOfPid(pid = '') {
    console.log("select :", {pid});

    let table = 'favorite_url';
    await this.checkAndCreateTableSqlite(table);

    const selectData= this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} WHERE pid = @pid`);
    const datas = selectData.all({pid: pid});
    console.log("select datas:", datas);
    return datas;
  }

  /*
* 查 Test data (sqlite)
*/
  async getUrlItem(nid = '') {
    console.log("select :", {nid});

    let table = 'favorite_url_item';
    await this.checkAndCreateTableSqlite(table);

    const selectData= this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} WHERE nid = @nid`);
    const datas = selectData.all({nid: nid});
    console.log("select datas:", datas);
    return datas;
  }

  /*
   * all Test data (sqlite)
   */
  async getAllDataSqlite() {
    console.log("select all ");
    let table = 'favorite_url';
    await this.checkAndCreateTableSqlite(table);

    const selectAllData = this.demoSqliteDB.db.prepare(`SELECT * FROM ${table} `);
    const allData =  selectAllData.all();
    console.log("select allr:", allData);
    return allData;
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

FavoriteurlService.toString = () => '[class FavoriteurlService]';
module.exports = FavoriteurlService;
