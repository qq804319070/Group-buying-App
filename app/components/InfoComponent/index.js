import React, {Component} from 'react'
import './index.less'
import Star from "../Star/index";
class InfoComponent extends Component {

    render() {
        let {img, desc, price, star, title, subTitle} = this.props.data;
        return (
            <div className="info-component">
                <div className="info-list">
                    <img src={img}/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/>
                            <span>￥{price}</span>
                        </div>
                        <p>{subTitle}</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: desc}}></div>
            </div>
        )
    }
}

export default InfoComponent
