import React, {Component} from 'react'
import {search} from '../../../fetch/search/index'
import SearchItem from "../../../components/SearchItem/index";

class SearchList extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            hasMore:true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length===0?<div></div>:
                        this.state.data.map((item,index)=>(
                            <SearchItem data={item} key={index}/>
                        ))
                }
            </div>
        )
    }

    componentDidMount() {
        let {kind,keyword} = this.props.SearchInfo;
        if (keyword){
            search(kind,keyword).then(res=>res.json()).then(data=>{
                this.setState({
                    data:data.data,
                    hasMore:data.hasMore
                })
            })
        }

    }

}
export default SearchList