exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('games', (table) => {
		table.increments('id').primary()
		table.integer('user_id')
		table.timestamp('date_time')
		table.string('location')
		table.string('team_a_name')
		table.string('team_b_name')
		table.boolean('is_complete')
		table.integer('team_a_score')
		table.integer('team_b_score')
		table.string('sport_name')
	})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
