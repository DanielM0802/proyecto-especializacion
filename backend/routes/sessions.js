const express = require('express');
const axios = require ('axios');
const User = require('../models/User');
const router = express.Router();

router.get('/:id', async (req, res) => {
    let users = [];
    let sesiones = [];
    console.log(req.params)
    const user = await User.findOne({ id: req.params.id });
    const username = user.username;

    await axios.get(`https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/`).then((respuesta) => {
      users = respuesta.data;
    })

    for (let index = 0; index < users.length; index++) {
        
        if (users[index].username === username) {
            sesiones = users[index].sessions;
            break;
        } 
    }

    res.json({
        error: null,
        sessions: sesiones
    })
})

module.exports = router;