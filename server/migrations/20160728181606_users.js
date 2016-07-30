exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.string('username').unique().notNullable()
    table.string('password')
    table.string('email')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
