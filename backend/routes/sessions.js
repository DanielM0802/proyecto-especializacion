const express = require('express');
const axios = require ('axios');
const User = require('../models/User');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const users = [];
    const sesiones = [];
    const user = await User.findById(req.params.id);
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
    //const user = await User.findOne({ username: username });
    //const username = user.username

    //peticion con axios para buscar las sesiones de un usuario

    //sesiones = axios...

    res.json({
        error: null,
        data: {
            title: "sesiones del usuario",
            sessions: sesiones
        }
    })
})

module.exports = router;