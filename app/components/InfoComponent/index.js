import React, {Component} from 'react'
import './index.less'
import Star from "../Star/index";
class InfoComponent extends Component {

    render() {
        let {img, desc, price, star, title, subTitle} = this.props.data;
        return (
            <div>
                <img src={img}/>
                <div>
                    <h3>{title}</h3>
                    <div>
                        <Star count={star}/>
                       <span>￥{price}</span>
                    </div>
                    <p>{subTitle}</p>
                </div>
                <div dangerouslySetInnerHTML={{__html:desc}}>
                </div>
            </div>
        )
    }
}
export default InfoComponent