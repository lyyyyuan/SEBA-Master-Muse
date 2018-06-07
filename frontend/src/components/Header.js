"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'
import CustomDrawer from './CustomDrawer';
import UserService from '../services/UserService';


class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerVisible: false,
            actionComponent: <Button flat primary onClick={this.toLogin}>Login</Button>
        }
    }

    componentDidMount() {
        if (UserService.isAuthenticated()) {
            this.setState({
                actionComponent: <Button flat primary onClick={this.logout}>Logout</Button>
            })
        }
    }


    toHome = () => {
        this.props.history.push('/');
    }

    toLogin = () => {
        this.props.history.push('/login');
    }

    logout = () => {
        UserService.logout();
        location.reload();
    }

    toggleDrawer = () => this.setState({ drawerVisible: !this.state.drawerVisible });

    render() {
        return (
            <div>
                <CustomDrawer 
                visibility={this.state.drawerVisible}
                onVisibilityChange={this.toggleDrawer}
                />
                <Toolbar
                    colored
                    nav={<Button onClick={this.toggleDrawer} icon>menu</Button>}
                    children={
                        <Button
                            flat 
                            onClick={this.toHome}
                            style={{
                                fontSize: '25px',
                                padding: '0'
                            }}
                        >{this.props.title}</Button>
                    }
                    actions={this.state.actionComponent}>
                </Toolbar>
            </div>
        );
    }
};

export default withRouter(Header);
