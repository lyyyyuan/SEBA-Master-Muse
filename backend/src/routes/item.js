'use strict';

const express = require('express');
const router = express.Router();

const ItemController = require('../controllers/item');

router.get('/:id', ItemController.getItem);
router.delete('/', ItemController.removeItem);
router.post('/', ItemController.addItem);
router.put('/', ItemController.updateItem);
router.get('/', ItemController.findItems);
router.post('/promote', ItemController.promoteItem);
router.get('/promote/all', ItemController.getPromotedItems);
router.get('/bestsellers', ItemController.getBestSeller);

module.exports = router;
