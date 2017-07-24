import * as Types from '../action-types/userInfo'

//actionCreator  是一个函数

export function update(data) {
    return {
        type: Types.UPDATE_CITY,
        data
    }
}
