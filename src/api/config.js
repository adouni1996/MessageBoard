import axios from 'axios'

axios.defaults.transformRequest = [function(data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]
const service = axios.create({
    baseURL: 'http://172.16.132.54:8888',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8;"
    }
})

export default service