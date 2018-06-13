import React, { Component } from 'react';
import { Checkbox, Divider} from 'react-md';
import './SearchFilter.css'

const categories = {
    Subject: ['portrait', 'landscape'],
    Medium: ['oil', 'acrylic', 'Pastel'],
    "Art Style": ['classical', 'abstract', 'western']
}


class SearchFilter extends Component {

    constructor(props) {
        super(props);
    }

    renderCheckboxes = (categories) => {
        const rendered = [];
        let key = 0;

        for (let category of Object.keys(categories)) {
            rendered.push(<h3 key={key++} className='filter-header'>{category}</h3>);
            for (let subcategory of categories[category]){
                rendered.push(<Checkbox 
                    className='filter-checkbox'
                    key={key++}
                    id={'checkbox-'+subcategory}
                    name={subcategory}
                    label={subcategory}
                    value={subcategory}
                />)
            }
            rendered.push(<Divider />)
        }

        return rendered;
    }

    render() {
        return (
            <div className='filter-container'>
                {this.renderCheckboxes(categories)}
            </div>
        );
    }
}

export default SearchFilter;