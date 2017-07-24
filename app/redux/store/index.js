import {createStore} from 'redux';
import reducers from '../reducers/index' ;

export default function configureStore(initState) {
    return createStore(
        reducers,
        initState,
        window.devToolsExtension?window.devToolsExtension():undefined
    )
}


