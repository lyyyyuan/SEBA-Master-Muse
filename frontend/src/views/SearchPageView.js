import React, { Component } from 'react';
import queryString from 'query-string';
import SearchPage from '../components/SearchPage/SearchPage';


class SearchPageView extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.location);
    }
    
    render() {
        return (
            <div>
                <SearchPage location={this.props.location} query={queryString.parse(this.props.location.search)} />
            </div>
        );
    }
}

export default SearchPageView;