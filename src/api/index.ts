import request from '/@/utils/request';
import system from './modules/system';
import { changeData, getDataTime } from '/@/utils/validate.ts';
export {
    system
}
export function gettingData(params:object, fileName:String) {
    const file = fileName + '_' + getDataTime() + '.json'
    const data = changeData(params, file)
    return request({
        url: 'api/json',
        method: 'post',
        data
    })
}
