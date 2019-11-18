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
      res.render('chef', { chef: chef })
    })
})

router.post("/", (req, res) => {
  let newChef = {
    name: req.body.name,
    img: req.body.chefImg,
    email: req.body.email,
    location: req.body.location,
    bio: req.body.bio,
    foodImg1: req.body.img1,
    foodImg2: req.body.img2,
    foodImg3: req.body.img3,
  }

  db.addChef(newChef).then(chef => {
    console.log(chef)
    let chefCuisine = {
      chef_id: chef[0],
      cuisine_id: req.body.cuisine
    }
    db.addChefCuisine(chefCuisine).then(()=> res.redirect('/'))
  })

})



module.exports = router

