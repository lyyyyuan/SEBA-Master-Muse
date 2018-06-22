"use strict";

import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView } from './views/MovieDetailView';
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


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'MUSE',
            routes: [
                { component: MainPageView, path: '/', exact: true },
                { component: ItemPageView, path: '/item-details/:id' },
                { component: MovieDetailView, path: '/show/:id' },
                // {
                //     render: (props) => {
                //         if (UserService.isAuthenticated()) {
                //             return (<MovieFormView {...props} />)
                //         }
                //         else {
                //             return (<Redirect to={'/login'} />)
                //         }
                //     }, path: '/edit/:id'
                // },
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
                { component: StorePageView, path: '/store' },
                { component: CartPageView, path: '/cart'},
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

