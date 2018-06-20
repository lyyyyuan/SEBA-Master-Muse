import React, {Component} from 'react'
import CardFront from './CardFront'
import HorizontalChart from './HorizontalChart'
import {Card, CardText, CardTitle, Media, Button, DialogContainer} from 'react-md';
import RatingStar from '../RatingStar/RatingStar';
import {withRouter} from 'react-router-dom'
import DialogChart from '../DialogChart/DialogChart'

class StoreCard extends Component {
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
        this.setState({dialogVisible: true})
    }

    handleEdit() {
        this.props.history.push('/list')
    }

    hideDialog = () => {
        this.setState({chartVisible: false});
    }

    showDialog = () => {
        this.setState({chartVisible: true});
    }

    render() {
        return (
            <div style={{
                borderStyle: 'solid',
                borderColor: 'coral',
            }}>

                <DialogContainer
                    id="static-dialog"
                    visible={this.state.chartVisible}
                    onHide={this.hideDialog}
                    focusOnMount={false}
                >
                    <HorizontalChart data={this.props.data}/>
                </DialogContainer>

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
                            objectFit: 'contain',
                        }}/>
                    </Media>
                    <CardText>

                        <RatingStar rating={this.props.rating}/>


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
                <DialogChart visible={this.state.dialogVisible} onChange={(dialogVisible) => {
                    this.setState({dialogVisible})
                }}/>
            </div>


        )
    }
}

export default withRouter(StoreCard)