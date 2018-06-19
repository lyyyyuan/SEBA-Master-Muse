"use strict";

import React from 'react';
import Recommendations from "./Recommendations";
import ItemDetails from "./ItemDetails";

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
            <div className="horizontalFlex">
                <Recommendations artistInfo={this.state.artistInfo} otherArtworksInfo={this.state.otherArtworksInfo} />
                <ItemDetails itemInfo={this.state.itemInfo} />
            </div>
        )
    }
}
export default ItemPageDetails