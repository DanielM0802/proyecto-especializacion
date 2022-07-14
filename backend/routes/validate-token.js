const jwt = require('jsonwebtoken')

// Middleware para validar el token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    // Se verifica si el request posee el header authorization
    if (!token) return res.status(403).json({ error: 'No token provided.' })
    //verificando token
    try {
        const verified = jwt.verify(token, 'Token123');
        req.user = verified
        // Continuamos
        console.log('Token valido')
        next()
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' })
    }
}

module.exports = verifyToken;