"use strict";

import React from 'react';
import Header from '../Common/Header';

class ItemPageHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ minHeight: '80px' }}>
                <Header title={document.title} />
            </div>
        )
    }
}
export default ItemPageHeader