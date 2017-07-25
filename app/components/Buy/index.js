import React, {Component} from 'react'
import './index.less'

class Buy extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="buy">
                <button onClick={this.handleStore}>{this.props.isStore ? "已收藏" : "收藏"}</button>
                <button onClick={this.props.buy}>购买</button>
            </div>
        )
    }

    handleStore = () => {
      this.props.store()
    }
}
export default Buy