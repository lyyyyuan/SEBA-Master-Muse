"use strict";

import React from 'react';
import './CustomerReviews.css';
import { Icon } from 'react-icons-kit';
import { user_circle } from 'react-icons-kit/ikons/user_circle';
import { ic_chevron_left } from 'react-icons-kit/md/ic_chevron_left';
import { ic_chevron_right } from 'react-icons-kit/md/ic_chevron_right';

class CustomerReviews extends React.Component {
    constructor(props) {
        super(props);

        const displayedComments = this.changeDisplayedComments(1);
        const totalPageNumber = Math.ceil(this.props.allComments.length / 10);

        this.setPaginationRef = element => {
            this.paginationRef  = element;
        };

        this.state = {
            allComments: this.props.allComments,
            displayedComments: displayedComments,
            totalRating: this.props.totalRating,
            totalPageNumber: totalPageNumber,
            currPageNumber: 1,
            disableChangePageButtons: false
        };

        this.changeDisplayedComments = this.changeDisplayedComments.bind(this);
        this.handleKeyPressPageNumber = this.handleKeyPressPageNumber.bind(this);
        this.handleChangePageNumber = this.handleChangePageNumber.bind(this);
        this.handleBlurPageNumber = this.handleBlurPageNumber.bind(this);
        this.handleFocusPageNumber = this.handleFocusPageNumber.bind(this);
        this.handleClickNextPage = this.handleClickNextPage.bind(this);
        this.handleClickPrevPage = this.handleClickPrevPage.bind(this);
        this.isPosInteger = this.isPosInteger.bind(this);
    }

    componentDidMount() {
        this.paginationRef.value = 1;
    }

    changeDisplayedComments(pageNumber) {
        const MAX_COMMENT_DISPLAY_COUNT = 10;
        const startIndex = (pageNumber - 1) * MAX_COMMENT_DISPLAY_COUNT;
        const endIndex = Math.min(startIndex + MAX_COMMENT_DISPLAY_COUNT, this.props.allComments.length);
        let displayedComments = [];
        for (let i = startIndex; i < endIndex; i++) {
            displayedComments.push(this.props.allComments[i]);
        }
        return displayedComments;
    }


    handleKeyPressPageNumber(event) {
        const e = event.nativeEvent;
        let target = event.target;

        if (e.keyCode === 13) {
            target.blur();
        }
    }

    handleChangePageNumber(event) {
        const e = event.nativeEvent;
        let target = event.target;

        if (this.isPosInteger(e.data)) {
            let value;
            if (target.value > this.state.totalPageNumber) {
                value = this.state.totalPageNumber;
                target.value = value;
            } else {
                value = target.value;
            }
            this.setState({
                currPageNumber: value
            })
        } else {
            if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
                this.setState({
                    currPageNumber: target.value
                })
            } else {
                target.value = this.state.currPageNumber;
            }
        }
    }

    handleBlurPageNumber(event) {
        const target = event.target;
        if (target.value === '') {
            target.focus();
        } else {
            const displayedComments = this.changeDisplayedComments(target.value);
            this.setState({
                currPageNumber: target.value,
                displayedComments: displayedComments,
                disableChangePageButtons: false
            });
        }
    }

    handleFocusPageNumber(event) {
        this.setState({
            disableChangePageButtons: true
        });
    }

    handleClickPrevPage() {
        const newPageNumber = this.state.currPageNumber - 1;
        this.paginationRef.value = newPageNumber;
        const displayedComments = this.changeDisplayedComments(newPageNumber);
        this.setState({
            currPageNumber: newPageNumber,
            displayedComments: displayedComments
        });
    }

    handleClickNextPage() {
        const newPageNumber = this.state.currPageNumber + 1;
        this.paginationRef.value = newPageNumber;
        const displayedComments = this.changeDisplayedComments(newPageNumber);
        this.setState({
            currPageNumber: newPageNumber,
            displayedComments: displayedComments
        });
    }

    isPosInteger(str) {
        let n = Math.floor(str);
        return n !== Infinity && String(n) === str && n >= 0;
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
                    <div className="commentPagination">
                        <button className="changePage prevPage" onClick={this.handleClickPrevPage}
                                disabled={this.state.currPageNumber <= 1 || this.state.disableChangePageButtons}>
                            <Icon icon={ic_chevron_left} size={24}/>
                        </button>
                        <span className="pagination">
                            <input className="pageNumber" type="text" name="currentPageNumber" ref={this.setPaginationRef}
                                   onChange={this.handleChangePageNumber} onKeyPress={this.handleKeyPressPageNumber}
                                   onBlur={this.handleBlurPageNumber} onFocus={this.handleFocusPageNumber}/>
                            <span className="totalPageNumber">
                                /&nbsp;&nbsp;&nbsp;{this.state.totalPageNumber}
                            </span>
                        </span>
                        <button className="changePage nextPage" onClick={this.handleClickNextPage}
                                disabled={this.state.currPageNumber >= this.state.totalPageNumber || this.state.disableChangePageButtons}>
                            <Icon icon={ic_chevron_right} size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomerReviews