const express = require('express')
const app = express()

const config = require('./config')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

const http = require('http')
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors(config.cors))

mongoose.connect(config.mongoKey, () => { 
    console.log('Connected to MongoDB')
})

server.listen(config.port, () => { 
    console.log(`Server listening on port ${config.port}`)
})