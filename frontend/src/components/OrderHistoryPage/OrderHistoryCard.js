import React, { Component } from 'react';
import './OrderHistory.css';
import { Media } from "react-md";
import { withRouter } from 'react-router-dom'

class OrderHistoryCard extends Component {
    constructor(props) {
        super(props);
        console.dir(props.order);
        this.redirect = {
            onClick: this.toDetails
        }
    }

    toDetails = () => {
        this.props.history.push(`/item-details/${this.props.item._id}`);
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
                    <div className='thumbnail order-section card-section'>
                        <Media aspectRatio='1-1'>
                            <img src={item.thumbnail} alt="thumbnail" />
                        </Media>
                    </div>
                    <div className='order-info order-section card-section'>
                        <div className='info-section'>
                            <p className='cart-card-title'>{item.title}</p>
                            <p className='cart-card-description'>{item.description}</p>
                        </div>
                    </div>
                    <div className='order-section item-info card-section'>
                        <div className='vertical-center section-label item-info-label'>
                            <p>Price</p>
                            <p>Quantity</p>
                        </div>
                        <div className='vertical-center item-info-detail'>
                            <p>{item.price}€</p>
                            <p>{quantity}</p>

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
                            <b>{item.price}€</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderHistoryCard;