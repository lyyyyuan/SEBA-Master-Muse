'use strict';

const express = require('express');
const router = express.Router();

const StoreController = require('../controllers/store');

router.post('/changeName', StoreController.changeName);
router.post('/visit', StoreController.visit);
router.post('/addRevenue', StoreController.addRevenue);
router.post('/rate', StoreController.rate);
router.get('/item/:userId', StoreController.listItems);
router.get('/stats/:userId', StoreController.storeStats);

module.exports = router;
