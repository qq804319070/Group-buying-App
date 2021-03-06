import React, {Component} from 'react'
import './index.less'
class HeaderComponent extends Component {


    goBack = () => {
        if (this.props.back) {
            this.props.history.push(this.props.back)
        } else {
            this.props.history.go(-1)
        }
    };

    render() {
        return (
            <div className="back header-component">
                <i className="iconfont icon-xiangzuojiantou" onClick={this.goBack}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
}

export default HeaderComponent
