"use strict";

import React from 'react';
import './ProductDetails.css';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo,
            artistInfo: this.props.artistInfo
        }
    }

    render() {

        return (
            <div className="productDetailsContainer">
                <div className="segment">
                    <span className="segmentHeader">Category: </span>
                    {Object.values(this.state.itemInfo.categories).map((category, index) =>
                        <button key={index} className="category">{category}</button>
                    )}
                </div>
                <div className="segment">
                    <div className="segmentHeader">Product Description:</div>
                    <div className="segmentBody">
                        {this.state.itemInfo.description}
                    </div>
                </div>
                <div className="segment">
                    <div className="segmentHeader">A few words from {this.state.artistInfo.artistName}:</div>
                    <div className="segmentBody" dangerouslySetInnerHTML={{__html: this.state.itemInfo.otherInfo}}/>
                </div>
            </div>
        )
    }
}
export default ProductDetails