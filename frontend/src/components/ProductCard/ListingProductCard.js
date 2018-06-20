import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardTitle, Media, FontIcon, DialogContainer, TextField } from 'react-md';

class ListingProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            dialogVisible: false,
            addPhotoDiabled: false,
        }
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
    }

    hideDialog = () => {
        this.setState({ dialogVisible: false });
    }

    onImageSet = () => {
        this.setState({ 
            image: this.imageRef.value, 
            dialogVisible: false,
        });

        

        if (this.imageRef.value !== '') {
            this.setState({
                addPhotoDiabled: true,
            })
        }
    }

    resetImage = () => {
        this.setState({
            image: '',
            addPhotoDiabled: false,
        })
    }

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
                                <Button flat primary onClick={this.showDialog} disabled={this.state.addPhotoDiabled}>Add Photo</Button>
                            </span>
                        </div>
                    </CardTitle>
                    {
                        this.state.image &&
                        <Media aspectRatio='1-1'>
                            <img src={this.state.image} style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%'
                            }} />
                            <div style={{
                                position: 'absolute',
                                right: '10px',
                                bottom: '10px'
                            }}>
                                <Button primary floating onClick={this.resetImage}>cancel</Button>
                            </div>

                        </Media>
                    }
                    <DialogContainer
                        id="simple-action-dialog"
                        visible={this.state.dialogVisible}
                        onHide={this.hideDialog}
                        actions={[
                            <Button flat secondary onClick={this.onImageSet}>Confirm</Button>,
                            <Button flat primary onClick={this.hideDialog}>Cancel</Button>
                        ]}
                        title="Change something?"
                    >
                        <TextField
                            id="simple-action-dialog-field"
                            label="Thumbnail"
                            placeholder="Enter Image URL"
                            ref={ref => this.imageRef = ref}
                        />
                    </DialogContainer>
                </Card>
            </div>
        );
    }
}

ListingProductCard.propTypes = {};

export default ListingProductCard;
