import {getToken} from './auth'
/** 时间
 * @returns {string}
 */
export function getDataTime() {
    var date = new Date()
    // 以下代码依次是获取当前时间的年月日时分秒
    var year:String|Number = date.getFullYear()
    var month:String|Number = date.getMonth() + 1
    var strDate:String|Number = date.getDate()
    var minute:String|Number = date.getMinutes()
    var hour:String|Number = date.getHours()
    var second:String|Number = date.getSeconds()
    var milliseconds:String|Number = date.getMilliseconds()
    // 固定时间格式
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
    }
    if (hour >= 0 && hour <= 9) {
        hour = '0' + hour
    }
    if (minute >= 0 && minute <= 9) {
        minute = '0' + minute
    }
    if (second >= 0 && second <= 9) {
        second = '0' + second
    }
    return year + '' + month + strDate + hour + minute + second + milliseconds
}
/** 时间
 * @returns {string}
 */
export function getTime() {
    var date = new Date()
    var seperator1 = '-'
    var seperator2 = ':'
    // 以下代码依次是获取当前时间的年月日时分秒
    var year:String|Number = date.getFullYear()
    var month:String|Number = date.getMonth() + 1
    var strDate:String|Number = date.getDate()
    var minute:String|Number = date.getMinutes()
    var hour:String|Number = date.getHours()
    var second:String|Number = date.getSeconds()
    // 固定时间格式
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
    }
    if (hour >= 0 && hour <= 9) {
        hour = '0' + hour
    }
    if (minute >= 0 && minute <= 9) {
        minute = '0' + minute
    }
    if (second >= 0 && second <= 9) {
        second = '0' + second
    }
    return year + seperator1 + month + seperator1 + strDate + 'T' + hour + seperator2 + minute + seperator2 + second
}
/**  处理请求对象
 * @param {Object}
 * @returns {Object}
 */
export function changeData(content:object, filename:String) {
   const accessToken = getToken('accessToken')
   const itemData:any = content
    if (getToken('openId')) {
        itemData.loginUserId = getToken('openId')
        itemData.accessToken = accessToken
        itemData.openId = getToken('openId')
    }
    const dataItme = {
        'bizContent': JSON.stringify(itemData),
        'encryptType': 'NONE',
        'filename': filename,
        'sigdataItmen': 'NONE',
        'signType': 'NONE',
        'timestamp': getTime(),
        'version': '2.0',
        'tokenType': 'USER_AUTH',
        'accessToken': accessToken
    }
    return dataItme
}
