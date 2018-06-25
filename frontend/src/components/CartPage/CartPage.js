import React, { Component } from 'react';
import Page from '../Common/Page';
import CartCard from './CartCard';
import { Divider, Button } from "react-md";
import './Cart.css';

class CartPage extends Component {
    constructor(props) {
        super(props);
        console.log(props.orders);
        this.state = {
            totalPrice: 0,
            orderState: [],
            orders: props.orders
        }

    }

    onStateChange = (index, state) => {
        const { orderState } = this.state;
        orderState[index] = state;
        const totalPrice = orderState.reduce(
            (prev, next, i) => {
                return next.isChecked ? prev + next.quantity * this.state.orders[i].item.price : prev;
            }, 0)
        this.setState({
            orderState,
            totalPrice
        });
    }

    onRemove = (index) => {
        const { orderState, orders } = this.state;
        orderState.splice(index, 1);
        orders.splice(index, 1);
        this.setState({ orders, orderState });
    }

    render() {
        return (
            <div>
                <Page>
                    {this.state.orders.map((order, i) =>
                        <CartCard key={i} index={i}
                            onStateChange={this.onStateChange}
                            {...order}
                            onRemove={this.onRemove}
                        />
                    )}
                    <Divider />
                    <div className='total-price-div'>
                        <p className='total-price-label'>Total:</p>
                        <p className='total-price'>{this.state.totalPrice}€</p>
                        <div className='submit-div'>
                            <Button flat swapTheming primary>Pay</Button>
                        </div>
                    </div>
                </Page>
            </div>
        );
    }
}

export default CartPage;