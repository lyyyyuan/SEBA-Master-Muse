import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListingPage from "../components/ListingPage/ListingPage";
import ItemService from '../services/ItemService';
import StoreService from '../services/StoreService';
import UserService from '../services/UserService';

class ListingPageView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        if (!!id) {
            const item = await ItemService.getItem(id);
            const { stock } = await StoreService.getStock(UserService.getCurrentUser().id, id);

            this.setState({ item, stock, itemId: id })
        }
    }


    render() {
        return (
            < div >
                <ListingPage item={this.state.item} stock={this.state.stock} itemId={this.state.itemId} />
            </div>
        )
            ;
    }
}

ListingPageView.propTypes = {};

export default ListingPageView;
