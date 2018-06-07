'use strict';

const mongoose = require('mongoose');

const Item = require('./item');
const Store = require('./store');
const Cart = require('./cart');

const ItemSchema = Item.schema;
const StoreSchema = Store.schema;
const CartSchema = Cart.schema;

// Define the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: String,
    gender: {
        type: String,
        enum: ['m', 'f'],
        // required: true,
    },
    age: Number,
    address: String,
    store: {
        type: StoreSchema,
        default: StoreSchema,
    },
    cart: {
        type: CartSchema,
        default: CartSchema,
    }
});

UserSchema.set('versionKey', false);
UserSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);