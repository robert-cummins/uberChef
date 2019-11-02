
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {chef_id: 100, name: "Ross", location: "wellington"},
        {chef_id: 101, name: "Rohan", location: "wellington"},
        {chef_id: 102, name: "Kelly", location: "wellington"},
        {chef_id: 103, name: "Ming", location: "wellington"},
        {chef_id: 104, name: "Yoga teacher", location: "wellington"},
      ]);
    });
};
