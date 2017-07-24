import React, {Component} from 'react'
import RouterMap from "../routers/index";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../redux/actions/userInfo'

//这个组件决定要显示哪个组件
class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        //先去本地查找是否存储过localstorage名字叫cityName的
        //1.没有cityName ,赋予一个默认值
         let city = localStorage.getItem('cityName');
        city = city || "杭州";
        this.setState({
            done: true
        });
        //页面加载后就设置一个城市
        this.props.userActions.update({
            cityName:city
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.done ? <RouterMap/> : <div>正在加载...</div>
                }
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {}
    },
    (dispatch) => {
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    }
)(App);
