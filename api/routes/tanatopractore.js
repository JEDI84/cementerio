const { getAllTanatopractores, getOneTanatopractore, createTanatopractore, updateTanatopractore, deleteTanatopractore, getAssignedDeceased, } = require('../controllers/tanatopractore')
const { checkAuth, checkAdmin } = require('../middleware')

const router = require('express').Router() 

router.get('/',checkAuth, getAllTanatopractores) 
router.get('/:id/difunto', checkAuth, getAssignedDeceased)
router.get('/:id',checkAuth,getOneTanatopractore) 
router.post('/', checkAuth, checkAdmin, createTanatopractore) 
router.put('/:id',checkAuth, checkAdmin,updateTanatopractore) 
router.delete('/:id',checkAuth, checkAdmin,deleteTanatopractore)

module.exports = router

