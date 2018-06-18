import React, {Component} from 'react'
import './Store.css';
import Page from '../Common/Page';
import FlipCard from '../FlipCard/FlipCard'

const data = [
    {x: 1, y: 2}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 4}, {x: 5, y: 5}
];
const legendData = [
    {name: "1"}, {name: "2"}, {name: "3"}, {name: "4"}, {name: "5"}
];

const card = (key) => <FlipCard key={key} title='Title'
                                category='Category'
                                stock='10 in stock'
                                rating='3.5'
                                price='600' data={data} legenddata={legendData}/>;
export default class Store extends Component {

    constructor(props) {
        super(props)
        this.state = {
            store: [],
            items: [],
        };
        this.card = Array.from(Array(12)).map((_, i) => card(i))
    }

    render() {
        return (
            <Page>
                <div className='container'>
                    <div className='left'>
                        <img src='https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
                             style={{width: '80%', height: '40%', paddingTop: '70px', paddingLeft: '10px'}}/>
                        <p style={{
                            paddingLeft: '10px',
                            fontSize: 'medium'
                        }}>{'Items sold: ' + this.state.store.ratingCount}</p>
                        <p style={{
                            paddingLeft: '10px',
                            fontSize: 'medium'
                        }}>{'Revenue: ' + this.state.store.revenue}</p>
                        <p style={{
                            paddingLeft: '10px',
                            fontSize: 'medium'
                        }}>{'Store visits: ' + this.state.store.visits}</p>
                        <p style={{
                            paddingLeft: '10px',
                            fontSize: 'medium'
                        }}>{'Overall rating: ' + this.state.store.totalRating}</p>
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