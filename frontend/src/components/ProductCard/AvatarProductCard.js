import React, { Component } from 'react';
import { Avatar, Button, Card, CardText, CardTitle, Media } from 'react-md';
import './ProductCard.css'
import RatingStar from '../RatingStar/RatingStar';
import {withRouter} from 'react-router-dom';

class AvatarProductCard extends Component {
    constructor(props) {
        super(props);
    }

    goToStore = () => {
        this.props.history.push(`/store/${this.props.artist._id}`)
    }

    render() {

        const {ratingCount, totalRating} = this.props;
        return (
            <div className='card-div' style={{
                borderStyle: 'solid',
                borderColor: 'coral',
                marginLeft: '10px',
                marginBottom: '10px',
                width: '300px',
            }}>
                <Card className="avatar-card" raise>
                    <CardTitle
                        className='card-title'
                        title={this.props.title}
                        avatar={<Avatar src={this.props.artist.profilePicUrl} role="presentation" />}
                    />
                    <Media aspectRatio='1-1'>
                        <img src={this.props.thumbnail} style={{
                            objectFit: 'contain',
                            width: '100%',
                            height: '100%'
                        }} />
                    </Media>
                    <CardText>
                        <RatingStar rating={ratingCount ? totalRating / ratingCount : 0} />
                        <div onClick={this.goToStore}>by <span style={{
                            color: 'red',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            fontFamily: 'Merienda One'
                        }}>{this.props.artist.store.name}</span></div>
                        <div style={{
                            color: 'grey'
                        }}>{this.props.price}€</div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default withRouter(AvatarProductCard);