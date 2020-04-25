require('dotenv').config();
const mongoose = require('mongoose');

// Database configuration
mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-eq623.mongodb.net/partynight?retryWrites=true&w=majority`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const Venue = require('../models/Venue');

const venueSeeds = [{
  name : 'La Chilanguita Insurgentes',
  address: 'Insurgentes Sur 895 Col. Nápoles',
  contact: 5611638666,
  openingHours : '14:00 p.m',
  closingHours: '3:00 a.m',
  cover: 'No Cover',
  dressCode: 'informal',
  musicStyles: ['Musica y Banda en vivo'],
  comments: [],
  picture: 'https://la.chilanguita.com.mx/archivo/img-galery/lugar/600x600/dcac497118__dsc5884.jpg',
},

{
  name : 'Omen Club Roma',
  address: 'Querétaro 202 A Col. Roma Nte',
  openingHours : '10:00 p.m',
  closingHours: '3:00 a.m',
  cover: 'Cover $ 100 ',
  dressCode: 'Semiformal',
  musicStyles: ['Musica Pop y Latino '],
  comments: [],
  picture: 'https://www.omenclubroma.com/wp-content/uploads/2020/02/omen-club-roma-7.jpg',
},

{
  name : 'Black Soul Speakeasy',
  address: 'Av Oaxaca 79, Col. Roma Norte, 06700 Ciudad de México',
  contact: 5543510274,
  openingHours : '10:00 p.m',
  closingHours: '3:00 a.m',
  cover: 'Cover $ 100 ',
  dressCode: 'Semiformal',
  musicStyles: ['Electrónica, Reggaetón, Latina'],
  comments: [],
  picture: 'https://www.blacksoulspeakeasy.com/wp-content/uploads/2019/12/black-soul-speakeasy-cdmx-700x300.jpeg,',
},


{
  name : 'Karaoke Insurgentes',
  address: 'Insurgentes Sur 1869, 01020 Ciudad de México',
  contact: 5527375922,
  openingHours : '10:00 p.m',
  closingHours: '3:00 a.m',
  cover: 'Cover $ 100 ',
  dressCode:'Semiformal',
  musicStyles: ['karaoke'],
  Picture: 'https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/86969983_167385404713117_6758062441038348288_n.jpg?_nc_cat=111&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_oc=AQmsJnAQs7OFmYFBrmw0u8PegeDRkVHAt564H4lXwoeEHdURoXadEVfETAREG3L8A9Q&_nc_ht=scontent.fmex3-1.fna&_nc_tp=14&oh=338334144dda9ae21142119e5866439b&oe=5EA2927C',
},

];


(async () => {

  const venueDocs = await Venue.create(venueSeeds);
  console.info('Venues: ' + venueDocs.length + ' documents were created');
})();
