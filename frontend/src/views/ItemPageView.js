"use strict";

import React from 'react';
import ItemPage from '../components/ItemPage/ItemPage';
import ItemService from '../services/ItemService';


export class ItemPageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            item: {},
        }
    }

    async componentDidMount() {
        const item = await ItemService.getItem(this.props.match.params.id);
        
        this.setState({
            loading: false,
            item
        })
    }



    render() {
        const { item, loading } = this.state;


        return (
            <div>
                {
                    !loading &&
                    <ItemPage item={item} />
                }
            </div>
        )
    }
}