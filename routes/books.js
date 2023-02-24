const express = require('express')
const router = express.Router()
const controller = require('../controllers/books')

router.post('/add', controller.AddBook)



module.exports = router