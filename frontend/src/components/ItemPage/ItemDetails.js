"use strict";

import React from 'react';
import './ItemDetails.css'
import ProductDetails from "./ProductDetails";
import CommentSection from "./CommentSection";

class ItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo
        }
    }

    render() {

        return (
            <div>
                <ProductDetails itemInfo={this.state.itemInfo} />
                <CommentSection comments={this.state.itemInfo.comments} />
            </div>
        )
    }
}
export default ItemDetails