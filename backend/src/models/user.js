'use strict';

const mongoose = require('mongoose');

const Store = require('./store');

const StoreSchema = Store.schema;

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
});

UserSchema.set('versionKey', false);
UserSchema.set('timestamps', true);

// Export the Movie model
module.exports = mongoose.model('User', UserSchema);
