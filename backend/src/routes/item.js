'use strict';

const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/item');

router.get('/', ItemController.getItems);
router.delete('/', ItemController.removeItem);
router.post('/', ItemController.addItem);
router.put('/', ItemController.updateItem);

module.exports = router;
