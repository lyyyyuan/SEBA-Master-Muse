"use strict";

const express = require('express');
const router = express.Router();

const StoreController = require('../controllers/store');

router.post('/changeName', StoreController.changeName);
router.post('/visit', StoreController.visit);
router.post('/addRevenue', StoreController.addRevenue);
router.post('/rate', StoreController.rate);
router.post('/item', StoreController.addItem);
router.delete('/item', StoreController.removeItem);
router.put('/item', StoreController.updateItem);
router.get('/item/:userId', StoreController.listItems);

module.exports = router;