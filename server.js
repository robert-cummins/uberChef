const express = require('express')
const hbs = require('express-handlebars')
const app = express()

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

module.exports = app