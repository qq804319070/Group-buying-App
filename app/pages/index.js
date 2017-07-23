import React, {Component} from 'react'
import RouterMap from "../routers/index";


//这个组件决定要显示哪个组件
class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    componentDidMount() {
        this.setState({
            done: true
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.done ? <RouterMap/> : <div>正在加载...</div>
                }
            </div>
        )
    }
}

export default App
