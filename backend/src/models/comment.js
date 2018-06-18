'use strict';

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    commenterId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

CommentSchema.set('timestamps', true);

module.exports = mongoose.model('Comment', CommentSchema);
