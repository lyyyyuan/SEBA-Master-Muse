"use strict";

import React from 'react';
import Styled from 'styled-components';


class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <hr/>
                <p>© {new Date().getFullYear()} MUSE. All rights reserved.</p>
            </div>
        );
    }
}

const Footer = Styled(PlainFooter)`
    max-height: 35px;
    z-index: 9999;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: white;
    > p {
        text-align: center;
        margin-top: 4px;
    }
`;

export default Footer;