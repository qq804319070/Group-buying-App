import React, {Component} from 'react'
import {getInfo} from '../../../fetch/detail/index'
import InfoComponent from "../../../components/InfoComponent/index";

class Info extends Component {
    constructor() {
        super();
        this.state = {
            data: false
        }
    }

    componentDidMount() {
        getInfo(this.props.id).then(res => res.json()).then(data => {
            this.setState({
                data
            })
        })
    }

    render() {
        return (
            <div>
                {!(this.state.data) ? <div>加载中...</div> : <InfoComponent data={this.state.data}/>}
            </div>
        )
    }
}

export default Info
