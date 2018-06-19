import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListingPage from "../components/ListingPage/ListingPage";

class ListingPageView extends Component {
    render() {
        return (
            < div >
                <ListingPage/>
            </div>
    )
        ;
    }
}

ListingPageView.propTypes = {};

export default ListingPageView;
