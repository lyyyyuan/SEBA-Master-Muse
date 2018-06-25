import React, { Component } from 'react';
import { Drawer, FontIcon, List, ListItem, Avatar, Divider } from 'react-md';
import DrawerHeader from '../Drawer/DrawerHeader';
import { withRouter } from 'react-router-dom';
import UserService from '../../services/UserService';


class CustomDrawer extends Component {
    itemList = [
        <ListItem
            key='3'
            leftAvatar={<Avatar icon={<FontIcon iconClassName='fa fa-shopping-cart'></FontIcon>} />}
            primaryText="Shopping Cart"
            onClick={() => { this.props.history.push('/cart') }}
        />,
        <ListItem
            key='4'
            leftAvatar={<Avatar icon={<FontIcon>history</FontIcon>} />}
            primaryText="Order History"
            onClick={() => { this.props.history.push('/orders') }}
        />,
        <Divider />,
        <ListItem
            key='1'
            leftAvatar={<Avatar icon={<FontIcon>add</FontIcon>} />}
            primaryText="List New Items"
            onClick={() => { this.props.history.push('/list') }}
        />,
        <ListItem
            key='2'
            leftAvatar={<Avatar icon={<FontIcon iconClassName='fa fa-store'></FontIcon>} />}
            primaryText="My Store"
            onClick={() => { this.props.history.push(`/store/${this.userId}`) }}
        />,
    ]


    constructor(props) {
        super(props);
        this.userId = UserService.getCurrentUser().id;
    }

    render() {
        return (
            <Drawer
                id='drawer'
                type={Drawer.DrawerTypes.TEMPORARY}
                visible={this.props.visibility}
                position='left'
                onVisibilityChange={this.props.onVisibilityChange}
                header={<DrawerHeader history={this.props.history} />}
                navItems={this.itemList}
            />
        );
    }
}

export default withRouter(CustomDrawer);