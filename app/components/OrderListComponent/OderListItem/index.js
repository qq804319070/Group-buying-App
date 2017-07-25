import React, {Component} from 'react'
import './index.less'

class OrederListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentState: props.data.commentState
        }
    }

    handleComment = () => {
        this.setState({//改变状态为评价中
            commentState: 1
        })
    };
    handleCancelComment = () => {
        this.setState({
            commentState: 0
        })
    };

    render() {
        let {id, img, title, commentState, count, price} = this.props.data;
        return (<div>
                <div className="list">
                    <img src={img}/>
                    <div className="list-content">
                        <h3>商户: {title}</h3>
                        <span>数量: {count}</span>
                        <span>价格: {price}</span>
                    </div>
                    <div className="order-btn">
                        {
                            this.state.commentState === 0 ?
                                <button onClick={this.handleComment}>评价</button> :
                                this.state.commentState === 1 ? "" : <button className="unselect">已评价</button>
                        }
                    </div>
                </div>
                {
                    this.state.commentState === 1 ? <div className="comment-area">
                        <textarea ref='comment'></textarea>
                        <div>
                            <button onClick={this.commitComment}>确认评价</button>
                            <button onClick={this.handleCancelComment}>取消</button>
                        </div>
                    </div> : null
                }
            </div>
        )
    }

    changeState = () => {
      this.setState({
          commentState:2
      })
    };

    //确认提交
    commitComment = () => {
        let comment = this.refs.comment.value;
        this.props.commitComment(this.props.data.id, comment,this.changeState)
    }
}
export default OrederListItem