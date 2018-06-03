"use strict";

const express  = require('express');
const router   = express.Router();

const CartController = require('../controllers/cart');

router.post('/item', CartController.addItemToCart); // Add an item to Cart
router.get('/:userId', CartController.listCart); // Read a Cart by name
router.delete('/item', CartController.removeItemFromCart); // Delete an item from cart



module.exports = router;