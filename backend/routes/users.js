const express = require('express');
const router = express.Router();

const User = require('../models/User');



router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  //AQUI SE APLICARIA BCRYPT
  var bcrypt = require('bcrypt');
  var password = user.password;
  const saltRounds = 12;
  
  bcrypt.hash(password, 10)
    .then(function(hashedPassword) {
      user.password = hashedPassword;
      return user.save();
    })
    .then(function() {
      res.send();
    })
    .catch(function(error) {
      console.log("Error saving user");
      console.log(error);
      next();
    });

  res.json({
    status: 'User saved'
  });
});





module.exports = router;
