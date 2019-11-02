
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chefCuisine').del()
    .then(function () {
      // Inserts seed entries
      return knex('chefCuisine').insert([
        {Chef_id: 100, cuisine_id: '201'},
        {Chef_id: 100, cuisine_id: '204'},
        {Chef_id: 100, cuisine_id: '201'},
        {Chef_id: 101, cuisine_id: '203'},
        {Chef_id: 101, cuisine_id: '202'},
        {Chef_id: 101, cuisine_id: '206'},
        {Chef_id: 102, cuisine_id: '201'},
        {Chef_id: 102, cuisine_id: '207'},
        {Chef_id: 102, cuisine_id: '209'},
        {Chef_id: 103, cuisine_id: '210'},
        {Chef_id: 103, cuisine_id: '208'},
        {Chef_id: 103, cuisine_id: '203'},
        {Chef_id: 104, cuisine_id: '207'},
        {Chef_id: 104, cuisine_id: '203'},
        {Chef_id: 104, cuisine_id: '205'},
      ]);
    });
};
