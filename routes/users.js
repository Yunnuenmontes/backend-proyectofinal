const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');
const User = require('../models/User.js');
const passport = require("../config/passport");


const BCRYPT_SALT_ROUNDS = 12;
/* GET home page */


//Este metodo funciona para registrar un nuevo Usuario
// Solo utiliza post para registro y login, nunca mandes email o password como parametros o queries
router.post('/register',(req,res,next)=>{
  User.register(req.body,req.body.password).then((resp2)=>{
  res.json(resp2);
}).catch((error)=>{res.json({error})})
})

router.post('/login', passport.authenticate('local'), (req,res,next)=>{
  res.status(200).json(req.user);
})

router.post('/signUp',(req,res,next)=>{
  console.log('Req is: ', req);
  bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword) {
        User.register(req.body.email, hashedPassword).then((resp2)=>{
          res.json(resp2);
        }).catch((error)=>{res.json({error})});
    })
    .then(function() {
        res.send();
    })
    .catch(function(error){
        console.log("Error saving user: ");
        console.log(error);
        next();
    });
})

router.post('/iniciarSesion', passport.authenticate('local'), (req,res,next)=>{
  return bcrypt.compare(req.body.password, user.password).then(function(samePassword) {
    if(!samePassword) {
        res.status(403).send();
    }
    res.status(200).json(req.user);
  });
});

router.post('/logout',(req,res,next)=>{
  req.logout();
  res.status(200).json({message:"ok"});
})




module.exports = router;
