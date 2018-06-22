"use strict";

import React from 'react';
import './ProductDetails.css';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo
        }
    }

    render() {

        return (
            <div className="productDetailsContainer">
                <div className="segment">
                    <span className="segmentHeader">Category: </span>
                    {this.state.itemInfo.categories.map((category, index) =>
                        <button key={index} className="category">{category}</button>
                    )}
                </div>
                <div className="segment">
                    <div className="segmentHeader">A few words from the artist:</div>
                    <div className="otherInfoText" dangerouslySetInnerHTML={{__html: this.state.itemInfo.otherInfo}}/>
                </div>
            </div>
        )
    }
}
export default ProductDetails