import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import SearchInput from "../SearchInput/index";

//主页头部组件
class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header back">
                <Link to='/city' className="city">
                    {this.props.cityName}
                    <i className="iconfont icon-xiangxiajiantou"></i>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    <SearchInput fn={this.toSearch}/>
                </div>
                <Link to='/login' className="profile">
                    <i className="iconfont icon-people_fill"></i>
                </Link>
            </div>
        )
    }

    toSearch = (value) => {
        this.props.history.push('/search/all/'+value)
    }
}

export default HomeHeader
