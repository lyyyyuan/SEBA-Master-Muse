import React, { Component } from 'react';
import { Avatar, Button, Card, CardText, CardTitle, Media } from 'react-md';
import './ProductCard.css'
import RatingStar from '../RatingStar/RatingStar';

class AvatarProductCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className='card-div' style={{
                borderStyle: 'solid',
                borderColor: 'coral'
            }}>
                <Card className="avatar-card" raise>
                    <CardTitle
                        className='card-title'
                        title={this.props.title}
                        subtitle={this.props.category}
                        avatar={<Avatar src={this.props.avatar} role="presentation" />}
                    />
                    <Media aspectRatio='1-1'>
                        <img src={this.props.img} style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }} />
                    </Media>
                    <CardText>
                        <RatingStar rating={this.props.rating} />
                        <div>{this.props.artist}</div>
                        <div>{this.props.price}€</div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default AvatarProductCard;