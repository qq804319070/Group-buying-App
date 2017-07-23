import React, {Component} from 'react'
import {render} from 'react-dom'
import App from "./pages/index.js";
//公用样式
import './assets/index.less'


render(
    <App/>,
    document.getElementById('root')
);

