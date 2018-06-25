import React, { Component } from 'react';
import OrderService from '../services/OrderService';
import UserService from '../services/UserService';
import OrderHistoryPage from '../components/OrderHistoryPage/OrderHistoryPage';

class OrderHistoryView extends Component {
    constructor(props) {
        super(props);
        
    }

    async componentDidMount() {
        const userId = UserService.getCurrentUser().id;
        const orders = OrderService.listOrderHistory(userId);
    }
    
    render() {
        return (
            <div>
                <OrderHistoryPage />
            </div>
        );
    }
}

export default OrderHistoryView;