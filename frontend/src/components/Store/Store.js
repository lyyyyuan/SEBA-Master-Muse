import React, { Component } from 'react'
import './Store.css';
import Page from '../Common/Page';
import FlipCard from '../FlipCard/FlipCard'
import { Media } from 'react-md'
import Images from '../../Data/images';

const data = [
    { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }
];
const legendData = [
    { name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }
];

const card = (key, image) => <FlipCard key={key} title='Title' image={image}
    category='Category'
    stock='10 in stock'
    rating='3.5'
    price='600' data={data} legenddata={legendData} />;

export default class Store extends Component {

    constructor(props) {
        super(props)
        this.state = {
            store: [],
            items: [],
        };
        this.card = Array.from(Array(12)).map((_, i) => card(i, Images[i % 5]))
    }

    render() {
        return (
            <Page>
                <div className='container'>
                    <div className='left'>
                        <div style={{
                            width: '100%',
                            textAlign: 'center',
                            padding: '5%'
                        }}>
                        <Media aspectRatio='1-1'>
                            <img src='https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg' role="presentation" />
                        </Media>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: '0 20%'
                        }}>
                            <div>
                                <p>Items Sold:</p>
                                <p>Revenue:</p>
                                <p>Store Visits:</p>
                                <p>Overall Rating:</p>
                            </div>
                            <div>
                                <p><b>50</b></p>
                                <p><b>200€</b></p>
                                <p><b>100</b></p>
                                <p><b>4.0</b></p>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='grid' style={{
                            marginLeft: '30px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gridGap: '10px',
                        }}>
                            {this.card}
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}