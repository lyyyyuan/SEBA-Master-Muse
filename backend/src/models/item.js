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
    categories: {
        type: [String],
        required: true,
    },
    description: String,
    thumbnail: String,
    isDigital: Boolean,
    isPromoted: Boolean,
    printingSize: {
        type: String,
        enum: ['12-inch', '24-inch', '36-inch', '48-inch']
    },
    comments: [String],
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