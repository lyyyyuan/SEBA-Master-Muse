import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Page from '../Common/Page'
import ProductCard from "../ProductCard/ProductCard";
import Items from '../../Data/mockItem';
import Images from '../../Data/images';



class MainPage extends Component {
    componentWillMount() {
        this.setState({
            data: Items,
            images: Images,
        })
    }

    render() {
        return (
            <div>
                <Page>
                    <div style={{
                        marginTop: '64px'
                    }}>
                        <Carousel
                            autoplay={true}
                            cellAlign='center'
                            wrapAround={true}
                        >
                            {this.state.images.map((img, index) => <img src={img} key={index} style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '400px'
                            }} />)}

                        </Carousel>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gridGap: '10px',
                        marginTop: '24px',
                    }}>
                        {this.state.data.map((data, index) => <ProductCard {...data} key={index} />)}
                    </div>
                </Page>

            </div>
        );
    }
}

export default MainPage;