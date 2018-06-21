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
            <div>
                Product Details
            </div>
        )
    }
}
export default ProductDetails