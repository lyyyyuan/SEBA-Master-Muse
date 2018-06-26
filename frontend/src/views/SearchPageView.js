import React, {Component} from 'react';
import queryString from 'query-string';
import SearchPage from '../components/SearchPage/SearchPage';


class SearchPageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: queryString.parse(props.location.search)
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            query: queryString.parse(props.location.search)
        });
    }

    render() {
        return (
            <div>
                <SearchPage query={this.state.query}/>
            </div>
        );
    }
}

export default SearchPageView;