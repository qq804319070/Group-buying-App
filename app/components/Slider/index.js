import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import './index.less'

class Slider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    render() {
        let options = {
            continuous: true,
            callback: (index) => {
                this.setState({
                    index
                })
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={options}>
                    <div className="swiper">
                        <ul className="clear">
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                        </ul>
                    </div>
                    <div className="swiper">
                        <ul className="clear">
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                        </ul>
                    </div>
                    <div className="swiper">
                        <ul className="clear">
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                            <li>
                                <i className="iconfont icon-canyin"></i>
                                <span>美食</span>
                            </li>
                            <li>
                                <i className="iconfont icon-shehuade"></i>
                                <span>酒店</span>
                            </li>
                            <li>
                                <i className="iconfont icon-feiji"></i>
                                <span>旅游</span>
                            </li>
                            <li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="dot-wrap">
                    <ul className="dot clear">
                        <li className={this.state.index === 0 ? 'active' : null}></li>
                        <li className={this.state.index === 1 ? 'active' : null}></li>
                        <li className={this.state.index === 2 ? 'active' : null}></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Slider
