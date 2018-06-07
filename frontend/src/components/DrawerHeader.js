import React, { Component } from 'react';

import { Avatar, FontIcon, Toolbar, Button } from 'react-md';
import UserService from '../services/UserService';


class DrawerHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    componentDidMount() {
        this.setState({
            isLoggedIn: UserService.isAuthenticated()
        })
    }

    toLogin = () => {
        this.props.history.push('/login');
    }

    render() {
        if (this.state.isLoggedIn) {

            const user = UserService.getCurrentUser();
            
            return (
                <Toolbar
                    nav={<Button
                        flat
                        primary
                        iconEl={<FontIcon iconClassName='fa fa-user'></FontIcon>}
                        style={{
                            width: '100%',
                        }}
                    >
                        {user.username}
                           </Button>}
                    className="md-divider-border md-divider-border--bottom"
                />
            );
        } else {
            return (
                <Toolbar
                    nav={<Button
                        flat
                        iconEl={<FontIcon iconClassName='fa fa-user'></FontIcon>}
                        style={{
                            width: '100%',
                            color: 'grey'
                        }}
                        onClick={this.toLogin}
                    >
                        Sign In Here
                           </Button>}
                    className="md-divider-border md-divider-border--bottom"
                />
            )
        }
    }
}

export default DrawerHeader;