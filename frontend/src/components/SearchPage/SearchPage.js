import React, { Component } from 'react';
import Page from '../Common/Page';
import AvatarProductCard from '../ProductCard/AvatarProductCard';
import SearchFilter from './SearchFilter';
import ItemService from '../../services/ItemService';
import './SearchPage.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            items: [],
        }
    }

    componentDidMount() {
       this.fetchData();
    }


    componentWillReceiveProps(props) {
        this.fetchData(props);
    }

    async fetchData(props) {
        const propsRef = props || this.props;
        const { keyword } = propsRef.query;
        const items = await ItemService.findItems(keyword);
        const artists = await Promise.all(items.map(item => ItemService.getArtist(item._id)));
        this.setState({
            loading: false,
            items,
            artists
        });
    }


    render() {
        const { loading, items, artists } = this.state;
        return (
            <Page>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr',
                    gridGap: '10px'
                }}>
                    <div style={{
                        borderRight: '3px solid grey',
                        position: 'fixed',
                        height: '90%',
                        left: 0,
                        top: '70px'
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            paddingRight: '10px',
                            paddingLeft: '10px'
                        }}>
                            <SearchFilter />
                        </div>
                    </div>
                    <div className='search-results'>
                        {
                            !loading &&
                            items.map((item, i) => <AvatarProductCard key={i} {...item} artist={artists[i].store.name} avatar={artists[i].profilePicUrl} />)
                        }
                    </div>
                </div>
            </Page>
        );
    }
}

export default SearchPage;