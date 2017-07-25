import {get,post} from '../index'

export function getOrderList(username) {
    return get('/api/orderlist/'+username)
}

export function postCommit(obj) {
    return post('/api/comment',obj)
}