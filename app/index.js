import React, {Component} from 'react'
import {render} from 'react-dom'
import App from "./pages/index.js";
//公用样式
import './assets/index.less'
import {Provider} from 'react-redux'
import configureStore from './redux/store/index'

let store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

