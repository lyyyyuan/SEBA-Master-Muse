'use strict'

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: String,
    ratingCount: {
        type: Number,
        default: 0
    },
    totalRating: {
        type: Number,
        default: 0
    }
});

ItemSchema.set('versionKey', false);
ItemSchema.set('timestamps', true);

module.exports = mongoose.model('Item', ItemSchema);