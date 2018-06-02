'use strict';

const mongoose = require('mongoose');

const Item = require('./item');

const ItemSchema = Item.schema;

const CartSchema = new mongoose.Schema({
    orders: {
        type: [
            {
                itemId: {
                    type: mongoose.SchemaTypes.ObjectId,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                deliveryMethod: String,
                date: {
                    type: Date,
                    default: Date.now
                },
            }
        ]
    }
})


CartSchema.set('versionKey', false);

module.exports = mongoose.model('Cart', CartSchema);