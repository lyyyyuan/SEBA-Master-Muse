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
        this.state = {
            title: '',
            description: '',
            price: '',
            stock: '',
            thumbnail: '',
            categoryRows: [],
            categories: {},
            printingSizes: [],
            isDigital: true,
        }
        this.availableSizes = ['12 inch', '24 inch', '36 inch', '48 inch'];
    }

    componentWillReceiveProps(props) {
        if (!!props.item) {
            const categories = props.item.categories;

            for (const key of Object.keys(categories)) {
                this.addCategory(key, categories[key]);
            }

            this.setState(Object.assign({
                stock: props.stock,
            }, props.item));
        }
    }

    addPrintingSize = (size) => {
        this.state.printingSizes.push(size);
        this.setState(this.state);
    }

    removePrintingSize = (size) => {
        const { printingSizes } = this.state;
        printingSizes.splice(printingSizes.indexOf(size), 1);
        this.setState({ printingSizes });
    }

    toggleButton = (size) => {
        const { printingSizes } = this.state;
        if (printingSizes.includes(size)) {
            this.removePrintingSize(size);
        } else {
            this.addPrintingSize(size);
        }
    }

    onImageChange = (thumbnail) => {
        this.setState({
            thumbnail,
        });
    }

    removeCategory = (index, categoryClass, category) => {
        const rows = this.state.categoryRows;
        rows[index] = undefined;
        this.setState({
            categoryRows: rows
        });

        if (category !== '') {
            const { categories } = this.state;
            const categoryList = categories[categoryClass];
            categoryList.splice(categoryList.indexOf(category), 1);
            categories[categoryClass] = categoryList;
            this.setState({ categories });
        }
    }

    addCategory = (categoryClass, category) => {
        const rows = this.state.categoryRows;

        rows.push(
            <CategoryRow
                categories={categories}
                key={rows.length}
                index={rows.length}
                onCancel={this.removeCategory}
                onChange={this.onCategroyChange}
                categoryClass={categoryClass || ''}
                category={category || ''}
            />
        )

        this.setState({
            categoryRows: rows,
        });
    }

    onCategroyChange = (category) => {
        const { categories } = this.state;
        const key = Object.keys(category)[0];
        categories[key] = categories[key] || [];
        categories[key] = [...categories[key], ...category[key]];
        this.setState({ categories });
    };


    onSubmit = async () => {
        const { stock, categoryRows, ...itemInfo } = this.state;
        const userId = UserService.getCurrentUser().id;

        if (this.props.hasOwnProperty('itemId')) {
            await ItemService.updateItem(
                userId,
                this.props.itemId,
                itemInfo,
                stock
            );
        } else {
            await ItemService.addItem(
                userId,
                itemInfo,
                stock
            );
        }

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
                        <ListingProductCard onImageChange={this.onImageChange} image={this.state.thumbnail}/>
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
                                value={this.state.title}
                                onChange={(title) => { this.setState({ title }) }}
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
                                value={this.state.description}
                                onChange={description => { this.setState({ description }) }}
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
                                onChange={isDigital => this.setState({ isDigital })}
                            />
                        </div>
                        {this.state.isDigital &&
                            <div className='selector'>

                                <p className='label'>Printing Size Available</p>
                                {this.availableSizes.map((size, i) => <Button
                                    raised
                                    onClick={() => this.toggleButton(size)}
                                    key={i}
                                    primary={this.state.printingSizes.includes(size)}
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
                                value={this.state.price}
                                onChange={price => { this.setState({ price }) }}
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
                                value={this.state.stock}
                                onChange={stock => { this.setState({ stock }) }}
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

export default withRouter(ListingPage);
