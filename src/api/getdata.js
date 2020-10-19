import axios from '@/api/config.js'

/**
 * 上传消息
 */

export const updata = data => {
    return new Promise((resolve, reject) => {
        axios.post('/msg', {
                msg: data.msg,
                color: data.color
            })
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}

/***
 * 获取消息
 */

export const getdata = () => {
    return new Promise((resolve, reject) => {
        axios.get('/msg')
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}


/***
 * 删除消息
 */
export const deldata = (_id) => {
    return new Promise((resolve, reject) => {
        axios.post('/msg/del', {
                _id
            })
            .then(res => { resolve(res) })
            .catch(error => { reject(error) })
    })
}