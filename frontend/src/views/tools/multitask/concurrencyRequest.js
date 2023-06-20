import {ipcApiRoute} from "@/api/main"

const {ipcRenderer: ipc} = (window.require && window.require('electron')) || window.electron || {}

// 并发请求函数
function concurrencyRequest(url, lists, maxNum, reqMe) {
    return new Promise((resolve) => {
        if (lists.length === 0) {
            resolve([]);
            return;
        }
        const results = [];
        let index = 0; // 下一个请求的下标
        let count = 0; // 当前请求完成的数量

        // 发送请求
        async function request() {
            if (index === lists.length) return;
            const i = index; // 保存序号，使result和urls相对应
            const reqData = lists[index];
            index++;
            console.log(reqData);
            try {

                const self = this;
                const params = {
                    action: reqMe,
                    data: {
                        url: url,
                        ...reqData
                    }
                }
                console.log('inData:' + params)
                const res = await ipc.sendSync(ipcApiRoute.dataConfigOperation, params)
                if (res.result.status === 200) {
                    // resp 加入到results
                    results[i] = res.result.data
                    //results.push(res.result.data)
                } else {
                    results[i] = {...res}
                }

            } catch (err) {
                // err 加入到results
                console.log("err=>" + err)
                results[i] = err;
            } finally {
                count++;
                // 判断是否所有的请求都已完成
                console.log('========================>' + count)
                if (count === lists.length) {
                    console.log('完成了');
                    resolve(results);
                }
                request();
            }
        }

        // maxNum和urls.length取最小进行调用
        const times = Math.min(maxNum, lists.length);
        for (let i = 0; i < times; i++) {
            request();
        }
    })
}

export default {concurrencyRequest}
