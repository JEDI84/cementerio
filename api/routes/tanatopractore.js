const { getAllTanatopractores, getOneTanatopractore, createTanatopractore, updateTanatopractore, deleteTanatopractore, } = require('../controllers/tanatopractore')


const router = require('express').Router() 

router.get('/',getAllTanatopractores) 
router.get('/:id',getOneTanatopractore) 
router.post('/',createTanatopractore) 
router.put('/:id',updateTanatopractore) 
router.delete('/:id',deleteTanatopractore)  

module.exports = router

