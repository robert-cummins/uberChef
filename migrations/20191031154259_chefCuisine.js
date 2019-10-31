exports.up = function(knex) {
    return knex.schema.createTable('chef_Cuisine', (table) => {
        table.integer('cuisine_id')
        table.integer('chef_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('chefCuisine')
  };
