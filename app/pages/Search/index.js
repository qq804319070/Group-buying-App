import React, {Component} from 'react'
import SearchHeader from "../../components/SearchHearder/index";
import SearchList from "./subpage/SearchList";

class Search extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <SearchHeader
                    value={this.props.match.params.keyword || ""}
                    history={this.props.history}
                    toSearch={this.toSearch}
                />
                <SearchList SearchInfo={this.props.match.params}/>
            </div>
        )
    }

    toSearch = (value) => {
        this.props.history.push('/search/all/' + value);
    }
}

export default Search
