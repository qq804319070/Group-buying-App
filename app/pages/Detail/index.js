import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/info";
import Comment from "./subpage/Comment";


// Detail是通过路由渲染的组件
//路由渲染的组件都会向props加很多属性
//如history
//

class Detail extends Component {
    constructor() {
        super()
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                {/*头部*/}
                <HeaderComponent title="商户详情" history={this.props.history}/>
                {/*商户信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买和收藏按钮*/}
                <Comment id={this.props.match.params.id}/>
                {/*评论*/}

            </div>
        )
    }
}
export default Detail