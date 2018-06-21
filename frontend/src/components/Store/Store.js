import React, { Component } from 'react'
import './Store.css';
import Page from '../Common/Page';
import StoreCard from '../StoreCard/StoreCard'
import { Media } from 'react-md'
import Images from '../../Data/images';

const data = {
    labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
    datasets: [
        {
            label: 'total number',
            backgroundColor: 'rgba(192,192,192,0.5)',
            borderColor: 'rgba(192,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(192,192,192,0.8)',
            hoverBorderColor: 'rgba(192,192,192,1)',
            data: [65, 10, 80, 81, 56]
        }
    ]
};

const card = (key, item) =>
    <StoreCard key={key} title={item.title} image={item.thumbnail}
        category={Object.values(item.categories).toString()}
        stock={`${item.stock} in Stock`}
        rating={item.rating}
        price={item.price} data={data} />;

export default class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeCards: []
        };
    }

    componentWillReceiveProps(props) {
        const storeCards = props.items.map((item, i) => card(i, item));
        this.setState({ storeCards });
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
                                <img
                                    src='https://www.ienglishstatus.com/wp-content/uploads/2018/04/Anonymous-Whatsapp-profile-picture.jpg'
                                    role="presentation"
                                    style={{
                                        borderRadius: '50%'
                                    }}
                                />
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
                            {this.state.storeCards}
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}