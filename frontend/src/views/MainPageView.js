"use strict";

import React from 'react';
import Carousel from 'nuka-carousel';

import Page from '../components/Common/Page'

export class MainPageView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Page>
                    <Carousel
                        autoplay={true}
                        cellAlign='center'
                        wrapAround={true}
                    >
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
                        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
                    </Carousel>
                </Page>
            </div>
        )
    }
}