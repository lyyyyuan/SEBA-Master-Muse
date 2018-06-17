"use strict";
import React, {Component} from 'react';
import Store from '../components/Store/Store';
import queryString from "query-string";

class StorePageView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Store location={this.props.location} query={queryString.parse(this.props.location.search)}/>
            </div>
        )
    }
};
export default StorePageView;