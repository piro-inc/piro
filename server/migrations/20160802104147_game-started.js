
exports.up = function (knex, Promise) {
  return knex.schema.table('games', (table) => {
    table.boolean('is_started').defaultTo(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('games', (table) => {
    table.dropColumn('is_started')
  })
}
