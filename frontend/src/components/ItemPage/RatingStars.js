"use strict";

import React from 'react';
import './RatingStars.css';

class RatingStars extends React.Component {
    constructor(props) {
        super(props);

        const MAX_STARS = 5;
        const tenths = this.props.totalRating * 10 % 10;
        const units = (this.props.totalRating - tenths / 10).toFixed(0);

        console.log(units);
        console.log(tenths);

        let starArray = [];
        for (let i = 0; i < units; i++) {
            starArray.push(10);
        }
        for (let i = MAX_STARS; i > units; i--) {
            if (i === MAX_STARS) {
                starArray.push(tenths);
            } else {
                starArray.push(0);
            }
        }

        this.state = {
            totalRating: this.props.totalRating,
            starArray: starArray
        };
    }

    getStarComponent(ratingValue, index) {
        switch (ratingValue) {
            case 0:
                return <StarEmpty key={index}/>;
            case 1:
                return <StarPointOne key={index}/>;
            case 2:
                return <StarPointTwo key={index}/>;
            case 3:
                return <StarPointThree key={index}/>;
            case 4:
                return <StarPointFour key={index}/>;
            case 5:
                return <StarPointFive key={index}/>;
            case 6:
                return <StarPointSix key={index}/>;
            case 7:
                return <StarPointSeven key={index}/>;
            case 8:
                return <StarPointEight key={index}/>;
            case 9:
                return <StarPointNine key={index}/>;
            case 10:
                return <StarFull key={index}/>;
        }
    }

    render() {

        return (
            <div className="ratingStarsContainer">
                {this.state.starArray.map((ratingValue, index) => this.getStarComponent(ratingValue, index))}
            </div>

        )
    }
}

export default RatingStars

const StarEmpty = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starEmpty">
                <stop offset="0%" stopColor="#faca51"/>
                <stop offset="0%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starEmpty)" strokeWidth="1" stroke="#faca51"/>
    </svg>;


const StarPointOne = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointOne">
                <stop offset="18%" stopColor="#faca51"/>
                <stop offset="18%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointOne)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointTwo = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointTwo">
                <stop offset="28%" stopColor="#faca51"/>
                <stop offset="28%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointTwo)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointThree = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointThree">
                <stop offset="37%" stopColor="#faca51"/>
                <stop offset="37%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointThree)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointFour = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointFour">
                <stop offset="45%" stopColor="#faca51"/>
                <stop offset="45%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointFour)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointFive = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointFive">
                <stop offset="50%" stopColor="#faca51"/>
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointFive)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointSix = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointSix">
                <stop offset="55%" stopColor="#faca51"/>
                <stop offset="55%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointSix)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointSeven = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointSeven">
                <stop offset="63%" stopColor="#faca51"/>
                <stop offset="63%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointSeven)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointEight = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointEight">
                <stop offset="72%" stopColor="#faca51"/>
                <stop offset="72%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointEight)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarPointNine = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starPointNine">
                <stop offset="82%" stopColor="#faca51"/>
                <stop offset="82%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starPointNine)" strokeWidth="1" stroke="#faca51"/>
    </svg>;

const StarFull = () =>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="star">
        <defs>
            <linearGradient id="starFull">
                <stop offset="100%" stopColor="#faca51"/>
                <stop offset="100%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
        </defs>
        <path d="M 15.000 20.000 L 20.878 23.090 L 19.755 16.545 L 24.511 11.910 L 17.939 10.955 L 15.000 5.000 L 12.061 10.955 L 5.489 11.910 L 10.245 16.545 L 9.122 23.090 L 15.000 20.000"
              fill="url(#starFull)" strokeWidth="1" stroke="#faca51"/>
    </svg>;