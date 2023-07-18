//引入request文件
import request from '@/libs/request';

//导出封装ok的请求

//查询需求申请列表,queryRequestApplyPage为请求名
export const MbsToOther = data => {
    return request({
        url: '/api/cidsApi/MbsToOther',
        method: 'post',
        //请求传递的参数
        data,
    })
}
