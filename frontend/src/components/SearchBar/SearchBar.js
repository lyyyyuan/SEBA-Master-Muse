import React, { Component } from 'react';
import { Autocomplete, FontIcon } from "react-md";
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    // placeholder
    data = ['abc', 'bcd'];
    constructor(props){
        super(props)
    }
    componentWillMount = () => {
        this.setState({
            searchKeyword: ''
        })
    }

    onComplete = (suggestion, suggestionIndex, matches) => {
        this.search(suggestion);
    }

    onKeydown = (event) => {
        if (event.nativeEvent.key === 'Enter') {
            this.search(this.state.searchKeyword);
        }
    }

    onChange = (value, event) => {
        this.setState({
            searchKeyword: value
        })
    }

    search = (keyword) => {
        this.props.history.push(`/search?keyword=${keyword}`);
    }

    render() {
        return (
            <div style={{
                margin: 'auto',
                width: '70vh',
                display: 'flex',
                flexDirection: 'row',
            }}>
                <FontIcon
                    style={{
                        lineHeight: '40px',
                        fontSize: '30px'
                    }}
                >search</FontIcon>
                <Autocomplete
                    id='search-bar'
                    placeholder='Search Here'
                    data={this.data}
                    filter={Autocomplete.caseInsensitiveFilter}
                    onAutocomplete={this.onComplete}
                    onKeyDown={this.onKeydown}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default withRouter(SearchBar);