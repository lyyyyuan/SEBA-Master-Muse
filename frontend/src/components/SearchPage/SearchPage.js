import React, { Component } from 'react';
import Page from '../Common/Page';
import AvatarProductCard from '../ProductCard/AvatarProductCard';
import SearchFilter from './SearchFilter';

import Images from "../../Data/images";

const testCard = <AvatarProductCard
    avatar='https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg'
    img={Images[0]}
    rating='3.5'
    title='Title'
    category='Category'
    artist='Artist Name'
    price='600'
/>;

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.testCards = Array.from(Array(8)).map(i => testCard);
    }

    render() {
        return (
            <Page>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '40vh auto',
                    gridGap: '50px'
                }}>
                    <div style={{
                        borderRight: '3px solid grey',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'fixed',
                            top: '50%',
                        }}>
                            <SearchFilter />
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridGap: '10px',
                    }}>
                        {this.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}

export default SearchPage;