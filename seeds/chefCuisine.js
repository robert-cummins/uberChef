
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefCuisine').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefCuisine').insert([
        {chefCuisine_id: 300, chef_id: 100, cuisine_id: 201},
        {chefCuisine_id: 301, chef_id: 100, cuisine_id: 204},
        {chefCuisine_id: 302, chef_id: 100, cuisine_id: 201},
        {chefCuisine_id: 303, chef_id: 101, cuisine_id: 203},
        {chefCuisine_id: 304, chef_id: 101, cuisine_id: 202},
        {chefCuisine_id: 305, chef_id: 101, cuisine_id: 206},
        {chefCuisine_id: 306, chef_id: 102, cuisine_id: 201},
        {chefCuisine_id: 307, chef_id: 102, cuisine_id: 207},
        {chefCuisine_id: 308, chef_id: 102, cuisine_id: 209},
        {chefCuisine_id: 309, chef_id: 103, cuisine_id: 210},
        {chefCuisine_id: 310, chef_id: 103, cuisine_id: 208},
        {chefCuisine_id: 311, chef_id: 103, cuisine_id: 203},
        {chefCuisine_id: 312, chef_id: 104, cuisine_id: 207},
        {chefCuisine_id: 313, chef_id: 104, cuisine_id: 203},
        {chefCuisine_id: 314, chef_id: 104, cuisine_id: 205},
      ]);
    });
};
