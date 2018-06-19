import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle, Media, FileInput } from 'react-md';
import Images from '../../Data/images';


const image = Images[0];

class ListingProductCard extends Component {


    render() {
        return (
            <div>
                <Card className="listing-card" raise>
                    <CardTitle
                        className='card-title'
                        title='Preview'
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                            width: '100%',
                        }}>
                            <span style={{
                                backgroundColor: 'white'
                            }}>

                                <FileInput id="image-input-1" label="Add Photo" accept="image/*" name="images" />
                            </span>
                        </div>
                    </CardTitle>
                    <Media aspectRatio='1-1'>
                        <img src={image} style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }} />
                        <div style={{
                            position: 'absolute',
                            right: '10px',
                            bottom: '10px'
                        }}>
                            <Button primary floating>cancel</Button>
                        </div>

                    </Media>
                </Card>
            </div>
        );
    }
}

ListingProductCard.propTypes = {};

export default ListingProductCard;
