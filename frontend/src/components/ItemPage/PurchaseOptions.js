"use strict";

import React from 'react';
import './PurchaseOptions.css'

class PurchaseOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo,
            selectedPrintingSize: false,
            basePrintingCostData: this.props.basePrintingCostData,
            printingCost: 0
        };
        this.setPrintingSizeItemsRef = element => {
            this.printingSizeItemsRef  = element;
        };

        this.handleClickPrintingSize = this.handleClickPrintingSize.bind(this);
        this.calculatePrintingCost = this.calculatePrintingCost.bind(this);
        this.handleActivePrintingSizeItem = this.handleActivePrintingSizeItem.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleClickPrintingSize(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() !== 'input') {
            const endIndex = target.textContent.match(/\D/).index;
            this.setState({
                selectedPrintingSize: target.textContent.toLowerCase() === 'none' ? false : target.textContent,
                printingCost: target.textContent.toLowerCase() === 'none' ? 0 : this.calculatePrintingCost(target.textContent.substring(0, endIndex))
            });
        } else {
            this.setState(prevState => ({
                selectedPrintingSize: prevState.selectedPrintingSize === false ? true : prevState.selectedPrintingSize,
                printingCost: this.calculatePrintingCost(0)
            }));
        }
        this.handleActivePrintingSizeItem(target.textContent, target.tagName.toLowerCase());
    }

    handleActivePrintingSizeItem(nodeText, nodeTagName) {
        for (let node of this.printingSizeItemsRef.children) {
            if (nodeTagName === node.tagName.toLowerCase()) {
                if (nodeTagName === 'span') {
                    if (nodeText === node.textContent) {
                        node.classList.add('selected');
                    } else {
                        node.classList.remove('selected');
                    }
                } else {
                    node.classList.add('selected');
                }
            } else {
                if (node.classList.contains('selected') ) {
                    node.classList.remove('selected');
                    if (node.tagName.toLowerCase() === 'input') {
                        node.value = '';
                        node.blur();
                    }
                }
            }
        }
    }

    handleInputChange(event) {
        const target = event.target;

        let value;
        // check for lower and upper limits
        if (parseFloat(target.value).toFixed(2) < 0.00) {
            value = 0;
        } else if (parseFloat(target.value).toFixed(2) > 100.00) {
            value = 100;
        } else {
            value = target.value;
        }
        // allow for up to 2 decimal places
        if (value.toString().includes('.')) {
            let decimalString = value.split('.')[1];
            if (decimalString.length > 2) {
                target.value = this.state.selectedPrintingSize;
                value = this.state.selectedPrintingSize;
            } else {
                value = target.value;
            }
        }
        target.value = value;

        this.setState({
            selectedPrintingSize: value,
            printingCost: this.calculatePrintingCost(value)
        });

    }

    handleInputBlur(event) {
        const target = event.target;
        if (target.classList.contains('selected')) {
            target.focus();
        }
    }

    calculatePrintingCost(printingSize) {
        return this.state.basePrintingCostData.basePrice * ( +printingSize / this.state.basePrintingCostData.baseDimension );
    }

    render() {

        const printingSizeOptions = this.state.itemInfo.printingSize.map(
            size => <span className="printingSizeItem" key={size} onClick={this.handleClickPrintingSize}>
                          {size}
                    </span>
        );

        return (
            <div className="purchaseOptions">
                <div className="segment price">
                    <div className="itemCost">
                        €{parseFloat(this.state.itemInfo.price.toString()).toFixed(2)}
                    </div>
                    {this.state.itemInfo.isDigital && this.state.selectedPrintingSize &&
                    <div className="printingCost">
                        + €{parseFloat(this.state.printingCost.toString()).toFixed(2)} printing cost
                    </div>
                    }
                    <div className="shippingCost">
                        + €{parseFloat('3.00').toFixed(2)} shipping cost
                    </div>
                    <div className="totalPrice">

                    </div>
                </div>
                <div className="segment options">
                    <div className="subSegment printing">
                        <div className="optionHeader">Printing Size</div>
                        <div className="optionBody printingSizeOptions" ref={this.setPrintingSizeItemsRef}>
                            <span className="printingSizeItem selected" onClick={this.handleClickPrintingSize}>
                                None
                            </span>
                            {printingSizeOptions}
                            <input type="number" name="customizePrintingSize" placeholder="Customize"
                                   min="0" max="100" title="Enter a number up to 2 d.p. in inches" className="printingSizeItem"
                                   onClick={this.handleClickPrintingSize} onChange={this.handleInputChange}
                                   onBlur={this.handleInputBlur}/>
                        </div>
                    </div>
                    <div className="subSegment quantity">
                        <div className="optionHeader">Quantity</div>
                        <div className="optionBody"> </div>
                    </div>
                    <div className="subSegment buy">
                        <button className="addToCart">
                            Add to cart
                        </button>
                        <button className="buyNow">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default PurchaseOptions