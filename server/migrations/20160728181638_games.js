exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id').primary()
    table.integer('user_id').notNullable()
    table.timestamp('date_time').notNullable()
    table.string('location').notNullable()
    table.string('team_a_name').notNullable()
    table.string('team_b_name').notNullable()
    table.boolean('is_complete').notNullable()
    table.integer('team_a_score').notNullable()
    table.integer('team_b_score').notNullable()
    table.string('sport_name').notNullable()
    table.time('time_elapsed').notNullable()
    table.timestamps(true, true)
    table.boolean('is_running').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
