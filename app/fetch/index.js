import 'whatwg-fetch'
import 'es6-promise'
//fetch有兼容性问题(需要导入两个模块做兼容)

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    })
}

