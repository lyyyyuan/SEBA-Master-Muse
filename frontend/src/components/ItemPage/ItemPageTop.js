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
            artistInfo: this.props.artistInfo,
            basePrintingCostData: this.props.basePrintingCostData
        };

        this.handleClickGoToArtistHomepage = this.handleClickGoToArtistHomepage.bind(this);
        this.handleClickOpenArtistPic = this.handleClickOpenArtistPic.bind(this);
    }


    handleClickGoToArtistHomepage() {
        //TO-DO: Redirect to artist's homepage
    }

    handleClickOpenArtistPic() {
        //TO-DO: Open artist's pic
    }

    render() {
        return (
            <div className="horizontalFlex">
                <div className="sectionLeft">
                    <ItemPicsCarousel itemPics={this.state.itemPics}/>
                </div>
                <div className="sectionRight">
                    <div className="segment artistInfo">
                        <Icon className="artistIcon" size={56} icon={user_circle} onClick={this.handleClickOpenArtistPic}/>
                        <div className="artistText">
                            <div className="artistName" onClick={this.handleClickGoToArtistHomepage}>
                                {this.state.artistInfo.artistName}
                            </div>
                            <div className="artistTitle">
                                {this.state.artistInfo.artistTitle}
                            </div>
                        </div>
                    </div>
                    <div className="segment itemInfo">
                        <div className="itemTitle">
                            {this.state.itemInfo.name}
                        </div>
                        <div className="itemDescription">
                            {this.state.itemInfo.description}
                        </div>
                    </div>
                    <div className="segment purchaseOptions">
                        <PurchaseOptions itemInfo={this.state.itemInfo}
                                         basePrintingCostData={this.state.basePrintingCostData}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemPageTop