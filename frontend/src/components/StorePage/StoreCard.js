import React, { Component } from 'react';
import HorizontalChart from './HorizontalChart';
import { Card, CardText, CardTitle, Media, Button, DialogContainer, FontIcon } from 'react-md';
import RatingStar from '../RatingStar/RatingStar';
import { withRouter } from 'react-router-dom';
import DialogChart from './DialogChart';
import ItemService from '../../services/ItemService';

class StoreCard extends Component {
    constructor(props) {
        super(props);
        this.handlePromote = this.handlePromote.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            dialogVisible: false,
            chartVisible: false,
            isPromoted: props.isPromoted,
        }
    }

    promote = async () => {
        await ItemService.promoteItem(
            Date.now() + 86400000,
            this.props.id
        );

        this.setState({
            isPromoted: true
        })
    }

    handlePromote() {
        this.setState({ dialogVisible: true })
    }

    handleEdit() {
        this.props.history.push(`/edit/${this.props.id}`)
    }

    hideDialog = () => {
        this.setState({ chartVisible: false });
    }

    showDialog = () => {
        this.setState({ chartVisible: true });
    }

    render() {
        return (
            <div style={{
                borderStyle: 'solid',
                borderColor: 'coral',
            }}>

                <DialogContainer
                    id="static-dialog"
                    title='chart'
                    visible={this.state.chartVisible}
                    onHide={this.hideDialog}
                    focusOnMount={false}
                >
                    <HorizontalChart/>
                </DialogContainer>

                <Card raise>
                    <CardTitle
                        className='card-title'
                        title={this.props.title}
                        subtitle={this.props.category}
                        style={{
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            width: '50px',
                            position: 'absolute',
                            right: '10px'
                        }}>
                            {
                                this.state.isPromoted
                                    ? <Button icon iconClassName='fa fa-fire' 
                                    style={{color: 'white'}}
                                    tooltipLabel={`Promotion Ends: ${this.props.promotionEndDate.toLocaleString()}`}
                                    />
                                    :
                                    <Button icon iconClassName='fa fa-rocket' style={{
                                        color: 'white'
                                    }}
                                        tooltipLabel='Promote'
                                        onClick={this.handlePromote}
                                    />
                            }
                        </div>
                    </CardTitle>
                    <Media aspectRatio='1-1'>
                        <img src={this.props.image} style={{
                            objectFit: 'contain',
                        }} />
                    </Media>
                    <CardText>
                        {this.props.rating
                            ? <RatingStar rating={this.props.rating} />
                            : 'No Ratings'
                        }


                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <span>
                                <div>{this.props.stock}</div>
                                <div>{this.props.price}€</div>
                            </span>
                            <span>
                                <Button icon onClick={this.showDialog}
                                    tooltipLabel='show statistics'>trending_up</Button>
                                <Button icon onClick={this.handleEdit}>edit</Button>
                            </span>
                        </div>
                    </CardText>
                </Card>
                <DialogChart visible={this.state.dialogVisible}
                    onChange={(dialogVisible) => {
                        this.setState({ dialogVisible })
                    }}
                    onConfirm={this.promote}
                />
            </div>


        )
    }
}

export default withRouter(StoreCard)