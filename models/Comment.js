const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require('./User');

const commentSchema = new Schema({
  author: { type : Schema.Types.ObjectId, ref: 'User' },
  text: String,
  adId: String
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
