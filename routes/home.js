const express = require('express')
const router = express.Router()
const db = require('../dbFunctions')

router.get('/', (req, res) =>{
  res.render('home')
})

router.get("/:id", (req, res) =>{
    let location = req.params.id
    db.getChefsByLocation(location)
    .then(chef =>{
        
        res.render('location', {chefs: chef} )
    })
  })

  router.get("/:id/:id", (req, res) =>{
    let id = req.params.id
    db.getChefById(id)
    .then(chef =>{
        console.log(chef)
        res.render('chef', {chef: chef} )
    })
  })



module.exports = router

