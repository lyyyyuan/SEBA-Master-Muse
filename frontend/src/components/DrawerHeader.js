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
                <div>
                    
                    <Toolbar
                        nav={<Avatar src='https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg' role="presentation" />}
                        title={user.username}
                        className="md-divider-border md-divider-border--bottom"
                    />
                </div>
            );
        } else {
            return (
                <Toolbar
                    nav={
                        <Button
                            icon
                            disabled
                            iconClassName='fa fa-user'
                            style={{
                                color: 'grey'
                            }}
                            
                        />
                    }
                    actions={
                        <Button
                            flat
                            primary
                            onClick={this.toLogin}
                        >
                            Please Sign In
                            </Button>
                    }
                    className="md-divider-border md-divider-border--bottom"
                />
            )
        }
    }
}

export default DrawerHeader;