"use strict";
import './ItemPageTop.css'
import { Icon } from 'react-icons-kit'
import { user_circle } from 'react-icons-kit/ikons/user_circle'

import React from 'react';
import ItemPicsCarousel from "./ItemPicsCarousel";
import PurchaseOptions from "./PurchaseOptions";

class ItemPageTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPics: this.props.itemPics,
            itemInfo: this.props.itemInfo,
            artistInfo: this.props.artistInfo
        }
    }

    render() {
        return (
            <div className="topSection">
                <div className="sectionLeft">
                    <ItemPicsCarousel itemPics={this.state.itemPics}/>
                </div>
                <div className="sectionRight">
                    <div className="segment artistInfo">
                        <Icon className="artistIcon" size={56} icon={user_circle}/>
                        <div className="artistText">
                            <div className="artistName">
                                {this.state.artistInfo.artistName}
                            </div>
                            <div className="artistTitle">
                                {this.state.artistInfo.artistTitle}
                            </div>
                        </div>
                    </div>
                    <div className="segment itemTitle">

                    </div>
                    <div className="segment purchaseOptions">
                        <PurchaseOptions />
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemPageTop