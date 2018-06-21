"use strict";
import React, { Component } from 'react';
import Store from '../components/Store/Store';
import queryString from "query-string";
import StoreService from '../services/StoreService';
import UserService from '../services/UserService';

class StorePageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    async componentDidMount() {
        const items = await StoreService.listItems(
            UserService.getCurrentUser().id
        );

        this.setState({ items });
    }

    render() {
        return (
            <div>
                <Store
                    query={queryString.parse(this.props.location.search)}
                    items={this.state.items}
                />
            </div>
        )
    }
};
export default StorePageView;