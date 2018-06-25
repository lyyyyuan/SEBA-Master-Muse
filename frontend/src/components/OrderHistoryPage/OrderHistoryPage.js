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

                {this.props.orders.map((order, i) =>
                    <div className='history-card'>
                        <OrderHistoryCard key={i} order={order} />
                    </div>
                )}
            </Page>
        );
    }
}

export default OrderHistoryPage;