const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const anuncioSchema = new Schema({

  author: { type : Schema.Types.ObjectId, ref: 'User' },
  category: {
    type: String,
    required: true,
    enum: ['pets', 'services', 'shop', 'market', 'food', 'education', 'electronics', 'others']
  },
  
  nameContact: {
    type: String,
    required: true
  },
  imagenIfe:{
    type: String,
    required: true
  },
  nameService : {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  delegacion: {
    type: String,
    required: true
  },
  colonia: {
    type: String,
    required: true
  },
  horarioServicio: {
    type: String,
    required: true
  },
  serviceDescription:{
    type: String,
    required: true
  },
  contactotel: {
    type: Number,
    required: true
  },
  contactWhats: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cv:String,
  linkFacebook: String,
  linkLinkedin: String,
  imagenesServicio:[String]

});

const Anuncio = mongoose.model('Anuncio', anuncioSchema);
module.exports = Anuncio;
