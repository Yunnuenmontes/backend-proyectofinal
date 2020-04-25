const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const venueSchema = new Schema({
  name : String,
  address: String,
  openingHours : String,
  closingHours: String,
  cover: String,
  dressCode: String,
  musicStyles: [String],
  comments: [{ type : Schema.Types.ObjectId, ref: 'User' }],
  picture: String
});

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;
