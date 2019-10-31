const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const home = require('./routes/home')

app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
 
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use('/', home)

app.get('/', (req, res) =>{
    res.send(home)
})


module.exports = app