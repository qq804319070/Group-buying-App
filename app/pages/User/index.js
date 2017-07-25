import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import UserInfo from "../../components/Userinfo/index";
import OrderList from "./subPage/OrderList";

class User extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <HeaderComponent title="用户信息" history={this.props.history} back='/'/>
        <UserInfo userInfo={this.props.userInfo}/>
          <OrderList username={this.props.userInfo.username}/>
      </div>
    )
  }
}

export default connect(
    state=>({
      userInfo:state.userInfo
    })
)(User)
