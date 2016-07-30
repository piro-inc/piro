exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.string('email').unique().notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
