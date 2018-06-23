"use strict";

import React from 'react';
import './CustomerReviews.css';
import { Icon } from 'react-icons-kit';
import { user_circle } from 'react-icons-kit/ikons/user_circle';

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);

        const displayedComments = this.changeDisplayedComments(1);

        this.state = {
            allComments: this.props.allComments,
            displayedComments: displayedComments,
            totalRating: this.props.totalRating
        };

        this.changeDisplayedComments = this.changeDisplayedComments.bind(this);
    }

    changeDisplayedComments(pageNumber) {
        const MAX_COMMENT_DISPLAY_COUNT = 20;
        const startIndex = (pageNumber - 1) * MAX_COMMENT_DISPLAY_COUNT;
        const endIndex = Math.min(startIndex + 20, this.props.allComments.length);
        let displayedComments = [];
        for (let i = startIndex; i < endIndex; i++) {
            displayedComments.push(this.props.allComments[i]);
        }
        return displayedComments;
    }

    render() {

        return (
            <div className="customerReviewsContainer verticalFlex">
                {this.state.displayedComments.map((comment, index) =>
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
                <div className="commentPaginationWrapper">

                </div>
            </div>
        )
    }
}
export default CustomerReviews