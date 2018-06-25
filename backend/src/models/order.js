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
    printingSize: String,
    status: {
        type: String,
        enum: ['inCart', 'Paid', 'Delivered'],
        default: 'inCart',
    },
});

OrderSchema.set('versionKey', false);
OrderSchema.set('timestamps', true);

module.exports = mongoose.model('Order', OrderSchema);
