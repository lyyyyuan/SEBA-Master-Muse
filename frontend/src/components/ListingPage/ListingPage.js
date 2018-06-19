import React, { Component } from 'react';
import Page from '../Common/Page';
import ListingProductCard from '../ProductCard/ListingProductCard';
import PropTypes from 'prop-types';
import { TextField } from 'react-md';
import { Button, SelectionControl, FontIcon } from 'react-md';
import './ListingPage.css';


class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.itemInfoRef = {};
        this.availableSizes = ['48 inch', '36 inch', '24 inch', '12 inch'];
        this.printingSizes = [];
        this.state = {
            isDigital: true
        };
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
                        <div>
                            <TextField
                                id="floating-center-title"
                                label="Title"
                                lineDirection="center"
                                className="md-cell md-cell--bottom"
                                ref={title => this.itemInfoRef.title = title}
                            />
                        </div>
                        <div>
                            <TextField
                                id="floating-center-title"
                                label="Description"
                                lineDirection="center"
                                rows={1}
                                className="md-cell md-cell--bottom"
                                ref={desc => this.itemInfoRef.description = desc}
                            />
                        </div>
                        <div className='selector category-selector push-vertical'>
                            <div className='label category-label'>Categories</div>
                            <Button icon>add</Button>
                            
                        </div>
                        <div className='push-vertical'>
                            <SelectionControl
                                type='checkbox'
                                id="checkbox-read-material-design-spec"
                                name="simple-checkboxes[]"
                                label="Digital Product"
                                defaultChecked
                                ref={isDigital => this.itemInfoRef.isDigital = isDigital}
                                onChange={change => this.setState({isDigital: change})}
                            />
                        </div>
                        {this.state.isDigital &&
                            <div className='selector'>

                                <p className='label'>Printing Size Available</p>
                                {this.availableSizes.map((size, i) => <Button
                                    raised
                                    onClick={() => this.toggleButton(size)}
                                    key={i}
                                    primary={this.state[size]}
                                    className='size-buttons'
                                >{size}</Button>)}

                            </div>
                        }
                        <div>
                            <TextField
                                id="floating-center-title"
                                label="Price"
                                lineDirection="center"
                                className="md-cell md-cell--bottom"
                                leftIcon={<FontIcon>euro_symbol</FontIcon>}
                                ref={price => this.itemInfoRef.price = price}
                            />
                        </div>
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
