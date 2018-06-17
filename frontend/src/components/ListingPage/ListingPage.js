import React, {Component} from 'react';
import Page from '../Common/Page';
import ListingProductCard from '../ProductCard/ListingProductCard';
import PropTypes from 'prop-types';
import { TextField } from 'react-md';
import { Button, SelectionControl, Checkbox } from 'react-md';


class ListingPage extends Component {
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
                        <ListingProductCard/>
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
                            />
                        </form>
                        <form>
                            <TextField
                                id="floating-center-title"
                                label="Description"
                                lineDirection="center"
                                placeholder="Hello World"
                                className="md-cell md-cell--bottom"
                            />
                        </form>
                        <div style={{
                            marginBottom: '20px'
                        }}>

                            <Checkbox
                                id="checkbox-read-material-design-spec"
                                name="simple-checkboxes[]"
                                label="Digital Product"
                                value="material-design"
                            />
                        </div>
                        <h3>Printing Size Available</h3>
                        <Button raised primary={false} onClick={() => {}}>48 inch</Button>
                        <Button raised>36 inch</Button>
                        <Button raised>24 inch</Button>
                        <Button raised>12 inch</Button>
                        <form className="md-grid">
                            <TextField
                                id="floating-center-title"
                                label="Price"
                                lineDirection="center"
                                placeholder="Hello World"
                                className="md-cell md-cell--bottom"
                            />
                        </form>
                        <div style={{
                            marginTop: '20px'
                        }}>
                            <Button raised primary>Submit</Button>
                        </div>

                    </div>
                </div>
            </Page>
        );
    }
}

ListingPage.propTypes = {};

export default ListingPage;
