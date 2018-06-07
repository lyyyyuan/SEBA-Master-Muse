import React, { Component } from 'react';
import { Drawer } from 'react-md';
import DrawerHeader from './DrawerHeader';


class CustomDrawer extends Component {
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

            />
        );
    }
}

export default CustomDrawer;