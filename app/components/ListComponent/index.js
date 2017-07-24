import React, {Component} from 'react'
import Listitem from "./Listitem/index";
import './index.less'

class ListComponent extends Component {
    constructor() {
        super()
    }

    componentWillMount() {

        this.fn = () => {
            window.clearInterval(this.timer);
            this.timer = window.setTimeout(() => {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                let top = this.refs.scroll.getBoundingClientRect().top;//可以获取当前元素距离上下左右的距离
                if (top + 30 < clientHeight) {
                    this.props.loadMore()
                }
            }, 50);
        };
        window.addEventListener('scroll', this.fn);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.fn)
    }

    render() {
        return (
            <div>
                <h3 style={{paddingLeft: '4%', color: '#666', marginTop: '20px'}}>猜你喜欢</h3>
                {
                    this.props.list.map((item, index) => (
                        <Listitem key={index} data={item}/>
                    ))
                }
                <div className="more" onClick={() => this.props.loadMore()} ref="scroll">
                    {
                        this.props.hasMore ?
                            this.props.loading ? <div>加载中</div> : <div>加载更多</div> : <div>我是有底线的</div>
                    }
                </div>
            </div>
        )
    }
}

export default ListComponent
