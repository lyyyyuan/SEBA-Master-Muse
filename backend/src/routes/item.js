'use strict';

const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/item');

router.get('/:id', ItemController.getItems);
router.delete('/', ItemController.removeItem);
router.post('/', ItemController.addItem);
router.put('/', ItemController.updateItem);
router.get('/', ItemController.findItems);
router.post('/promote', ItemController.promoteItem);

module.exports = router;
