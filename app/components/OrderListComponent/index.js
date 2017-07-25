import React, {Component} from 'react'
import OrederListItem from "./OderListItem/index";

class OrderListComponent extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
          <h3>订单列表</h3>
          {this.props.data.map((item,index)=>(
              <OrederListItem key={index} data={item} commitComment={this.props.commitComment}/>
          ))}
      </div>
    )
  }
}
export default OrderListComponent