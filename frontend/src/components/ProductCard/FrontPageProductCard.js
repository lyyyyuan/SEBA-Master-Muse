import React, { Component } from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay, Button } from "react-md";
import {withRouter} from 'react-router-dom';

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.onMouseLeave();
    }

    onMouseEnter = () => {
        this.setState({
            isMouseHover: true
        });
    }

    onMouseLeave = () => {
        this.setState({
            isMouseHover: false
        })
    }

    render() {
        return (
            <div className='clickables' 
            onClick={()=>{this.props.history.push(`/item-details/${this.props._id}`)}}
            >
                <Card>
                    <Media
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        aspectRatio='1-1'
                    >
                        <img src={this.props.thumbnail} alt="Nature from lorempixel" style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%'
                        }} />
                        {
                            this.state.isMouseHover &&
                            <MediaOverlay style={{
                                backgroundColor: 'rgba(244, 67, 54, 0.8)',
                            }}>
                                <CardTitle title={this.props.title} subtitle={this.props.price + '€'}>
                                    <Button className="md-cell--right" icon>star_outline</Button>
                                </CardTitle>
                            </MediaOverlay>
                        }
                    </Media>
                </Card>
            </div>
        );
    }
}

export default withRouter(ProductCard);