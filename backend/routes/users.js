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
  await user.save();
  res.json({
    status: 'User saved'
  });
});





module.exports = router;
