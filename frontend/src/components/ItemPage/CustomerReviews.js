"use strict";

import React from 'react';
import './CustomerReviews.css'

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }

    render() {

        return (
            <div>
                Customer Reviews
            </div>
        )
    }
}
export default CustomerReviews