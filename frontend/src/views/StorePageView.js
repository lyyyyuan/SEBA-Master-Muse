"use strict";
import React, { Component } from 'react';
import Store from '../components/StorePage/Store';
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
        const data = {
            labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
            datasets: [
                {
                    label: 'total number',
                    backgroundColor: 'rgba(192,192,192,0.5)',
                    borderColor: 'rgba(192,192,192,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(192,192,192,0.8)',
                    hoverBorderColor: 'rgba(192,192,192,1)',
                    data: this.state.stats.ratingDistribution
                }
            ]
        };
        return (
            <div>
                <Store
                    query={queryString.parse(this.props.location.search)}
                    items={this.state.items}
                    stats={this.state.stats}
                    data={data}
                />
            </div>
        )
    }
};
export default StorePageView;