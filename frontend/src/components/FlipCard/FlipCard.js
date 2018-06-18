import React, { Component } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { Card, CardText, CardTitle, Media, Button, Dialog } from 'react-md';
import RatingStar from '../RatingStar/RatingStar';
import { withRouter } from 'react-router-dom'
import DialogChart from '../DialogChart/DialogChart'

class FlipCard extends Component {
    constructor(props) {
        super(props);
        this.handlePromote = this.handlePromote.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {
            dialogVisible: false,
            chartVisible: false,
        }

    }

    handlePromote() {
        this.setState({ dialogVisible: true })
    }

    handleEdit() {
        this.props.history.push('/list')
    }

    render() {
        const back = <CardBack data={this.props.data} legendData={this.props.legenddata} />;
        const front = <CardFront />;
        return (
            <div style={{
                borderStyle: 'solid',
                borderColor: 'coral',
            }}>
                <Card raise>
                    <CardTitle
                        className='card-title'
                        title={this.props.title}
                        subtitle={this.props.category}
                    >
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row-reverse'
                        }}>
                            <Button icon iconClassName='fa fa-rocket' style={{
                                color: 'white'
                            }}
                                tooltipLabel='Promote'
                                onClick={this.handlePromote}
                            />
                        </div>
                    </CardTitle>
                    <Media aspectRatio='1-1'>
                        <img src={this.props.image} style={{
                            objectFit: 'cover',
                        }} />
                    </Media>
                    <CardText>
                        <div
                            onMouseEnter={() => { this.setState({ chartVisible: true }) }}
                            onMouseLeave={() => { this.setState({ chartVisible: false }) }}
                        >
                            <RatingStar rating={this.props.rating} />
                        </div>
                        <div style={{
                            position: 'relative',
                            zIndex: 10
                        }}>
                            {this.state.chartVisible &&
                                <Dialog
                                    style={{position: 'absolute'}}
                                    id="static-dialog"
                                    containFocus={false}
                                    aria-labelledby="static-dialog-title"
                                    className="md-background--card"
                                >
                                    <CardBack data={this.props.data} legendData={this.props.legenddata} />
                                </Dialog>
                            }
                        </div>
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
                                <Button icon onClick={this.handleEdit}>edit</Button>
                            </span>
                        </div>
                    </CardText>
                </Card>
                <DialogChart visible={this.state.dialogVisible} onChange={(dialogVisible) => { this.setState({ dialogVisible }) }} />
            </div>


        )
    }
}

export default withRouter(FlipCard)