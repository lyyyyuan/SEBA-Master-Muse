"use strict";

import React from 'react';
import './Recommendations.css'

class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistInfo: this.props.artistInfo,
            otherArtworksInfo: this.props.otherArtworksInfo,
        }
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}
export default Recommendations