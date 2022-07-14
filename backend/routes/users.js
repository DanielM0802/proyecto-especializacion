const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
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
  const saltos = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltos);
  user.password = hashedPassword;

  try{
    const userDB = await user.save();
    res.json({
      error: null,
      data: userDB
    });
  }catch (error) {
    res.status(400).json(error);
  }

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

  const token = jwt.sign({
      id: user._id
  }, 'Token123');

  res.json({user, token});

});





module.exports = router;
