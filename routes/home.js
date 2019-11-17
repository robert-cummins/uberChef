const express = require('express')
const router = express.Router()
const db = require('../dbFunctions')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/sign-up' , (req, res) => {
  res.render('sign-up', {})
})


router.get("/:id", (req, res) => {
  let location = req.params.id
  if (req.query.cuisine_id !== undefined) {
    db.getChefsByCuisineAndLocation(req.query.cuisine_id, location)
      .then(chef => {
        console.log
        res.render('location', { chefs: chef })
      })
  } else {

    db.getChefCuisinesbyLocation(location)
      .then(chef => {
        res.render('location', { chefs: chef })
      })
  }

})

router.get("/:id/:id", (req, res) => {
  let id = req.params.id
  db.getChefById(id)
    .then(chef => {
      console.log(chef)
      res.render('chef', { chef: chef })
    })
})




module.exports = router

