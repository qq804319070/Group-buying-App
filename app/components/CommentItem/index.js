import React, {Component} from 'react'
import Star from "../Star/index";
import './index.less'
class CommentItem extends Component {
  constructor(){
    super()
  }

  render() {
      let {username,comment,star} = this.props.data;
    return (
      <div className="comment-item">
          <div>
              <i className="iconfont icon-people_fill"></i>
              {username}
          </div>
          <Star count={star}/>
          <div>
              {comment}
          </div>
      </div>
    )
  }
}

export default CommentItem
