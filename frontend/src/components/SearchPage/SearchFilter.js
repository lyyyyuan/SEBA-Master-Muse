import React, { Component } from 'react';
import { Checkbox, Divider, Slider } from 'react-md';
import './SearchFilter.css'
import categories from '../../Data/categories';


class SearchFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryFilter: [],
        }
    }

    onCategoryChange = (isChecked, subcategory) => {
        const { categoryFilter } = this.state;
        if (isChecked) {
            categoryFilter.push(subcategory);
        } else {
            categoryFilter.splice(categoryFilter.indexOf(subcategory), 1);
        }

        this.setState({ categoryFilter });
        this.props.onFilterChange(this.state);
    }

    onPriceMinChange = (value) => {
        this.props.onPriceChange(value, this.props.maxPrice);
    }

    onPriceMaxChange = (value) => {
        this.props.onPriceChange(this.props.minPrice, value);
    }

    renderCheckboxes = (categories) => {
        const rendered = [];
        let key = 0;

        for (let category of Object.keys(categories)) {
            rendered.push(<h3 key={key++} className='filter-header'>{category}</h3>);
            for (let subcategory of categories[category]) {
                rendered.push(<Checkbox
                    className='filter-checkbox'
                    key={key++}
                    id={'checkbox-' + subcategory}
                    name={subcategory}
                    label={subcategory}
                    value={subcategory}
                    onChange={(isChecked) => this.onCategoryChange(isChecked, subcategory)}
                />)
            }
            rendered.push(<Divider key={key++} />)
        }

        return rendered;
    }

    render() {
        const {minPrice, maxPrice} = this.props;
        return (
            <div className='filter-container'>
                {this.renderCheckboxes(categories)}
                <h3 className='filter-header'>Minimum Price</h3>
                <Slider
                    editable
                    defaultValue={minPrice}
                    min={minPrice}
                    max={maxPrice}
                    id="continuous-plain-slider"
                    onChange={this.onPriceMinChange}
                />
                <Divider />
                <h3 className='filter-header'>Maximum Price</h3>
                <Slider
                    defaultValue={maxPrice}
                    min={minPrice}
                    max={maxPrice}
                    editable
                    id="continuous-plain-slider"
                    onChange={this.onPriceMaxChange} />
            </div>
        );
    }
}

export default SearchFilter;