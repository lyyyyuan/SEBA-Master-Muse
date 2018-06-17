import React, { Component } from 'react';
import './CarouselElement.css';

class CarouselElement extends Component {
    render() {
        return (
            <div>
                <header style={{
                    backgroundImage: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                      ),
                      url(${this.props.img})
                    `
                }}>
                    <div className="title">
                        <h1 style={{
                            color: 'white',
                            fontFamily: `'Source Sans Pro', sans-serif`,
                            fontSize: '3rem',
                            textTransform: 'uppercase'
                        }}>placeholder for featured ads</h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default CarouselElement;