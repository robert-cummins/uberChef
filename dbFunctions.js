const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

function getAllChefs(db = database){
    return db('chefs').select()
}

function getChefById(id, db=database){
    return db('chefs')
    .where('chef_id', id)
    .first()
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

function getChefsByCuisineAndLocation(cuisineId, location, db = database){
    const baseQuery = db('cuisine')
    .leftJoin('chefCuisine', 'chefCuisine.cuisine_id', 'cuisine.cuisine_id')
    .leftJoin('chefs', "chefCuisine.chef_id", 'chefs.chef_id')
    if(cuisineId) baseQuery.where('cuisine.cuisine_id', cuisineId)

    if(location) baseQuery.where('chefs.location', location)

    return baseQuery
}

function getChefCuisinesbyLocation(location, db = database){
    return db('chefs')
    .leftJoin('chefCuisine', 'chefCuisine.chef_id', 'chefs.chef_id')
    .leftJoin('cuisine', "chefCuisine.cuisine_id", 'cuisine.cuisine_id')
    .where('chefs.location', location)
    
    
}

function addChef(chef, db=database){
    return db('chefs').insert(chef)
}

function addChefCuisine(chefCuisine, db=database){
    return db('chefCuisine').insert(chefCuisine)
}

module.exports = {
    getAllChefs,
    getAllCuisines,
    getChefsByLocation,
    getChefsByCuisine,
    getChefCuisinesbyLocation,
    getChefById,
    getChefsByCuisineAndLocation,
    addChef,
    addChefCuisine
}

