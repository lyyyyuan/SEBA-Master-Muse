"use strict";

import React from 'react';
import Recommendations from "./Recommendations";
import ItemDetails from "./ItemDetails";
import './ItemPageDetails.css';

class ItemPageDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistInfo: this.props.artistInfo,
            otherArtworksInfo: this.props.otherArtworksInfo,
            itemInfo: this.props.itemInfo
        }
    }

    render() {
        return (
            <div className="itemPageDetailsContainer horizontalFlex">
                <div className="recommendationsWrapper">
                    <Recommendations artistInfo={this.state.artistInfo} otherArtworksInfo={this.state.otherArtworksInfo} />
                </div>
                <div className="itemDetailsWrapper">
                    <ItemDetails itemInfo={this.state.itemInfo} />
                </div>
            </div>
        )
    }
}
export default ItemPageDetails