'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const middlewares = require('./middlewares');


const auth = require('./routes/auth');
const movie = require('./routes/movie');
const store = require('./routes/store');
const item = require('./routes/item');
const order = require('./routes/order');

const api = express();


// Adding Basic Middlewares
api.use(helmet());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));
api.use(middlewares.allowCrossDomain);


// Basic route
api.get('/', (req, res) => {
    res.json({
        name: 'SEBA Master Movie Backend',
    });
});

// API routes

api.use('/auth', auth);
api.use('/movies', movie);
api.use('/store', store);
api.use('/item', item);
api.use('/order', order);


module.exports = api;
