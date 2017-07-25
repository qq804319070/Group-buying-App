import React, {Component} from 'react'
import './index.less'
class UserInfo extends Component {



    componentDidMount(){
        //检查是否登陆如果没登录过 跳转到登陆页面

    }

  render() {
    return (
      <div className="user-info">
          <span>用户名: {this.props.userInfo.username}</span>
          <span>城市: {this.props.userInfo.cityName}</span>
      </div>
    )
  }
}

export default UserInfo
