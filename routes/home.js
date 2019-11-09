const express = require('express')
const router = express.Router()
const db = require('../dbFunctions')

router.get('/', (req, res) =>{
  db.getAllChefs()
  .then(chefs => {
    console.log(chefs)
    res.render('home', {chefs: chefs})
  })  
  
})
module.exports = router