//server.js ~ Packages installed: axios, cheerio, express, mongoose
require('./config')
const express = require('express')
const { join } = require('path')
//create express app
const app = express()

//middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes
require('./routes')(app)

//listen on port once connection is open
require('mongoose')
  .connection
  .once('open', () => app.listen(3000))
