"use strict";

import React from 'react';
import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}
export default CommentSection