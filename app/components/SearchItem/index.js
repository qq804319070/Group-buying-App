import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SearchItem extends Component {
  constructor(){
    super();
  }

  render() {
      let {img, title, subTitle, distance, price, number, id} = this.props.data;
    return (
      <div>
          <div>
              <Link to={`/detail/${id}`}>
                  <div className="list-item">
                      <div>
                          <img src={img}/>
                      </div>
                      <div className="list-item-content">
                          <h3>{title}</h3>
                          <p>{subTitle}</p>
                          <div>
                              <strong>￥{price}</strong>
                              <span>已售{number}</span>
                          </div>
                          <span className="distance">{distance}</span>
                      </div>
                  </div>
              </Link>
          </div>
      </div>
    )
  }

}
export default SearchItem