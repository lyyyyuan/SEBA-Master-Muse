"use strict";

import React from 'react';
import './ItemDetails.css'
import ProductDetails from "./ProductDetails";
import CommentSection from "./CommentSection";

class ItemDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo,
            sliderStyle: {
                backgroundColor: '#f56d60',
                bottom: '0',
                height: '2px',
                width: '150px',
                left: '0',
                position: 'absolute',
                transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
                transition: 'transform 0.4s'
            }
        };
        this.handleClickTabSelection = this.handleClickTabSelection.bind(this);
    }

    handleClickTabSelection(index, event) {
        // move the tab indication slider
        const presetWidth = 150;
        const translateX = presetWidth * index;
        let sliderStyleCopy = JSON.parse(JSON.stringify(this.state.sliderStyle));
        sliderStyleCopy.transform = 'translateX(' + translateX + 'px)';
        this.setState({
            sliderStyle: sliderStyleCopy
        });

        // change the active tab style
        const target = event.target;
        const tabParent = target.parentElement;
        for (let i = 0; i < tabParent.children.length; i++) {
            if (tabParent.children[i].classList.contains('tab')) {
                if (i === index) {
                    tabParent.children[i].classList.add('active');
                } else {
                    tabParent.children[i].classList.remove('active');
                }
            }
        }

        // show the active tab's content
        const itemDetailsContainerNode = tabParent.parentElement.parentElement;
        for (let i = 0; i < itemDetailsContainerNode.children.length; i++) {
            if (itemDetailsContainerNode.children[i].classList.contains('wrapper')) {
                if (i === index + 1) {
                    itemDetailsContainerNode.children[i].classList.add('visible');
                } else {
                    itemDetailsContainerNode.children[i].classList.remove('visible');
                }
            }
        }
    }

    render() {

        return (
            <div className="itemDetailsContainer">
                <div className="tabNav">
                    <div className="tabs">
                        <div className="tab active" onClick={(e) => this.handleClickTabSelection(0, e)}>
                            Product Details
                        </div>
                        <div className="tab" onClick={(e) => this.handleClickTabSelection(1, e)}>
                            Buyer Comments
                        </div>
                        <span className="tabIndicationSlider" style={this.state.sliderStyle} />
                    </div>
                </div>
                <div className="wrapper productDetailsWrapper visible">
                    <ProductDetails itemInfo={this.state.itemInfo} />
                </div>
                <div className="wrapper commentSectionWrapper">
                    <CommentSection comments={this.state.itemInfo.comments} />
                </div>
            </div>
        )
    }
}
export default ItemDetails