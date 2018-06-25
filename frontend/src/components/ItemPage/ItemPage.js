"use strict";

import React from 'react';
import ItemPageHeader from "./ItemPageHeader";
import ItemPageTop from "./ItemPageTop";
import ItemPageDetails from "./ItemPageDetails";
import './ItemPage.css';
import PrintingCosts from '../../Data/printingCostData';

class ItemPage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="verticalFlex itemPageContainer">
                <ItemPageHeader />
                <div style={{width: '1117px', margin: '0 auto' }}>
                    <ItemPageTop itemPics={[this.props.item.thumbnail]}
                                 itemInfo={this.props.item}
                                 artistInfo={this.props.artist}
                                 basePrintingCostData={PrintingCosts} />
                    <ItemPageDetails otherArtworksInfo={this.props.otherItems}
                                     itemInfo={this.props.item}
                                     artistInfo={this.props.artist} />
                </div>
            </div>
        )
    }


}
export default ItemPage