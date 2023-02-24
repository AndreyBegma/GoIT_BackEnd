const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

router.get('/get-list', controller.GetListBooks)
router.get('/find-byId', controller.FindById)

router.post('/add', controller.AddBook)

router.delete('/remove', controller.RemoveBook)

router.patch('/update', controller.UpdateBook)


module.exports = router