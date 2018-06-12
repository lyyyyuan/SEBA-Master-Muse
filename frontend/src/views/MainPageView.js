"use strict";

import React from 'react';
import MainPage from '../components/MainPage/MainPage';

export class MainPageView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainPage />
            </div>
        )
    }
}