"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const BlogSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    title: {
        type: String,
        trim: true,
    },

    content: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        trim: true,
    },

    isPublish: {
        type: Boolean,
        default: true
    },
    isPublish: {
        type: Boolean,
        default: true
    },
    likes: {
        type: Number,
        default: false
    },
    countofVisitors: {
        type: Number,
        default: false
    },

}, {
    collection: 'blogs',
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);