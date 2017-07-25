import React, {Component} from 'react'

class UserInfo extends Component {



    componentDidMount(){
        //检查是否登陆如果没登录过 跳转到登陆页面


    }

  render() {
    return (
      <div>
          {this.props.userInfo.username}
          {this.props.userInfo.cityName}
      </div>
    )
  }
}

export default UserInfo
