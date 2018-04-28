var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongooseConfig = require('../config/db.config').mongoose;
var user = require('../models/users');
var config = require('../config');

//Register user API
router.post('/register', function(req, res, next) {
  if(req.body.name && req.body.email && req.body.password) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    var userInstance = new user({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    
    userInstance.save().then((doc) => {
      var newDoc = {
        message: 'User registered successfully',
        userId: doc._id
      }
      res.status(200).send(newDoc);
    }, (error) => {
      res.status(400).send(error);
    });

  } else {
    res.status(422).send('Please provide required fields'); //422 best suits for this situation
  }
}); 

//Login API
router.post('/login', function(req, res) {
  user.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        return res.status(500).send('Error on the server.' + err);
      } 
      if (!user) {
        return res.status(404).send('No user found.');
      }
      let passwordIsValid = bcrypt.compareSync(req.body.password, user.password, function(err, response) {
        if(err) {
          return console.log(err);
        } 
      });

      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }
      let token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, userId: user._id });
      });
    });

module.exports = router;
