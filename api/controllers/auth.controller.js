const Personal = require('../models/personal.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function login(req, res){
    try {
        const personal = await Personal.findOne({
            where: {
                email: req.body.email
            }
        })

        if (!personal) return res.status(404).send('Error: Email or Password incorrect') // Error in case we don't find the email
        const comparePass = bcrypt.compareSync(req.body.password, personal.password)  // comparamos la contraseña enviada sin encriptar con la encriptada en la base de datos

        if (comparePass) {
            const payload = { email: personal.email } // información que incluimos en el token
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })  // generamos el token
            return res.status(200).send({ token })
        } else {
            return res.status(404).json('Error: Email or Password incorrect')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }


}


async function signup(req, res){
    
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    console.log(saltRounds)
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
    try {
        const personal = await Personal.create(req.body)
        const payload = { email: personal.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
        return res.status(200).json({ token })

    } catch (error) {
        res.status(500).send("email duplicado")
    }
}

module.exports = {signup, login }