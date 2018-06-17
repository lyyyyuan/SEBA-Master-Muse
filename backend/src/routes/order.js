'use strict';

const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order');

router.post('/cart', OrderController.addItemToCart);
router.delete('/cart', OrderController.removeItemFromCart);
router.get('/cart', OrderController.listCart);
router.get('/', OrderController.listOrderHistory);
router.post('/increment', OrderController.incrementOrderQuantity);
router.post('/decrement', OrderController.decrementOrderQuantity);
router.post('/pay', OrderController.payForOrder);
router.post('/deliver', OrderController.deliverOrder);

module.exports = router;
