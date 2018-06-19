import React, { Component } from 'react';

class ItemPicsCarouselElement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemPicsStyle = {
            background: `url(${this.props.url}) no-repeat center`,
            backgroundSize: '100%',
            height: '500px'
        };

        return (
            <header style={ itemPicsStyle }>
            </header>
        );
    }
}

export default ItemPicsCarouselElement;