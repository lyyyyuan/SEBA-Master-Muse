import React, { Component } from 'react';
import queryString from 'query-string';
import SearchPage from '../components/SearchPage/SearchPage';


class SearchPageView extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <SearchPage query={queryString.parse(this.props.location.search)} />                
            </div>
        );
    }
}

export default SearchPageView;