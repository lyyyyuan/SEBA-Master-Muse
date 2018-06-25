"use strict";

import React from 'react';
import './Recommendations.css';
import { Icon } from 'react-icons-kit';
import { user_circle } from 'react-icons-kit/ikons/user_circle';
import { arrowForward } from 'react-icons-kit/typicons/arrowForward';
import RatingStars from "./RatingStars";

class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artistInfo: this.props.artistInfo,
            otherArtworksInfo: this.props.otherArtworksInfo,
        };
        this.handleClickGoToArtistHomepage = this.handleClickGoToArtistHomepage.bind(this);
        this.handleClickOpenArtistPic = this.handleClickOpenArtistPic.bind(this);
        this.handleMouseEnterArtworkItem = this.handleMouseEnterArtworkItem.bind(this);
        this.handleMouseLeaveArtworkItem = this.handleMouseLeaveArtworkItem.bind(this);
        this.openInNewTab = this.openInNewTab.bind(this);
    }


    handleClickGoToArtistHomepage() {
        //TO-DO: Redirect to artist's homepage
    }

    handleClickOpenArtistPic() {
        //TO-DO: Open artist's pic
    }

    handleMouseEnterArtworkItem(event) {
        let target = event.target;
        if (target.className !== 'otherArtworksItem') {
            target = target.parentElement;
        }
        let children = target.children;
        for (let i = 0; i < children.length; i++) {
            if (i !== 2) {
                if (children[i].classList.contains('onRender')) {
                    children[i].classList.remove('onRender');
                }
                children[i].classList.add('visible');
            }
        }
    }

    handleMouseLeaveArtworkItem(event) {
        let target = event.target;
        if (target.className !== 'otherArtworksItem') {
            target = target.parentElement;
            let children = target.children;
            for (let i = 0; i < children.length; i++) {
                if (i !== 2) {
                    children[i].classList.remove('visible');
                }
            }
        }
    }

    openInNewTab(itemId) {
        const url = '#/item-details/' + itemId;
        window.open(url, "_blank");
    }

    render() {

        let artistProfilePicAvatar;
        if (this.state.artistInfo.profilePicUrl === '') {
            artistProfilePicAvatar  =
                <Icon className="artistIcon" size={36} icon={user_circle} onClick={this.handleClickOpenArtistPic}/>
        } else {
            artistProfilePicAvatar =
                <div className="avatarWrapper">
                    <img src={this.state.artistInfo.profilePicUrl} alt="Avatar" className="artistIcon avatar"/>
                </div>
        }

        return (
            <div className="recommendationsContainer">
                <div className="artistSummary">
                    <div className="segment artistInfo">
                        {artistProfilePicAvatar}
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
                        <span className="ratingByStars">
                            <RatingStars totalRating={this.state.artistInfo.totalRating}/>
                        </span>
                        <span className="ratingByScore">
                            <span className="ratingScore">{this.state.artistInfo.totalRating.toFixed(1)}</span>
                            <span className="ratingMaxScore">
                                /5.0
                            </span>
                        </span>
                    </div>
                </div>
                <div className="divider">
                    <div className="dividerText">
                        <div>Also from this Artist</div>
                    </div>
                    <span className="dividerDecoration"> </span>
                </div>
                <div className="otherArtworks">
                    {this.state.otherArtworksInfo.map((artwork, index) =>
                        <div className="otherArtworksItem" key={index}
                             onMouseEnter={this.handleMouseEnterArtworkItem}
                             onMouseLeave={this.handleMouseLeaveArtworkItem}>
                            <div className="layer onRender" onClick={this.openInNewTab.bind(this, artwork._id)}>
                                <Icon className="extLinkToItem" size={35} icon={arrowForward} />
                            </div>
                            <div className="artworkTitle onRender">{artwork.title}</div>
                            <div className="artworkImage" onClick={this.openInNewTab.bind(this, artwork._id)}
                                 style={{ background: `url(${artwork.thumbnail}) no-repeat center`,
                                          backgroundSize: '100%', height: '210px',
                                          backgroundColor: 'rgba(245, 245, 245, 0.69)'}}>
                            </div>
                            <div className="artworkPrice onRender">€{artwork.price.toFixed(2)}</div>
                        </div>
                    )}
                </div>

            </div>
        )
    }
}
export default Recommendations