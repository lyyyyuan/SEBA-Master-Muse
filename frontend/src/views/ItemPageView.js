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
            artistData: {},
            otherItems: [],
        }
    }

    async componentDidMount() {
        const itemId = this.props.match.params.id;

        const [item, user] = await Promise.all([
            ItemService.getItem(itemId),
            ItemService.getArtist(itemId)
        ]);

        const artistData = {
            artistName: user.store.name,
            artistTitle: user.title,
            aboutArtist: user.store.about,
            totalRating: user.store.totalRating,
            otherArtworksIds: user.store.items.map(item => item.itemId),
            profilePicUrl: user.profilePicUrl,
        };

        const otherItems = await Promise.all(artistData.otherArtworksIds.map(
            itemId => ItemService.getItem(itemId)
        ));

        

        this.setState({
            loading: false,
            item,
            artistData,
            otherItems
        })
    }



    render() {
        const { item, loading, artistData, otherItems } = this.state;


        return (
            <div>
                {
                    !loading &&
                    <ItemPage item={item} artist={artistData} otherItems={otherItems} />
                }
            </div>
        )
    }
}