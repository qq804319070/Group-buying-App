import React, {Component} from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from "../pages/Home/index";



class RouterMap extends Component {

  render() {
    return (
      <div>
          <Router>
              <div>
                  <Route path='/' component={Home}/>
              </div>
          </Router>
      </div>
    )
  }
}

export default RouterMap
