"use strict";

import React from 'react';
import { Toolbar, Button, Drawer } from 'react-md';
import { withRouter } from 'react-router-dom'
import DrawerHeader from './DrawerHeader';
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

    handleVisibility = (drawerVisible) => {
        this.setState({ drawerVisible });
    };

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

    render() {
        return (
            <div>
                <Drawer
                    id='drawer'
                    type={Drawer.DrawerTypes.TEMPORARY}
                    visible={this.state.drawerVisible}
                    position='left'
                    onVisibilityChange={this.handleVisibility}
                    header={<DrawerHeader history={this.props.history} />}
                />
                <Toolbar
                    colored
                    nav={<Button onClick={() => this.setState({ drawerVisible: !this.state.drawerVisible })} icon>menu</Button>}
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
