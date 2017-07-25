import React, {Component} from 'react'
import './index.less'
class CurrentCity extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="current-city">
                {this.props.cityName}
            </div>
        )
    }
}

export default CurrentCity
