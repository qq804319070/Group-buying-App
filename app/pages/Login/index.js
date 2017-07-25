import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
import * as actions from '../../redux/actions/userInfo'
import LoginComponent from "../../components/LoginComponent/index";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            login: false
        }
    }

    render() {
        return (
            <div>
                <HeaderComponent title="登陆" history={this.props.history}/>
                {this.state.login ? <LoginComponent login={this.login}/> : null}
            </div>
        )
    }

    checkLogin = () => {
        if (this.props.userInfo.username) {
            this.props.history.push('/user');
        }
        this.setState({
            login: true,//显示登陆组件
        })

    };

    componentDidMount() {
        this.checkLogin()
    }

    login = (username) => {
        let info = this.props.userInfo;
        info.username = username;
        this.props.update(info);
        //如果是详情页面跳转过来的
        if (this.props.match.params.route) {
            console.log(this.props.match.params.route);
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        } else {
            this.props.history.push('/user')
        }
    };
}

export default connect(
    state => ({
        userInfo: state.userInfo
    }),
    {
        ...actions
    }
)(Login)
