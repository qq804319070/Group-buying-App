import * as Types from '../action-types/userInfo'
let initState = {};

export default  function userInfo(state = initState, action) {
    switch (action.type) {
        case Types.UPDATE_CITY:
            return action.data;
        default :
            return state
    }
}

