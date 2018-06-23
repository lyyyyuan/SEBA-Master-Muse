"use strict";

import React from 'react';
import './CustomerReviews.css';
import { Icon } from 'react-icons-kit';
import { user_circle } from 'react-icons-kit/ikons/user_circle';

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
            <div className="customerReviewsContainer verticalFlex">
                {this.state.comments.map((comment, index) =>
                    <div key={index} className="commentContainer verticalFlex">
                        <div className="commentHeader horizontalFlex">
                            <div className="usernameWrapper">
                                <Icon size={12} icon={user_circle}/>
                                <div className="username">{comment.username}</div>
                            </div>
                            <div className="timestamp">
                                {comment.timestamp}
                            </div>
                        </div>
                        <div className="commentBody">
                            <div className="commentContent">
                                {comment.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default CustomerReviews