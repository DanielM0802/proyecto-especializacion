const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
    //const user = await User.findOne({ username: username });
    //const username = user.username

    //peticion con axios para buscar las sesiones de un usuario

    //sesiones = axios...

    res.json({
        error: null,
        data: {
            title: "sesiones del usuario",
            //sessions: sesiones
        }
    })
})

module.exports = router;