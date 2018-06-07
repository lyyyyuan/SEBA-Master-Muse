"use strict";

import React from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class MainPageView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header
                    title=''
                />
                <h3>Main Page Placeholder</h3>
                <Footer />
            </div>
        )
    }
}