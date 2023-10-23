const router = require('express').Router()

router.use("/graveyard", require("./graveyard.router"))
router.use("/personal", require("./personal.router"))
router.use('/graves', require('./graves.router'))
router.use('/mausoleums', require('./mausoleums.router'))
router.use('/commons', require('./commons.router'))
const authRouter = require ('./auth.router.js')

router.use('/galeria', require('./galeria'))
router.use('/difunto', require('./difunto'))
router.use('/tanatopractore', require('./tanatopractore'))
router.use('/auth', authRouter)

module.exports = router
