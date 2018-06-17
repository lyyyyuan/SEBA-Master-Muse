"use strict";

import React from 'react';
import ItemPageHeader from "./ItemPageHeader";
import ItemPageTop from "./ItemPageTop";
import ItemPageDetails from "./ItemPageDetails";
import './ItemPage.css'

class ItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            MockItemData: {
                id: 1,
                name: "MacOS Mojave Wallpaper",
                price: 10,
                categories: ["Photography"],
                description: "This is the original HD photo file of the featured wallpaper " +
                "of Apple's latest installation of macOS Mojave, coming this September. " +
                "You're buying a copy of the original digital photo file. But you can also " +
                "have the photo printed out for you in the size that you prefer by selecting among" +
                "the corresponding size options below.",
                thumbnail: "Original HD photo file of the featured wallpaper of macOS Mojave.",
                isDigital: true,
                isPromoted: true,
                promotionEndDate: "2018-09-16",
                printingSize: ["12-inch", "24-inch", "36-inch", "48-inch"],
                ratingCount: 4,
                totalRating: 4,
                comments: [
                    {
                        comment: "I love this wallpaper and the hard copy I requested.",
                        username: "Captain America",
                        timestamp: "2018-06-15"
                    },
                    {
                        comment: "The printout looks good in my dorm room.",
                        username: "Iron Man",
                        timestamp: "2018-07-12"
                    }
                ]
            },
            MockArtistData: {
                artistName: "Apple",
                artistTitle: "Freelance photographer",
                artistInfo: "Apple Inc. is an American multinational technology company " +
                "headquartered in Cupertino, California, that designs, develops, " +
                "and sells consumer electronics, computer software, and online services.",
                otherArtworksIds: [2, 3, 4]
            },
            MockOtherArtworksData: [
                {
                    id: 2,
                    name: "MacOS High Sierra",
                    price: 10
                },
                {
                    id: 3,
                    name: "MacOS Sierra",
                    price: 10
                },
                {
                    id: 4,
                    name: "MacOS El Capitan",
                    price: 10
                }
            ],
            MockItemPicsData: [
                "https://9to5mac.files.wordpress.com/2018/06/mojave-day.jpg?quality=82&strip=all&w=981&h=552&zoom=2",
                "https://9to5mac.files.wordpress.com/2018/06/mojave-night.jpg?quality=82&strip=all&w=981&h=552&zoom=2"
            ]
        }

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="spacing">
                <ItemPageHeader />
                <ItemPageTop itemPics={this.state.MockItemPicsData}
                             itemInfo={this.state.MockItemPicsData}
                             artistInfo={this.state.MockArtistData}/>
                <ItemPageDetails />
            </div>
        )
    }


}
export default ItemPage