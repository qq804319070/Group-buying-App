import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/info";
import Comment from "./subpage/Comment";
import Buy from "../../components/Buy/index";
import {connect} from 'react-redux'
import * as Actions from '../../redux/actions/store'
// Detail是通过路由渲染的组件
//路由渲染的组件都会向props加很多属性
//如history
//

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            isStore: false
        }
    }

    componentWillMount() {
        //拿到当前商户的id
        let id = this.props.match.params.id;
        //去收藏的数组中查询
        let isStore = this.props.store.some(item => item === id);
        console.log(isStore);
        if (isStore) {
            this.setState({
                isStore
            })
        }
    }

    render() {
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏按钮*/}
                <Buy buy={this.buy} store={this.store} isStore={this.state.isStore}/>

                {/*评论*/}
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }

    checkLogin = () => {
        //检测是否登陆,登陆过返回true,未登陆饭后false
        if (this.props.userInfo.username) {
            return true
        } else {
            return false
        }

    };

    buy = () => {
        //如果登陆成功
        //跳到用户页面
        let flag = this.checkLogin();
        //如果登陆成功点击购买
        if (flag) {
            this.props.history.push('/user');
        } else {
            //如果登陆成功后,还要跳回当前页面
            this.props.history.push(`/login/${encodeURIComponent('/detail/' + this.props.match.params.id)}`);
        }
    };
    store = () => {
        //验证是否登陆
        //没登陆跳去登录页
        //登陆成功跳回详情页
        let flag = this.checkLogin();
        if (!flag) {
            this.props.history.push(`/login/${encodeURIComponent('/detail/' + this.props.match.params.id)}`);
        } else {

            if (this.state.isStore) {
                this.props.remove(this.props.match.params.id);

            } else {
                this.props.add(this.props.match.params.id);

            }
            this.setState({
                isStore: !this.state.isStore
            })
        }
    }
}

export default connect(
    state => ({
        userInfo: state.userInfo,
        store: state.store
    }),
    {
        ...Actions
    }
)(Detail)

