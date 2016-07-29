
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({game_id: 3, comment: 'Player 1 injured'}),
        knex('comments').insert({game_id: 3, comment: 'Yellow card'}),
        knex('comments').insert({game_id: 2, comment: 'Try!'})
      ])
    })
}
