"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';
import { withRouter } from 'react-router-dom'
import CustomDrawer from '../Drawer/CustomDrawer';
import UserService from '../../services/UserService';
import SearchBar from "../SearchBar/SearchBar";

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
        window.location = '/'
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
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                zIndex: 9999
            }}>
                <CustomDrawer
                    visibility={this.state.drawerVisible}
                    onVisibilityChange={this.toggleDrawer}
                    history={this.props.history}
                />
                <Toolbar
                    colored
                    nav={<Button onClick={this.toggleDrawer} icon>menu</Button>}
                    children={
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%'
                        }}>
                        <Button
                                flat
                                onClick={this.toHome}
                                style={{
                                    fontSize: '25px',
                                    fontFamily: 'Merienda One',
                                    padding: '0'
                                }}
                            >{this.props.title}</Button>

                            <SearchBar />
                        </div>
                    }
                    actions={this.state.actionComponent}>
                </Toolbar>
            </div>
        );
    }
};

export default withRouter(Header);
