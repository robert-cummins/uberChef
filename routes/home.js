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

router.get("/:id", (req, res) =>{
    let id = req.params.id
    db.getChefById(id)
    .then(chef =>{
        console.log(chef)
        res.render('chef', {chef: chef} )
    })
  })
module.exports = router