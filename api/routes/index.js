const router = require('express').Router()

router.use("/graveyard", require("./graveyard.router"))
router.use("/personal", require("./personal.router"))
router.use('/graves', require('./graves.router'))
router.use('/mausoleums', require('./mausoleums.router'))
router.use('/commons', require('./commons.router'))

module.exports = router
