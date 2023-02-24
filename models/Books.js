const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
    title: {
        type: String,
        minlength: 1,
        required: true
    },
    author: {
        type: String,
        minlength: 1,
        required: true
    }
})

module.exports = mongoose.model('Books', BooksSchema)