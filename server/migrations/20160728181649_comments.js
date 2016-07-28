exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('comments', (table) => {
		table.increments('id').primary()
		table.integer('game_id').references('id').inTable('games')
		table.string('comment')
	})
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments')
}
