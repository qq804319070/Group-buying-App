import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../pages/Home/index";
import Detail from "../pages/Detail/index";


class RouterMap extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/detail/:id' component={Detail}/>
                </Switch>
            </Router>
        )
    }
}

export default RouterMap
