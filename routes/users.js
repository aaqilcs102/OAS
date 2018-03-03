var express = require('express');
var router = express.Router();

const mongooseConfig = require('../config/db.config').mongoose;
var {user} = require('../models/users');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  user.find().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.send(error);
  });
});

// router.get('/login/:email', function(req, res, next) {
//   user.find({email: req.params.email}).then((doc) => {
//     if(doc.length) {
//       res.send(doc);
//     } else {
//       res.status(401).send('User not registered');
//     }
//   }, (error) => {
//     res.send(error);
//   });
// });

//Register Student API
router.post('/register', function(req, res, next) {
  if(req.body.name && req.body.email && req.body.password) {
    var userInstance = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    
    userInstance.save().then((doc) => {
      var newDoc = {
        name: doc.name,
        email: doc.email,
        id: doc._id
      }
      res.status(200).send(newDoc);
    }, (error) => {
      res.status(400).send(error);
    });

  } else {
    res.status(422).send('Please provide required'); //422 best suits for this situation
  }
}); 

module.exports = router;
