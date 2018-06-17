import React, { Component } from 'react';

class ItemPicsCarouselElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemPicsStyle = {
            backgroundImage: `url(${this.props.url})`,
        };

        return (
            <header style={ itemPicsStyle }>
            </header>
        );
    }
}

export default ItemPicsCarouselElement;