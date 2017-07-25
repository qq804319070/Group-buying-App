import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'

//主页头部组件
class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <div className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxiajiantou"></i>
                </div>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text"/>
                </div>
                <Link to='/login' className="profile">
                        <i className="iconfont icon-people_fill"></i>
                </Link>
            </div>
        )
    }
}

export default HomeHeader
