'use strict';

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    buyerId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    deliveryMethod: String,
    status: {
        type: String,
        enum: ['inCart', 'Paid', 'Delivered'],
        default: 'inCart',
    },
});

OrderSchema.set('versionKey', false);

module.exports = mongoose.model('Order', OrderSchema);
