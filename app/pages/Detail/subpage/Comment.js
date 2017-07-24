import React, {Component} from 'react'
import {getComment} from  '../../../fetch/detail/index'
import CommentComponent from "../../../components/CommentComponent/index";

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            data: [],
            hasMore: true,
            isLoading: true
        }
    }

    componentDidMount() {
        getComment(this.props.id, 0).then(res => res.json()).then(data => {
            this.setState({
                hasMore: data.hasMore,
                data: data.data,
                isLoading: false
            })
        });

        this.fn = () => {
            window.clearInterval(this.timer);
            this.timer = window.setTimeout(() => {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                let top = this.refs.scroll.getBoundingClientRect().top;//可以获取当前元素距离上下左右的距离
                if (top + 30 < clientHeight) {
                    this.loadMore()
                }
            }, 50);
        };
        window.addEventListener('scroll', this.fn);
    }

    loadMore = () => { //用来加载更多的方法
        this.setState({
            isLoading:true,
            page:this.state.page+1
        },()=>{
            getComment(this.props.id, 0).then(res => res.json()).then(data => {
                this.setState({
                    hasMore: data.hasMore,
                    data: [...this.state.data,...data.data],
                    isLoading: false
                })
            })
        })
    };

    render() {
        return (
            <div>
                {
                    this.state.data.length?
                        <CommentComponent
                            data={this.state.data}

                        />:
                        <div>正在加载...</div>
                }
                <div className="more"  ref="scroll">
                    {
                        this.state.hasMore ?
                            this.state.isLoading ? <div>加载中</div> : <div>加载更多</div> : <div>我是有底线的</div>
                    }
                </div>
            </div>
        )
    }
}

export default Comment
