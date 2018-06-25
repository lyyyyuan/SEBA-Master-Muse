"use strict";

import React from 'react';

import Header from './Header';
import Footer from './Footer';


export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div style={{
                    overflow: 'hidden',
                    marginTop: '80px',
                    marginBottom: '40px',
                }}>

                    {this.props.children}
                  </div>
                <Footer />
            </div>
        );
    }
}
