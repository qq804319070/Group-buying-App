import React, {Component} from 'react'
import {getAd} from '../../../fetch/home/index'
import './index.less'
let img = [
    require('./img/1.png'),
    require('./img/2.png'),
    require('./img/3.png'),
    require('./img/4.png'),
    require('./img/5.png'),
    require('./img/6.png')
];

class Ad extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getAd().then(res => res.json()).then(data => {
            this.setState({
                data
            })
        })
    }

    render() {
        return (
            <div className="ad">
                {this.state.data.length === 0 ? '正在加载...' :
                    this.state.data.map((item, index) => {
                        return (
                            <a href={item.link} key={index}>
                                <img src={img[index]}/>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Ad
