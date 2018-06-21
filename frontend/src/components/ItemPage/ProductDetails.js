"use strict";

import React from 'react';
import './ProductDetails.css'

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
                <div>
                    <div>Category:</div>
                    <div>{this.state.itemInfo.categories.join(', ')}</div>
                </div>
                <div>
                    <div>A few words from the artist:</div>
                    <div className="otherInfoText" dangerouslySetInnerHTML={{__html: this.state.itemInfo.otherInfo}}/>
                </div>
            </div>
        )
    }
}
export default ProductDetails