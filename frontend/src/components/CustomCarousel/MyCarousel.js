import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import CarouselElement from './CarouselElement';

class MyCarousel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Carousel
                    autoplay={true}
                    cellAlign='center'
                    wrapAround={true}
                >
                    {this.props.images.map((img, index) => <CarouselElement img={img} key={index} />)}

                </Carousel>
            </div>
        );
    }
}

export default MyCarousel;