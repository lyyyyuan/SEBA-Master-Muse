import React, { Component } from 'react';
import OrderService from '../services/OrderService';
import UserService from '../services/UserService';
import OrderHistoryPage from '../components/OrderHistoryPage/OrderHistoryPage';

class OrderHistoryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true,
        }
    }

    async componentDidMount() {
        const userId = UserService.getCurrentUser().id;
        const orders = await OrderService.listOrderHistory(userId);
        this.setState({
            orders,
            loading: false,
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.loading &&
                    <OrderHistoryPage  orders={this.state.orders}/>
                }
            </div>
        );
    }
}

export default OrderHistoryView;