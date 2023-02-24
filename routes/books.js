const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

router.get('/find-byId', controller.FindById)
router.post('/add', controller.AddBook)



module.exports = router