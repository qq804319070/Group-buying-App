import React, {Component} from 'react';

class Star extends Component {
    constructor(props) {
        //props 就是传递过来的属性
        super();
        let ary = [];
        ary.length = 5;
        ary = [...ary];
        ary = ary.map((item, index) => {
            if (index + 1 <= props.count) {
                return true
            } else {
                return false
            }

        });
        this.state = {
            ary
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.ary.map((item, index) => {
                        return (
                            <i className={`iconfont ${item ? 'icon-xihuan font' : 'icon-xihuan1'}`} key={index}
                            ></i>
                        )
                    })
                }
            </div>
        )
    }
}
export default Star