"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { MovieFormView } from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { MainPageView } from './views/MainPageView';

import SearchPageView from "./views/SearchPageView";
import StorePageView from './views/StorePageView';
import UserService from "./services/UserService";
import { ItemPageView } from "./views/ItemPageView";
import ListingPageView from "./views/ListingPageView";
import CartPageView from './views/CartPageView';
import OrderHistoryView from './views/OrderHistoryView';


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'MUSE',
            routes: [
                { component: MainPageView, path: '/', exact: true },
                { component: ItemPageView, path: '/item-details/:id' },
                {
                    render: (props) => {
                        if (UserService.isAuthenticated()) {
                            return (<MovieFormView {...props} />)
                        }
                        else {
                            return (<Redirect to={'/login'} />)
                        }
                    }, path: '/add',
                },
                { component: ListingPageView, path: '/list' },
                { component: ListingPageView, path: '/edit/:id' },
                { component: UserLoginView, path: '/login' },
                { component: UserSignupView, path: '/register' },
                { component: SearchPageView, path: '/search' },
                { component: StorePageView, path: '/store/:id' },
                { component: CartPageView, path: '/cart'},
                { component: OrderHistoryView, path: '/orders'},
            ]
        };
    }

    componentDidMount() {
        document.title = this.state.title;
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route} />))}
                    </Switch>
                </Router>
            </div>
        );
    }
}

