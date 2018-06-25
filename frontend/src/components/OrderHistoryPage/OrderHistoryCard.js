import React, { Component } from 'react';
import './OrderHistory.css';
import { Media } from "react-md";
import { withRouter } from 'react-router-dom'

class OrderHistoryCard extends Component {
    constructor(props) {
        super(props);
        this.redirect = {
            onClick: this.toDetails
        }
    }

    toDetails = () => {
        this.props.history.push(`/item-details/${this.props.order.item._id}`);
    }

    render() {
        const { _id, item, quantity, status } = this.props.order;
        return (
            <div className='order-history-card'>
                <div className='card-header'>
                    <p className='order-number-tag'><b>Order Number:</b></p>
                    <p>{_id}</p>
                </div>
                <div className='card-body'>
                    <div className='thumbnail order-section card-section' {...this.redirect}>
                        <Media aspectRatio='1-1'>
                            <img src={item.thumbnail} alt="thumbnail" />
                        </Media>
                    </div>
                    <div className='order-info order-section card-section' {...this.redirect}>
                        <div className='info-section'>
                            <p className='cart-card-title'>{item.title}</p>
                            <p className='cart-card-description'>{item.description}</p>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div className='order-section flex-grow border-bottom'>
                            <div className='section-label'>
                                <p>Price</p>
                            </div>
                            <div className='section-content vertical-center'>
                                <p>{item.price}€</p>
                            </div>
                        </div>
                        <div className='order-section flex-grow'>
                            <div className='section-label'>
                                <p>Quantity</p>
                            </div>
                            <div className='section-content vertical-center'>
                                <p>{quantity}</p>
                            </div>

                        </div>
                    </div>
                    <div className='order-section card-section'>
                        <div className='section-label'>
                            <p>Order Status</p>
                        </div>
                        <div className='section-content vertical-center'>
                            <p><b>{status}</b></p>
                        </div>
                    </div>
                    <div className='order-section card-price'>
                        <div className='section-label'>
                            <p>Order Price</p>
                        </div>
                        <div className='vertical-center section-content'>
                            <b>{item.price * quantity}€</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(OrderHistoryCard);