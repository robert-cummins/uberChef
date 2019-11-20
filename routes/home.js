const express = require('express')
const router = express.Router()
const db = require('../dbFunctions')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/sign-up' , (req, res) => {
  res.render('sign-up', {})
})

router.get("/update-chef/:id", (req, res) => {
  db.getChefById(req.params.id)
  .then(chef => {
    res.render('update', {chef:chef})
  })
  
});

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

router.post("/delete-chef/:id", (req, res) => {
  db.deleteChef(req.params.id).then(() => {
    res.redirect("/");
  });
});



router.post("/update-chef/:id", (req, res) => {
  let updatedChef = {
    name: req.body.name,
    img: req.body.chefImg,
    email: req.body.email,
    location: req.body.location,
    bio: req.body.bio,
    foodImg1: req.body.img1,
    foodImg2: req.body.img2,
    foodImg3: req.body.img3,
  }

  db.updateChef(req.params.id, updatedChef)
  .then(el => {
    let updateChefCuisine = {
      chef_id: req.params.id,
      cuisine_id: req.body.cuisine
    }
    db.updateChefCuisne(req.params.id, updateChefCuisine)
    .then(() => res.redirect('/' + updatedChef.location + '/' + req.params.id))
  })
});



module.exports = router

