import React, {Component} from 'react'
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
import CurrentCity from "../../components/CurrentCity/index";
import * as Actions from '../../redux/actions/userInfo'
import ChooseCity from "../../components/ChooseCity/index";

class City extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="选择城市" history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市列表*/}
                <ChooseCity changeCity={this.changeCity} history={this.props.history}/>
            </div>
        )
    }

    changeCity = (city) => {
        //city代表当前选择城市组件选择后的结果
        let userInfo = this.props.userInfo;
        userInfo.cityName = city;
        this.props.update(userInfo);

    }

}
export default connect(
    state => ({
        userInfo: state.userInfo
    }),
    {
        ...Actions
    }
)(City)