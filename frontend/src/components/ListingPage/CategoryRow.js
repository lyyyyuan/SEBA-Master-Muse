import React, { Component } from 'react';
import { SelectField, Button } from 'react-md';
import './CategoryRow.css';

class CategoryRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryClass: '',
            category: '',
        };

    }

    onCategoryClassChange = (value) => {
        this.setState({ categoryClass: value });
    }

    onCategoryChange = (value) => {
        this.setState({ category: value });
        const category = {};
        category[this.state.categoryClass] = value;
        this.props.onChange(category);
    }

    render() {
        return (
            <div className='row'>
                <div className='select-div'>
                    <SelectField
                        id="category-class"
                        placeholder="Category Type"
                        className="select-field"
                        value={this.state.categoryClass}
                        menuItems={Object.keys(this.props.categories)}
                        onChange={this.onCategoryClassChange}
                    />
                </div>
                <div className='select-div'>
                    {
                        this.state.categoryClass &&
                        <SelectField
                            id="category"
                            placeholder="Placeholder"
                            className="select-field"
                            menuItems={this.props.categories[this.state.categoryClass]}
                            value={this.state.category}
                            onChange={this.onCategoryChange}
                        />
                    }
                </div>
                <div>
                    <Button icon onClick={() => this.props.onCancel(this.props.index)}>cancel</Button>
                </div>

            </div>
        );
    }
}

export default CategoryRow;