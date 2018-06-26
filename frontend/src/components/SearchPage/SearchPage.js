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
            filters: {},
            filteredItems: [],
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
        let items = await ItemService.findItems(keyword);
        const artists = await Promise.all(items.map(item => ItemService.getArtist(item._id)));
        items = items.map((item, i) => {
            // item = item.toObject();
            item.artist = artists[i];
            return item;
        });
        this.setState({
            loading: false,
            items,
            filteredItems: items,
        });
    }

    filterCategory = (items, filters) => {
        const {categoryFilter} = filters;
        if (categoryFilter === undefined || categoryFilter.length === 0) return items;
        return items.filter(
            item => Object.values(item.categories).reduce(
                (prev, next) => categoryFilter.includes(next) || prev, false
            )
        );
    }

    filterItems = (filters) => {
        const {items} = this.state;
        const filteredItems = this.filterCategory(items, filters);
        this.setState({filteredItems});
    }

    onFilterChange = (filters) => { 
        this.setState({filters});
        this.filterItems(filters || {});
    }


    render() {
        const { loading, filteredItems} = this.state;
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
                            <SearchFilter onFilterChange={this.onFilterChange} />
                        </div>
                    </div>
                    <div className='search-results'>
                        {
                            !loading &&
                            filteredItems.map((item, i) => <AvatarProductCard 
                            key={i} 
                            {...item} 
                            />)
                        }
                    </div>
                </div>
            </Page>
        );
    }
}

export default SearchPage;