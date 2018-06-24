import React, { Component } from 'react';
import { Paper, Media, SelectionControl, Button, TextField } from 'react-md';
import './Cart.css';
import equal from "deep-equal";

class CartCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity,
            isChecked: false,
        }
    }

    componentWillUpdate = (props, state) =>  {
        if (!equal(state, this.state)) {
            this.onStateChange(state);
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

    toggleCheckbox = () => {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    onStateChange = (state) => {
        this.props.onStateChange(this.props.index, state);
    }


    onRemove = () => {
        this.props.onRemove(this.props.index);
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
                            id={`checkbox-${this.props.index}`}
                            label=''
                            name={`checkbox-${this.props.index}`}
                            type='checkbox'
                            onChange={this.toggleCheckbox}
                            checked={this.state.isChecked}
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
                    <div className='card-price vertical-center'>
                        <b>{this.props.price}€</b>
                    </div>
                    <div className='vertical-center card-section'>
                        <div className='quantity-div'>
                            <Button icon
                                disabled={this.state.quantity < 2}
                                onClick={this.decrementQuantity}
                            >arrow_left</Button>
                            <TextField
                                id='quantity'
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
                        <Button primary icon onClick={this.onRemove}>cancel</Button>
                    </div>
                </div>

            </Paper>
        );
    }
}

export default CartCard;