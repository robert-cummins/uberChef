
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefs').insert([
        {chef_id: 100, name: "Ross", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512"},
        {chef_id: 101, name: "Rohan", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/rohan_wakefield.jpg"},
        {chef_id: 102, name: "Kelly", location: "wellington", img:"https://devacademy.co.nz/wp-content/uploads/2017/06/kelly_keating.jpg"},
        {chef_id: 103, name: "Ming", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/ming_janssen.jpg"},
        {chef_id: 104, name: "Han", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-UK061CXA8-754453698fa3-512"},
        {chef_id: 105, name: "Ross", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512"},
        {chef_id: 106, name: "Rohan", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/rohan_wakefield.jpg"},
        {chef_id: 107, name: "Kelly", location: "wellington", img:"https://devacademy.co.nz/wp-content/uploads/2017/06/kelly_keating.jpg"},
        {chef_id: 108, name: "Ming", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/ming_janssen.jpg"},
        {chef_id: 109, name: "Han", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-UK061CXA8-754453698fa3-512"},
        {chef_id: 110, name: "Ross", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512"},
        {chef_id: 111, name: "Rohan", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/rohan_wakefield.jpg"},
        {chef_id: 112, name: "Kelly", location: "wellington", img:"https://devacademy.co.nz/wp-content/uploads/2017/06/kelly_keating.jpg"},
        {chef_id: 113, name: "Ming", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/ming_janssen.jpg"},
        {chef_id: 114, name: "Han", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-UK061CXA8-754453698fa3-512"},
        {chef_id: 115, name: "Ross", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-U831A7Y93-c1b6c7b2f1ff-512"},
        {chef_id: 116, name: "Rohan", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/rohan_wakefield.jpg"},
        {chef_id: 117, name: "Kelly", location: "wellington", img:"https://devacademy.co.nz/wp-content/uploads/2017/06/kelly_keating.jpg"},
        {chef_id: 118, name: "Ming", location: "wellington", img: "https://devacademy.co.nz/wp-content/uploads/2017/06/ming_janssen.jpg"},
        {chef_id: 119, name: "Han", location: "wellington", img: "https://ca.slack-edge.com/T02SQPVAC-UK061CXA8-754453698fa3-512"},
      ]);
    });
};
