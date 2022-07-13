const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../models/User');



router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const user = new User(req.body);
  //AQUI SE APLICARIA BCRYPT
  const password = user.password;
  const saltRounds = 10;
  
  bcrypt.hash(password, saltRounds)
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

router.post('/login', async function (req, res) { 

  const username = req.body.username;
  const password = req.body.password;

  // Buscando usuario y comparando password
  const user = await User.findOne({ username: username });
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ error: 'Contraseña incorrecta' });
  
  console.log('usuario autenticado')

  res.json(user);

});





module.exports = router;
