import React, {Component} from 'react'
import SearchInput from "../SearchInput/index";
import './index.less';

class SearchHeader extends Component {

    render() {
        return (
            <div className="back search-header">
                <i className="iconfont icon-xiangzuojiantou" onClick={() => this.props.history.go(-1)}></i>
                <div>
                    <i className="iconfont icon-sousuo"></i>
                    <SearchInput fn={this.props.toSearch} value={this.props.value}/>
                </div>
            </div>
        )
    }
}

export default SearchHeader
