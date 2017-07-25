import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../pages/Home/index";
import Detail from "../pages/Detail/index";
import Login from "../pages/Login/index";
import User from "../pages/User/index";
import City from "../pages/City/index";
import Search from "../pages/Search/index";

class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/login/:route?' component={Login}/>
                    <Route path='/user' component={User}/>
                    <Route path='/city' component={City}/>
                    <Route path='/search/:kind/:keyword?' component={Search}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap
