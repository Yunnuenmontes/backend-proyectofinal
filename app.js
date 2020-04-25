require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const passport     = require('./config/passport');
const {isLoggedIn} = require('./middleware');
const cors         = require ('cors');


mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-eq623.mongodb.net/partynight?retryWrites=true&w=majority`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({cookie:{maxAge:1000*60*60*24, secure: false},secret:process.env.SECRET}));
app.use(passport.initialize());
app.use(passport.session());
let confCors={
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(confCors))


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const users = require('./routes/users');
const anuncios = require('./routes/anuncios');
const comments = require('./routes/comments');
app.use('/', users);
app.use('/',isLoggedIn, anuncios);
app.use('/',isLoggedIn, comments);


module.exports = app;
