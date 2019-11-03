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
//Fix this function. Probably a double join like below
// function getChefsByCuisine(chefId, db = database){
//     return db('Cuisine')
//     .where('chef_id', chefId)
//     .select()
//     .then(data => {console.log(data)})
// }

function getChefCuisines(chefId, db = database){
    return db('chefs')
    .leftJoin('chefCuisine', 'chefCuisine.chef_id', 'chefs.chef_id')
    .leftJoin('cuisine', "chefCuisine.cuisine_id", 'cuisine.cuisine_id')
    .where('chefs.chef_id', chefId)
    
}


module.exports = {
    getAllChefs,
    getAllCuisines,
    getChefsByLocation,
    // getChefsByCuisine,
    getChefCuisines
}