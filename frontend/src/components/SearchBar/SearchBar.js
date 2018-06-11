import React, { Component } from 'react';
import { Autocomplete, FontIcon } from "react-md";

class SearchBar extends Component {
    // placeholder
    data = ['abc', 'bcd'];

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
                />
            </div>
        );
    }
}

export default SearchBar;