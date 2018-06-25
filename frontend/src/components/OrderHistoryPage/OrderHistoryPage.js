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
                    <div key={i} className='history-card'>
                        <OrderHistoryCard order={order} />
                    </div>
                )}
            </Page>
        );
    }
}

export default OrderHistoryPage;