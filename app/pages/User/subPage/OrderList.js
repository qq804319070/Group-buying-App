import React, {Component} from 'react'
import {getOrderList,postCommit} from '../../../fetch/orderList/index'
import OrderListComponent from "../../../components/OrderListComponent/index";

class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:"正在加载中...."
                }
            </div>
        )
    }

    componentDidMount() {
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })

    }
    //提交评价到后台
    commitComment(id,content,callback){ //内容商户ID callback更改评价状态
        // callback();
        postCommit({id,content}).then(res=>res.json()).then(data=>{
            callback();
            console.log(data);
        })
    }
}

export default OrderList
