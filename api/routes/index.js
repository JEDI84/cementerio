const router = require('express').Router()



router.use('/galeria', require('./galeria'))
router.use('/difunto', require('./difunto'))
router.use('/tanatopractore', require('./tanatopractore'))


module.exports = router
