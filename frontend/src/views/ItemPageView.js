"use strict";

import React from 'react';
import ItemPage from '../components/ItemPage/ItemPage';

export class ItemPageView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ItemPage itemId={this.props.match.params.id}/>
            </div>
        )
    }
}