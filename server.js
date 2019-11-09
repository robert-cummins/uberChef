const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const home = require('./routes/home')
const db = require('./dbFunctions')

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
 
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/', home)



module.exports = app