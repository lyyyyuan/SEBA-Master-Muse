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
                price: 10.00,
                categories: ["Photography"],
                description: "This is the original HD photo file of the featured wallpaper " +
                "of Apple's latest installation of macOS Mojave, coming this September. " +
                "You're buying a copy of the original digital photo file. But you can also " +
                "have the photo printed out for you in the size that you prefer by selecting among " +
                "the corresponding size options below.",
                thumbnail: "Original HD photo file of the featured wallpaper of macOS Mojave.",
                isDigital: true,
                hasPrintingOption: true,
                isPromoted: true,
                promotionEndDate: "2018-09-16",
                printingSize: ["12", "24", "36", "48"],
                ratingCount: 4,
                totalRating: 4,
                comments: [
                    {
                        content: "I love this wallpaper and the hard copy I requested.",
                        username: "Captain America",
                        timestamp: "2018-06-15"
                    },
                    {
                        content: "The printout looks good in my dorm room.",
                        username: "Iron Man",
                        timestamp: "2018-07-12"
                    }
                ]
            },
            MockArtistData: {
                artistName: "Apple",
                artistTitle: "Freelance photographer",
                aboutArtist: "Apple Inc. is an American multinational technology company " +
                "headquartered in Cupertino, California, that designs, develops, " +
                "and sells consumer electronics, computer software, and online services.",
                otherArtworksIds: [2, 3, 4]
            },
            MockOtherArtworksData: [
                {
                    id: 2,
                    name: "MacOS High Sierra",
                    price: 10,
                    url:"http://cdn.osxdaily.com/wp-content/uploads/2017/06/macos-high-sierra-default-wallpaper-fall-mountain-scene-1.jpg"
                },
                {
                    id: 3,
                    name: "MacOS Sierra",
                    price: 10,
                    url: "https://9to5mac.files.wordpress.com/2016/06/sierra.jpg"
                },
                {
                    id: 4,
                    name: "MacOS El Capitan",
                    price: 10,
                    url: "https://i0.wp.com/512pixels.net/downloads/macos-wallpapers-thumbs/10-11--thumb.jpg?zoom=2&w=640"
                }
            ],
            MockItemPicsData: [
                "https://9to5mac.files.wordpress.com/2018/06/mojave-day.jpg?quality=82&strip=all&w=981&h=552&zoom=2",
                "https://9to5mac.files.wordpress.com/2018/06/mojave-night.jpg?quality=82&strip=all&w=981&h=552&zoom=2"
            ],
            MockBasePrintingCostData: { // €1.00 per 12-inch (diagonal) for dummy e.g.
                basePrice: 1.00,
                baseDimension: 12
            }
        }

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="spacing">
                <ItemPageHeader />
                <div style={{width: '1117px', margin: '0 auto' }}>
                    <ItemPageTop itemPics={this.state.MockItemPicsData}
                                 itemInfo={this.state.MockItemData}
                                 artistInfo={this.state.MockArtistData}
                                 basePrintingCostData={this.state.MockBasePrintingCostData} />
                    <ItemPageDetails otherArtworksInfo={this.state.MockOtherArtworksData}
                                     itemInfo={this.state.MockItemData}
                                     artistInfo={this.state.MockArtistData} />
                </div>
            </div>
        )
    }


}
export default ItemPage