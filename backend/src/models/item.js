'use strict';

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    categories: {
        type: mongoose.SchemaTypes.Mixed,
        required: true,
    },
    description: String,
    thumbnail: String,
    isDigital: {
        type: Boolean,
        default: true,
    },
    isPromoted: {
        type: Boolean,
        default: false,
    },
    promotionEndDate: Date,
    printingSizes: {
        type: [String],
    },
    comments: [mongoose.SchemaTypes.ObjectId],
    ratingCount: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
});

ItemSchema.set('versionKey', false);
ItemSchema.set('timestamps', true);

module.exports = mongoose.model('Item', ItemSchema);
