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
    //totalRating: {
      //  type: Number,
       // default: 0,
    //},
    about: String,
    items: {
        type: [
            {
                itemId: mongoose.SchemaTypes.ObjectId,
                stock: Number,
                _id: false,
                ratingDistribution:{
                    type:[Number],
                    default:[0,0,0,0,0]
                }
            },
        ],
    },
});

StoreSchema.set('versionKey', false);

module.exports = mongoose.model('Store', StoreSchema);
