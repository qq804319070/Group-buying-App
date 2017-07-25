import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../components/Userinfo/index";


class User extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <HeaderComponent title="用户信息" history={this.props.history} back='/'/>
        <UserInfo userInfo={this.props.userInfo}/>
      </div>
    )
  }
}

export default connect(
    state=>({
      userInfo:state.userInfo
    }),

)(User)
