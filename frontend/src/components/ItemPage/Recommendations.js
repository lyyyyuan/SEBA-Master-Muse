"use strict";

import React from 'react';
import './Recommendations.css'
import { Icon } from 'react-icons-kit'
import { user_circle } from 'react-icons-kit/ikons/user_circle'
class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistInfo: this.props.artistInfo,
            otherArtworksInfo: this.props.otherArtworksInfo,
        }
        this.handleClickGoToArtistHomepage = this.handleClickGoToArtistHomepage.bind(this);
        this.handleClickOpenArtistPic = this.handleClickOpenArtistPic.bind(this);
    }


    handleClickGoToArtistHomepage() {
        //TO-DO: Redirect to artist's homepage
    }

    handleClickOpenArtistPic() {
        //TO-DO: Open artist's pic
    }

    render() {

        return (
            <div className="recommendationsContainer">
                <div className="artistSummary">
                    <div className="segment artistInfo">
                        <Icon className="artistIcon" size={24} icon={user_circle} onClick={this.handleClickOpenArtistPic}/>
                        <div className="artistText">
                            <div className="artistName" onClick={this.handleClickGoToArtistHomepage}>
                                {this.state.artistInfo.artistName}
                            </div>
                            <div className="artistTitle">
                                {this.state.artistInfo.artistTitle}
                            </div>
                        </div>
                    </div>
                    <div className="segment aboutArtist">
                        {this.state.artistInfo.aboutArtist}
                    </div>
                    <div className="segment artistRating">
                        <span style={{color: '#03a9f4'}}>Rating Placeholder</span>
                    </div>
                </div>
                <div className="divider">
                    <div className="dividerText">
                        <div>Also from this Artist</div>
                    </div>
                    <span className="dividerDecoration"> </span>
                </div>
                <div className="otherArtworks">
                    {this.state.otherArtworksInfo.map(
                        (artwork, index) =>
                            <div className="otherArtworksItem" key={index}>
                                <div className="artworkTitle">{artwork.name}</div>
                                <div className="artworkImage"
                                     style={{ background: `url(${artwork.url}) no-repeat center`,
                                              backgroundSize: '100%', height: '279px',
                                              backgroundColor: 'rgba(245, 245, 245, 0.69)'}}>
                                </div>
                                <p className="artworkPrice">€{artwork.price.toFixed(2)}</p>
                            </div>
                    )}
                </div>

            </div>
        )
    }
}
export default Recommendations