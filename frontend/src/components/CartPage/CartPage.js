import React, { Component } from 'react';
import Page from '../Common/Page';
import CartCard from './CartCard';
import { Divider } from "react-md";
import './Cart.css';


const order = {
    thumbnail: 'data:image/jpeg;base64,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',
    quantity: 5,
    title: 'Art',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed volutpat nibh, sed rhoncus massa. Etiam vehicula lorem sed leo sodales pharetra. Donec ultricies bibendum erat sit amet eleifend. Duis nec nibh mi. Curabitur condimentum volutpat ex non lobortis. Vivamus sollicitudin velit fringilla nisi imperdiet venenatis. Ut varius ante sed massa condimentum facilisis. Proin lacinia pretium erat vel commodo. Praesent semper justo arcu, a consectetur justo feugiat auctor. Nulla at leo justo. Proin vel viverra augue, et pharetra purus. Integer condimentum elit nec lectus lobortis, at aliquet nisl gravida. Vestibulum pretium volutpat odio, nec auctor justo convallis eget.',
    price: 2000,
    quantity: 5,
}

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.orders = [order, order, order]
        this.state = {
            totalPrice: 0,
            orderState: [],
            orders: this.orders
        }

    }

    onStateChange = (index, state) => {
        const { orderState } = this.state;
        orderState[index] = state;
        const totalPrice = orderState.reduce(
            (prev, next, i) => {
                return next.isChecked ? prev + next.quantity * this.orders[i].price : 0
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
                    {this.orders.map((order, i) =>
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
                    </div>
                </Page>
            </div>
        );
    }
}

export default CartPage;