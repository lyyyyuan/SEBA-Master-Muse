import React, { Component } from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay, Button } from "react-md";


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
            <div>
                <Card>
                    <Media
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
                        aspectRatio='1-1'
                    >
                        <img src={this.props.productImage} alt="Nature from lorempixel" style={{
                            objectFit: 'contain',
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

export default ProductCard;