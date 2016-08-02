
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('following_join').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('following_join').insert({user_id: 1, game_id: 2}),
        knex('following_join').insert({user_id: 2, game_id: 1}),
        knex('following_join').insert({user_id: 2, game_id: 3}),
        knex('following_join').insert({user_id: 3, game_id: 1})
      ])
    })
}
