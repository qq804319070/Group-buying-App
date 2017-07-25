import React, {Component} from 'react'
import './index.less'
class ChooseCity extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="city">
                <h3>选择城市</h3>
                <ul onClick={this.changeCity}>
                    <li>北京</li>
                    <li>上海</li>
                    <li>杭州</li>
                    <li>天津</li>
                    <li>武汉</li>
                    <li>长沙</li>
                    <li>广州</li>
                    <li>深圳</li>
                    <li>厦门</li>
                </ul>
            </div>
        )
    }

    changeCity = (e) => {
        let tag = e.target.tagName;

        if (tag === 'LI') {
            let val = e.target.innerText;
            this.props.changeCity(val)
            this.props.history.push('/')
        }

    }
}
export default ChooseCity