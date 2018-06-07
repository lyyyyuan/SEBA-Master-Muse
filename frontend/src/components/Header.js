"use strict";

import React from 'react';
import { Toolbar, Button, Drawer } from 'react-md';
import { withRouter } from 'react-router-dom'


import KebabMenu from './KebabMenu';


export class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerVisible: false
        }
    }

    handleVisibility = (drawerVisible) => {
        this.setState({ drawerVisible });
    };

    render() {
        return (
            <div>
                <Drawer
                    id='drawer'
                    type={Drawer.DrawerTypes.TEMPORARY}
                    visible={this.state.drawerVisible}
                    position='left'
                    onVisibilityChange={this.handleVisibility}

                />
                <Toolbar
                    colored
                    nav={<Button onClick={() => this.setState({ drawerVisible: !this.state.drawerVisible })} icon>menu</Button>}
                    title={this.props.title}
                    actions={<Button flat primary>Login</Button>}>
                </Toolbar>
            </div>
        );
    }
};
