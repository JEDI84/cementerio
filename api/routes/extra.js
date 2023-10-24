const{getDifuntosWithGraveyards}= require('../controllers/extra')
const { checkAuth, checkAdmin } = require('../middleware')

const router = require('express').Router()

router.get('/',getDifuntosWithGraveyards) 