exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', (table) => {
    table.increments('id').primary()
    table.integer('game_id')
    table.string('comment')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
