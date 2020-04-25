const express = require('express');
const router  = express.Router();
const Comment = require('../models/Comment.js');
const { isLoggedIn }= require('../middleware');


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/comment', (req, res, next) => {
  Comment.find()
    .then(comment => {
      res.json(comment)
    })
    .catch(error => {
      console.log('Error while getting the comment from the DB: ', error);
      res.status(500).send({Message:"Error en el server"})
    })
});

router.get('/comment/:id',(req, res, next) => {
  if(req.params.id !== undefined){
  Comment.findById(req.params.id)
    .then(comment => {
      res.json(comment)
    })
    .catch(error => {
      console.log('Error while getting the comment from the DB: ', error);
      res.status(500).send({Message:"Error en el server"})
    })
  }else{
    res.status(400).send({Message:"Faltan parametros Obligatorios"})
  }
});

router.post('/comment', (req, res) => {
  Comment.create(req.body)
  .then(comment => {
    res.json(comment)
  })
  .catch(error => {
    console.log('Error while getting the anuncio from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
});

router.put('/comment/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(comment=> {
    res.json(comment)
  })
  .catch(error => {
    console.log('Error while getting the comment from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
});

router.delete('/comment/:id', (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
  .then(comment => {
    res.json(comment)
  })
  .catch(error => {
    console.log('Error while getting the comment from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
})

router.delete('/comment', (req, res) => {
  Comment.remove()
  .then(comment => {
    res.json(comment)
  })
  .catch(error => {
    console.log('Error while getting the comment from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
})

module.exports = router;
