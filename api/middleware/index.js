const jwt = require('jsonwebtoken')
const Personal = require('../models/personal.model')

function checkAuth(req, res, next) { //checkeamos autenticación, si el usuario está logueado y tiene token
    if (!req.headers.authorization) return res.status(401).send('Token not found')  // comprobamos que nos envia el token en el req.headers

    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const personal = await Personal.findOne({ where: { email: result.email } })
        if (!personal) return res.status(401).send('User not found')

        res.locals.personal = personal

        next()
    })
}

function checkAdmin(req, res, next) { //checkeamos autorización, si el usuario tiene acceso o no a un recurso
    if (res.locals.personal.role !== 'admin') {
        return res.status(401).send('User not authorized')
    } else {
        next()
    }
}

module.exports = { checkAuth, checkAdmin }