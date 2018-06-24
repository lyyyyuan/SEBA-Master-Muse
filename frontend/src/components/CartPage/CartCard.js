import React, { Component } from 'react';
import { Paper, Media, SelectionControl, Button, TextField } from 'react-md';
import './Cart.css';

class CartCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity
        }
    }

    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    onQuantityChange = (value) => {
        if (value < 2) {
            this.setState({
                quantity: 1
            });
        } else {
            this.setState({
                quantity: value
            })
        }
    }


    render() {
        return (
            <Paper
                zDepth={0}
                raiseOnHover={true}
                className='cart-card'
            >
                <div className='cart-content'>
                    <div className='vertical-center'>
                        <SelectionControl
                            type='checkbox'
                        />
                    </div>
                    <div className='thumbnail card-section'>
                        <Media aspectRatio='1-1'>
                            <img src={this.props.thumbnail} alt="thumbnail" />
                        </Media>
                    </div>
                    <div className='info card-section'>
                        <p className='cart-card-title'>{this.props.title}</p>
                        <p className='cart-card-description'>{this.props.description}</p>
                    </div>
                    <div className='price vertical-center'>
                        <b>{this.props.price}€</b>
                    </div>
                    <div className='vertical-center card-section'>
                        <div className='quantity-div'>
                            <Button icon 
                                disabled={this.state.quantity < 2}
                                onClick={this.decrementQuantity}
                            >arrow_left</Button>
                            <TextField
                                className='quantity-input'
                                type='number'
                                value={this.state.quantity}
                                onChange={this.onQuantityChange}
                            />
                            <Button icon
                                onClick={this.incrementQuantity}
                            >arrow_right</Button>
                        </div>
                    </div>
                    <div>
                        <Button primary icon>cancel</Button>
                    </div>
                </div>

            </Paper>
        );
    }
}

export default CartCard;