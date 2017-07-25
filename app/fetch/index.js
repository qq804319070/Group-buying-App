import 'whatwg-fetch'
import 'es6-promise'
//fetch有兼容性问题(需要导入两个模块做兼容)

export function get(url) {
    return fetch(url, {
        Accept: 'application/json'
    })
}

export function post(url, obj) {
    return fetch(url, {
        method: 'POST', //设置请求的类型为post
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }, //设置请求头为
        body: toUrlencoded(obj)
    })
}

let toUrlencoded = (obj) => {
    let ary = [];
    for (let key in obj) {
        ary.push(`${key}=${obj[key]}`)
    }
    return ary.join('&')
};