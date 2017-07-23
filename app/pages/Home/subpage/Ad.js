import React, {Component} from 'react'
import {getAd} from '../../../fetch/home/index'
import './index.less'
class Ad extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getAd().then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                data
            })
        })
    }

    render() {
        return (
            <div className="ad">
                {this.state.data.length===0?'正在加载...':
                    this.state.data.map((item,index)=>{
                        return (
                        <a href={item.link} key={index}>
                            <img src={item.img}/>
                        </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Ad
