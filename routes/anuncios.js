const express = require('express');
const router  = express.Router();
const Anuncio = require('../models/Anuncio.js');
const { isLoggedIn }= require('../middleware');


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/anuncio', (req, res, next) => {
  const { category } = req.query
  console.log("category",category)
  Anuncio.find()
    .then(anuncio => {
      console.log('Anuncio es: ', anuncio);
      res.json(anuncio)
    })
    .catch(error => {
      console.log('Error while getting the anuncio from the DB: ', error);
      res.status(500).send({Message:"Error en el server"})
    })
});

router.get('/anuncio/:id',(req, res, next) => {
  if(req.params.id !== undefined){
  Anuncio.findById(req.params.id)
    .then(anuncio => {
      res.json(anuncio)
    })
    .catch(error => {
      console.log('Error while getting the anuncio from the DB: ', error);
      res.status(500).send({Message:"Error en el server"})
    })
  }else{
    res.status(400).send({Message:"Faltan parametros Obligatorios"})
  }
});

router.post('/anuncio', (req, res) => {
  Anuncio.create(req.body)
  .then(anuncio => {
    res.json(anuncio)
  })
  .catch(error => {
    console.log('Error while getting the anuncio from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
});

router.put('/anuncio/:id', (req, res) => {
  Anuncio.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(anuncio => {
    res.json(anuncio)
  })
  .catch(error => {
    console.log('Error while getting the anuncio from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
});

router.delete('/anuncio/:id', (req, res) => {
  Anuncio.findByIdAndDelete(req.params.id)
  .then(anuncio => {
    res.json(anuncio)
  })
  .catch(error => {
    console.log('Error while getting the anuncio from the DB: ', error);
    res.status(500).send({Message:"Error en el server"})
  })
})



module.exports = router;
