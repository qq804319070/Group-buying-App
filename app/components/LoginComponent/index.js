import React, {Component} from 'react'
import './index.less'
class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            val: ''
        }
    }

    render() {
        return (
            <div className="login-component">
                <input type="text" value={this.state.val} onChange={this.handleChangeVal} placeholder="请输入用户名"/>
                <button onClick={this.login} className="back">登陆</button>
            </div>
        )
    }

    login = () => {
        this.props.login(this.state.val)
    };

    handleChangeVal = (e) => {
        let val = e.target.value;
        this.setState({
            val
        })
    }
}

export default LoginComponent

