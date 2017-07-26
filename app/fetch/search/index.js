import {get} from '../index'

export function search(kind,keyword) {
    return get(`/api/search/${kind}/${keyword}`)
}