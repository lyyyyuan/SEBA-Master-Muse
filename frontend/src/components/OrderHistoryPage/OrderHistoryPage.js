import React, { Component } from 'react';
import Page from '../Common/Page';
import './OrderHistory.css';
import OrderHistoryCard from './OrderHistoryCard';

class OrderHistoryPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Page>
                {this.props.orders.map((order, i) => <OrderHistoryCard key={i} order={order}/>)}
            </Page>
        );
    }
}

export default OrderHistoryPage;