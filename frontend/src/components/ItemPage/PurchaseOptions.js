"use strict";

import React from 'react';
import { Button } from 'react-md';
import './PurchaseOptions.css';
import { Icon } from 'react-icons-kit';
import { plusRound, minusRound } from 'react-icons-kit/ionicons/';

class PurchaseOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: this.props.itemInfo,
            selectedPrintingSize: false,
            basePrintingCostData: this.props.basePrintingCostData,
            printingCost: 0,
            quantity: 1
        };
        this.setPrintingSizeItemsRef = element => {
            this.printingSizeItemsRef  = element;
        };

        this.handleClickPrintingSize = this.handleClickPrintingSize.bind(this);
        this.calculatePrintingCost = this.calculatePrintingCost.bind(this);
        this.handleActivePrintingSizeItem = this.handleActivePrintingSizeItem.bind(this);
        this.handleInputChangePrintingSize = this.handleInputChangePrintingSize.bind(this);
        this.handleInputBlurPrintingSize = this.handleInputBlurPrintingSize.bind(this);
        this.isNumeric = this.isNumeric.bind(this);
        this.handleClickQuantityMinus = this.handleClickQuantityMinus.bind(this);
        this.handleClickQuantityPlus = this.handleClickQuantityPlus.bind(this);
        this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
        this.handleClickBuyNow = this.handleClickBuyNow.bind(this);
    }

    handleClickPrintingSize(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() !== 'input') {
            this.setState({
                selectedPrintingSize: target.textContent.toLowerCase() === 'none' ? false : target.textContent,
                printingCost: target.textContent.toLowerCase() === 'none' ? 0 : this.calculatePrintingCost(target.textContent)
            });
        } else {
            this.setState(prevState => ({
                selectedPrintingSize: prevState.selectedPrintingSize === false ? true : prevState.selectedPrintingSize,
                printingCost: this.calculatePrintingCost(prevState.selectedPrintingSize === false ? 0 : target.value)
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

    handleInputChangePrintingSize(event) {
        const target = event.target;

        let value;

        if (this.isNumeric(target.value)) {
            // check for lower and upper limits
            if (target.value < 0) {
                value = 6;
            } else if (target.value > 100) {
                value = 100;
            } else {
                value = target.value;
            }
            // allow for up to 2 decimal places
            if (value.toString().includes('.')) {
                let decimalString = value.split('.')[1];
                if (decimalString.length > 2) {
                    value = this.state.selectedPrintingSize;
                } else {
                    value = target.value;
                }
            }
        } else {
            if (target.value === '') {
                value = true;
            } else {
                value = this.state.selectedPrintingSize;
            }
        }

        target.value = value === true ? '' : value;

        this.setState({
            selectedPrintingSize: value,
            printingCost: this.calculatePrintingCost(value === true ? 0 : value)
        });

    }

    handleInputBlurPrintingSize(event) {
        const target = event.target;
        if (this.isNumeric(target.value)) {

            if (target.value < 6) {
                target.value = 6;
                target.focus();
                this.setState({
                    selectedPrintingSize: target.value,
                    printingCost: this.calculatePrintingCost(target.value)
                })
            }

            if (target.value.charAt(target.value.length - 1) === '.') {
                target.value = target.value.substring(0, target.value.length - 1);
            }

        } else {
            if (target.classList.contains('selected')) {
                target.focus();
            }
        }


    }

    isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    handleClickQuantityPlus() {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1
        }))
    }

    handleClickQuantityMinus() {
        this.setState(prevState => ({
            quantity: prevState.quantity - 1
        }))
    }

    calculatePrintingCost(printingSize) {
        return this.state.basePrintingCostData.basePrice * ( +printingSize / this.state.basePrintingCostData.baseDimension );
    }

    handleClickAddToCart() {
        // TO-DO: Create an order object and pass to whatever global object
    }

    handleClickBuyNow() {
        // TO-DO: Redirect to order summary page
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
                        €{this.state.itemInfo.price.toFixed(2)}
                    </div>
                    {this.state.itemInfo.isDigital && this.state.selectedPrintingSize &&
                    <div className="printingCost">
                        + €{this.state.printingCost.toFixed(2)} printing cost
                    </div>
                    }
                    <div className="shippingCost">
                        + €{3.00.toFixed(2)} shipping cost
                    </div>
                    <div className="totalPrice">

                    </div>
                </div>
                <div className="segment options">
                    {this.state.itemInfo.isDigital &&
                    <div className="subSegment printing">
                        <div className="optionHeader">Printing Size (inch)</div>
                        <div className="optionBody printingSizeOptions" ref={this.setPrintingSizeItemsRef}>
                            <span className="printingSizeItem selected" onClick={this.handleClickPrintingSize}>
                                None
                            </span>
                            {printingSizeOptions}
                            <input type="number" name="customizePrintingSize" placeholder="Customize"
                                   min="0" max="100" className="printingSizeItem" onClick={this.handleClickPrintingSize}
                                   onChange={this.handleInputChangePrintingSize} onBlur={this.handleInputBlurPrintingSize}/>
                            <Button icon className="customizeTooltip" tooltipPosition="top"
                                    tooltipLabel="Enter a number 6 - 100, in up to 2 decimal places">
                                help
                            </Button>
                        </div>
                    </div>
                    }
                    <div className="subSegment quantity">
                        <div className="optionHeader">Quantity</div>
                        <div className="optionBody">
                            <button className="quantityPickerLeft" disabled={this.state.quantity <= 1}
                                    onClick={this.handleClickQuantityMinus}>
                            <Icon icon={minusRound}/>
                            </button>
                            <span className="quantityPickerCenter">
                                <input type="number" name="quantityPicker" min="1" max="5" value={this.state.quantity} readOnly="true"/>
                            </span>
                            <button className="quantityPickerRight" disabled={this.state.quantity >= 5}
                                    onClick={this.handleClickQuantityPlus}>
                                <Icon icon={plusRound}/>
                            </button>
                        </div>
                    </div>
                    <div className="subSegment buy">
                        <button className="addToCart" onClick={this.handleClickAddToCart}>
                            ADD TO CART
                        </button>
                        <button className="buyNow" onClick={this.handleClickBuyNow}>
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default PurchaseOptions