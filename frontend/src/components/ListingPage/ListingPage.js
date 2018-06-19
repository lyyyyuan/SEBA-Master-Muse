import React, { Component } from 'react';
import Page from '../Common/Page';
import ListingProductCard from '../ProductCard/ListingProductCard';
import PropTypes from 'prop-types';
import { TextField } from 'react-md';
import { Button, SelectionControl, FontIcon } from 'react-md';


class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.itemInfoRef = {};
        this.availableSizes = ['48 inch', '36 inch', '24 inch', '12 inch'];
        this.printingSizes = [];
        this.state = {};
    }

    getItemInfo = () => {
        const itemInfo = {};
        for (const key of Object.keys(this.itemInfoRef)) {
            const ref = this.itemInfoRef[key];
            if (ref instanceof TextField) {
                itemInfo[key] = ref.value;
            } else if (ref instanceof SelectionControl) {
                itemInfo[key] = ref.checked;
            }
        }
        return itemInfo;
    }

    addPrintingSize = (size) => {
        this.printingSizes.push(size);
        const newState = {};
        newState[size] = true;
        this.setState(newState);
    }

    removePrintingSize = (size) => {
        this.printingSizes.splice(this.printingSizes.indexOf(size), 1);
        const newState = {};
        newState[size] = false;
        this.setState(newState);
    }

    toggleButton = (size) => {
        if (this.printingSizes.includes(size)) {
            this.removePrintingSize(size);
        } else {
            this.addPrintingSize(size);
        }
    }

    render() {
        return (
            <Page>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <div style={{
                        padding: '0 100px'
                    }}>
                        <ListingProductCard />
                    </div>
                    <div>
                        <h2>Details</h2>
                        <form>
                            <TextField
                                id="floating-center-title"
                                label="Title"
                                lineDirection="center"
                                placeholder="Hello World"
                                className="md-cell md-cell--bottom"
                                ref={title => this.itemInfoRef.title = title}
                            />
                        </form>
                        <form>
                            <TextField
                                id="floating-center-title"
                                label="Description"
                                lineDirection="center"
                                placeholder="Hello World"
                                className="md-cell md-cell--bottom"
                                ref={desc => this.itemInfoRef.description = desc}
                            />
                        </form>
                        <div style={{
                            marginBottom: '20px'
                        }}>

                            <SelectionControl
                                type='checkbox'
                                id="checkbox-read-material-design-spec"
                                name="simple-checkboxes[]"
                                label="Digital Product"
                                ref={isDigital => this.itemInfoRef.isDigital = isDigital}
                            />
                        </div>
                        <h3>Printing Size Available</h3>
                        {this.availableSizes.map((size, i) => <Button
                            raised
                            onClick={() => this.toggleButton(size)}
                            key={i}
                            primary={this.state[size]}
                        >{size}</Button>)}
                        <form className="md-grid">
                            <TextField
                                id="floating-center-title"
                                label="Price"
                                lineDirection="center"
                                placeholder="Hello World"
                                className="md-cell md-cell--bottom"
                                leftIcon={<FontIcon>euro_symbol</FontIcon>}
                            />
                        </form>
                        <div style={{
                            marginTop: '20px'
                        }}>
                            <Button raised primary
                                onClick={() => {
                                    console.log(this.getItemInfo());
                                }}
                            >Submit</Button>
                        </div>

                    </div>
                </div>
            </Page>
        );
    }
}

ListingPage.propTypes = {};

export default ListingPage;
