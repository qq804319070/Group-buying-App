import React, {Component} from 'react'
import {getList} from '../../../fetch/home/index'
import ListComponent from "../../../components/ListComponent/index";
import './index.less'

class List extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,
            data: [],
            loading: true //是否正在加载
        }
    }

    componentDidMount() {
        getList(this.props.cityName, 0).then(res => res.json()).then(data => {
            this.setState({
                hasMore: data.hasMore,
                data: data.data,
                loading: false
            })
        });
    }


    loadMore = () => {
        if (this.state.loading === true) {
            return
        }
        console.log(1);
        this.setState({
            page: this.state.page + 1,
            loading: true
        }, () => {
            //这里获取最新的页码状态
            getList(this.props.cityName, this.state.page).then(res => res.json()).then(data => {
                this.setState({
                    hasMore: data.hasMore,
                    data: [...this.state.data, ...data.data],
                    loading: false
                })
            })
        })
    };

    render() {
        return (
            <div>
                {this.state.data.length === 0 ? "Loading..." :
                    <ListComponent list={this.state.data} hasMore={this.state.hasMore} loadMore={this.loadMore} loading={this.state.loading}/>
                }
            </div>
        )
    }
}

export default List
