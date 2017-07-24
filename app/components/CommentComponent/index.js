import React, {Component} from 'react'
import CommentItem from "../CommentItem/index";
import './index.less'
class CommentComponent extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
          {this.props.data.map((item,index)=>(
              <CommentItem data={item} key={index}/>
              ))}
      </div>
    )
  }

}

export default CommentComponent
