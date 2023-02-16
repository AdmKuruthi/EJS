const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema({
   title: {
    type: String,
    required: true
   },
   post: {
    type: String,
    required: true
   }
});

module.exports = mongoose.model('blogPost', postSchema);