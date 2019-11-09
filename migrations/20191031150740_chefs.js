
exports.up = function(knex) {
  return knex.schema.createTable('chefs', (table) => {
      table.increments('chef_id')
      table.string('name')
      table.string('location')
      table.string('img')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('chefs')
};
