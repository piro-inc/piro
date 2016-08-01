exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('games', (table) => {
    table.increments('id').primary()
    table.integer('user_id').notNullable()
    table.timestamp('date_time').notNullable().defaultTo(knex.fn.now())
    table.string('location').notNullable()
    table.string('team_a_name').notNullable()
    table.string('team_b_name').notNullable()
    table.boolean('is_complete').notNullable().defaultTo(false)
    table.integer('team_a_score').notNullable().defaultTo(0)
    table.integer('team_b_score').notNullable().defaultTo(0)
    table.string('sport_name').notNullable()
    table.time('time_elapsed').notNullable().defaultTo('00:00:00')
    table.timestamps(true, true)
    table.boolean('is_running').notNullable().defaultTo(false)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
