import React, { Component } from 'react';
import CartPage from '../components/CartPage/CartPage';
import UserService from '../services/UserService';
import OrderService from '../services/OrderService';

class CartPageView extends Component {
    constructor(props) {
        super(props);
        this.userId = UserService.getCurrentUser().id;
        this.state = {
            orders: [],
            loading: true,
        }
    }

    async componentDidMount() {
        const orders = await OrderService.listCart(this.userId);
        this.setState({
            orders,
            loading: false
        });


    }

    render() {
        return (
            <div>
                {
                    !this.state.loading &&
                    <CartPage orders={this.state.orders} />
                }
            </div>
        );
    }
}

export default CartPageView;