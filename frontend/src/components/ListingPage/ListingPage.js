import React, { Component } from 'react';
import Page from '../Common/Page';
import ListingProductCard from '../ProductCard/ListingProductCard';
import PropTypes from 'prop-types';
import { TextField } from 'react-md';
import { Button, SelectionControl, FontIcon } from 'react-md';
import './ListingPage.css';
import CategoryRow from './CategoryRow';
import categories from '../../Data/categories';
import ItemService from '../../services/ItemService';
import UserService from '../../services/UserService';
import { withRouter } from 'react-router-dom';

class ListingPage extends Component {
    constructor(props) {
        super(props);
        this.itemInfoRef = {};
        this.availableSizes = ['48 inch', '36 inch', '24 inch', '12 inch'];
        this.printingSizes = [];
        this.state = {
            isDigital: true,
            imageUrl: '',
            categories: [],
            categoryRows: [],
        };

    }

    onCategroyChange = (category, index) => {
        const { categories } = this.state;
        categories[index] = category;
        this.setState({ categories });
    };

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

    onImageChange = (imageUrl) => {
        this.setState({
            imageUrl,
        });
    }

    removeCategory = (key) => {
        const rows = this.state.categoryRows;
        rows[key] = undefined;
        this.setState({
            categoryRows: rows
        });
    }

    addCategory = () => {
        const rows = this.state.categoryRows;

        rows.push(
            <CategoryRow
                categories={categories}
                key={rows.length}
                index={rows.length}
                onCancel={this.removeCategory}
                onChange={this.onCategroyChange}
            />
        )

        this.setState({
            categoryRows: rows,
        });
    }


    onSubmit = async () => {
        const { stock, ...itemInfo } = this.getItemInfo();
        itemInfo.printingSizes = this.printingSizes;
        itemInfo.thumbnail = this.state.imageUrl;
        itemInfo.categories = this.state.categories.reduce((prev, next) => {
            return !!next ? [...prev, ...Object.values(next)] : prev;
        }, []);
        itemInfo.categories = [...new Set(itemInfo.categories)];

        await ItemService.addItem(
            UserService.getCurrentUser().id,
            itemInfo,
            stock
        );
        this.props.history.push('/store');
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
                        <ListingProductCard onImageChange={this.onImageChange} />
                    </div>
                    <div>
                        <h2>Details</h2>
                        <div>
                            <TextField
                                required
                                errorText="This field is required."
                                id="floating-center-title"
                                label="Title"
                                lineDirection="center"
                                className="md-cell md-cell--bottom"
                                ref={title => this.itemInfoRef.title = title}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                errorText="This field is required."
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
                            <Button icon onClick={this.addCategory}>add</Button>
                        </div>
                        <div>
                            {this.state.categoryRows}
                        </div>
                        <div className='push-vertical'>
                            <SelectionControl
                                type='checkbox'
                                id="checkbox-read-material-design-spec"
                                name="simple-checkboxes[]"
                                label="Digital Product"
                                defaultChecked
                                ref={isDigital => this.itemInfoRef.isDigital = isDigital}
                                onChange={change => this.setState({ isDigital: change })}
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
                                required
                                errorText="This field is required."
                                id="floating-center-title"
                                label="Price"
                                type='number'
                                lineDirection="center"
                                className="md-cell md-cell--bottom"
                                leftIcon={<FontIcon>euro_symbol</FontIcon>}
                                ref={price => this.itemInfoRef.price = price}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                errorText="This field is required."
                                id="floating-center-title"
                                label="Stock"
                                type='number'
                                lineDirection="center"
                                className="md-cell md-cell--bottom"
                                leftIcon={<FontIcon iconClassName='fa fa-warehouse'></FontIcon>}
                                ref={stock => this.itemInfoRef.stock = stock}
                            />
                        </div>
                        <div style={{
                            marginTop: '20px'
                        }}>
                            <Button raised primary
                                onClick={this.onSubmit}
                            >Submit</Button>
                        </div>

                    </div>
                </div>
            </Page>
        );
    }
}

ListingPage.propTypes = {};

export default withRouter(ListingPage);
