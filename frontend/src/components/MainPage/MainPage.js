import React, { Component } from 'react';
import Page from '../Common/Page'
import ProductCard from "../ProductCard/FrontPageProductCard";
import Images from '../../Data/images';
import MyCarousel from '../CustomCarousel/MyCarousel';
import './MainPage.css';
import ItemService from '../../services/ItemService';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotedItems: [],
            bestSellers: [],
            images: []
        };
    }
    

    async componentWillMount() {
        const [promotedItems, bestSellers] = await Promise.all([
            ItemService.getPromotedItems(),
            ItemService.getBestSellers(10)
        ]);

        this.setState({
            promotedItems,
            bestSellers,
            images: Images,
        })
    }

    render() {
        return (
            <div>
                <Page>
                    <div style={{
                        marginBottom: '24px'
                    }}>
                        <MyCarousel images={this.state.images} />
                    </div>
                    <h3 className='header' >Featured Art</h3>
                    <div className='display-grid'>
                        {this.state.promotedItems.map((data, index) => <ProductCard {...data} key={index} />)}
                    </div>
                    <h3 className='header'>Best Seller</h3>
                    <div className='display-grid'>
                        {this.state.bestSellers.map((data, index) => <ProductCard {...data} key={index} />)}
                    </div>
                </Page>
            </div>
        );
    }
}

export default MainPage;