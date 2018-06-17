'use strict';

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    revenue: {
        type: Number,
        default: 0,
    },
    visits: {
        type: Number,
        default: 0,
    },
    ratingCount: {
        type: Number,
        default: 0,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    items: {
        type: [
            {
                itemId: mongoose.SchemaTypes.ObjectId,
                stock: Number,
                _id: false,
            },
        ],
    },
});

StoreSchema.set('versionKey', false);

module.exports = mongoose.model('Store', StoreSchema);
