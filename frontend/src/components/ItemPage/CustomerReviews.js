"use strict";

import React from 'react';
import './CustomerReviews.css'
import RatingStars from "./RatingStars";

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
            totalRating: this.props.totalRating
        };
    }

    render() {

        return (
            <div className="customerReviewsContainer">
                <RatingStars totalRating={this.state.totalRating}/>
            </div>
        )
    }
}
export default CustomerReviews