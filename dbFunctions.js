const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

function getAllChefs(db = database){
    return db('chefs').select()
}

function getAllCuisines(db = database){
    return db('cuisine').select()
}

function getChefsByLocation(location, db = database){
    return db('chefs')
    .where('location', location)
    .select()
}

function getChefsByCuisine(cuisineId, db = database){
    return db('cuisine')
    .leftJoin('chefCuisine', 'chefCuisine.cuisine_id', 'cuisine.cuisine_id')
    .leftJoin('chefs', "chefCuisine.chef_id", 'chefs.chef_id')
    .where('cuisine.cuisine_id', cuisineId)
    .then(data => {console.log(data)})
}

function getChefCuisines(chefId, db = database){
    return db('chefs')
    .leftJoin('chefCuisine', 'chefCuisine.chef_id', 'chefs.chef_id')
    .leftJoin('cuisine', "chefCuisine.cuisine_id", 'cuisine.cuisine_id')
    .where('chefs.chef_id', chefId)
    .then(el =>{console.log(el)})
    
}

getChefsByCuisine(201, db = database)

module.exports = {
    getAllChefs,
    getAllCuisines,
    getChefsByLocation,
    getChefsByCuisine,
    getChefCuisines
}