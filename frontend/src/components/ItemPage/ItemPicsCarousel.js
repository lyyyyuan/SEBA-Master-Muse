"use strict";

import React from 'react';
import Carousel from 'nuka-carousel';
import ItemPicsCarouselElement from "./ItemPicsCarouselElement";

class ItemPicsCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Carousel>
                {this.props.itemPics.map((url, index) => <ItemPicsCarouselElement url={url} key={index} />)}
            </Carousel>
        )
    }
}
export default ItemPicsCarousel