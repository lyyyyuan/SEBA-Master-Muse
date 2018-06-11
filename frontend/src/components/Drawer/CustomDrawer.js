import React, { Component } from 'react';
import { Drawer, FontIcon, List, ListItem, Avatar, Divider } from 'react-md';
import DrawerHeader from '../Drawer/DrawerHeader';


class CustomDrawer extends Component {
    itemList = [
        <ListItem
            key='1'
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            primaryText="Photos"
        />,
        <ListItem
            key='2'
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            primaryText="Recipes"
        />,
        <ListItem
            key='3'
            leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
            primaryText="Work"
        />,
        <Divider key='d' inset />,
        <ListItem
            key='4'
            leftAvatar={<Avatar suffix="blue" icon={<FontIcon>insert_drive_file</FontIcon>} />}
            primaryText="Vacation itinerary"
        />,
        <ListItem
            key='5'
            leftAvatar={<Avatar suffix="amber" icon={<FontIcon>insert_photo</FontIcon>} />}
            primaryText="Kitchen remodel"
        />
    ]


    constructor(props) {
        super(props);

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

export default CustomDrawer;