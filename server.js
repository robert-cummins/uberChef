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

// app.get('/', (req, res) =>{
//   db.getAllChefs()
//   .then(chefs => {
//     console.log(chefs)
//     res.render('home', {chefs: chefs})
//   })  
  
// })


module.exports = app