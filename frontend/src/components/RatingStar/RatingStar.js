import React, { Component } from 'react';
import { FontIcon} from 'react-md';

class RatingStar extends Component {
    constructor(props) {
        super(props);
    }

    getStarArray(rating) {
        const floor = Math.floor(rating);
        const ratingArray = [];
        for (let i = 0; i < floor; i++) {
            ratingArray.push(1);
        }

        if (ratingArray.length < 5) {
            ratingArray.push(rating - floor);
        }

        while (ratingArray.length < 5) {
            ratingArray.push(0);
        }

        return ratingArray;
    }

    toStar(i, key) {
        switch(i) {
            case 1: return <FontIcon key={key}>star</FontIcon>
            case 0.5: return <FontIcon key={key}>star_half</FontIcon>
            case 0: return <FontIcon key={key}>star_border</FontIcon>
        }
    }
    
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                {this.getStarArray(this.props.rating).map((i, index) => this.toStar(i, index))}
            </div>
        );
    }
}


export default RatingStar;