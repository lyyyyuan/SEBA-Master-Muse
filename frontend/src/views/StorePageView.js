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
            items: [],
            stats: {}
        };
    }

    async componentDidMount() {
        const currentUserId = UserService.getCurrentUser().id;
        const userId = this.props.match.params.id;
        const items = await StoreService.listItems(
            userId
        );
        const stats = await StoreService.getStats(
            userId
        )

        if (currentUserId !== userId) {
            StoreService.visit(userId);
        }

        this.setState({ items, stats });
    }

    render() {
        return (
            <div>
                <Store
                    query={queryString.parse(this.props.location.search)}
                    items={this.state.items}
                    stats={this.state.stats}
                />
            </div>
        )
    }
};
export default StorePageView;