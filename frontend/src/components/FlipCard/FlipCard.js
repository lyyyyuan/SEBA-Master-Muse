import React, {Component} from 'react'
import {pencil} from 'react-icons-kit/icomoon/pencil'
import Icon from 'react-icons-kit';
import {rocket} from 'react-icons-kit/icomoon/rocket'
import CardFlippable from 'react-card-flippable';
import CardFront from './CardFront'
import CardBack from './CardBack'
import {Card, CardText, CardTitle,Media} from 'react-md';
import RatingStar from '../RatingStar/RatingStar';
import {withRouter} from 'react-router-dom'
import DialogChart from '../DialogChart/DialogChart'

class FlipCard extends Component {
    constructor(props) {
        super(props);
        this.handlePromote = this.handlePromote.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {dialogVisible: false}

    }

    handlePromote() {
        this.setState({dialogVisible: true})
    }

    handleEdit() {
        this.props.history.push('/list')
    }

    render() {
        const back = <CardBack data={this.props.data} legendData={this.props.legenddata}/>;
        const front = <CardFront/>;
        return (
            <div className='flipcard-div' style={{
                borderStyle: 'solid',
                borderColor: 'coral',
            }}>
                <Card style={{width: '100%', height: '100%'}} raise>
                    <div className='icon'>
                        <Icon className='icon1' onClick={this.handlePromote} icon={rocket} size={22}/>
                        <CardTitle
                            className='card-title'
                            title={this.props.title}
                            subtitle={this.props.category}
                        />
                    </div>
                    <CardFlippable disableFlip={false} frontContent={front} backContent={back}/>
                    <CardText className='card-text'>
                        <RatingStar rating={this.props.rating}/>
                        <div>{this.props.stock}</div>
                        <div>{this.props.price}€
                            <Icon className='icon2' icon={pencil} size={22} onClick={this.handleEdit}/>
                        </div>
                    </CardText>
                </Card>
                <DialogChart visible={this.state.dialogVisible} onChange={(dialogVisible) => {this.setState({dialogVisible})}}/>
            </div>


        )
    }
}

export default withRouter(FlipCard)