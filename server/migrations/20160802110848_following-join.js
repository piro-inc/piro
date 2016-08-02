
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('following_join', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('id').inTable('users')
    table.integer('game_id').references('id').inTable('games')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('following_join')
};
