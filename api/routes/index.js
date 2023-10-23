const router = require('express').Router()

router.use('/graves', require('./graves.router'))
router.use('/mausoleums', require('./mausoleums.router'))
router.use('/commons', require('./commons.router'))

module.exports = router
