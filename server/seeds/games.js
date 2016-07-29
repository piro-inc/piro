
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('games').insert({user_id: 1, date_time: 990108, location: 'EDA', team_a_name: 'the fun team', team_b_name: 'the other guys', is_complete: false, team_a_score: 1, team_b_score: 5, sport_name: 'ninja'}),
        knex('games').insert({user_id: 1, date_time: 990108, location: 'Vivian St', team_a_name: 'the ok team', team_b_name: 'the other team', is_complete: false, team_a_score: 4, team_b_score: 2, sport_name: 'coding'}),
        knex('games').insert({user_id: 2, date_time: 990108, location: 'Cuba St', team_a_name: 'the great team', team_b_name: 'the others', is_complete: false, team_a_score: 1, team_b_score: 1, sport_name: 'hackysack'})
      ])
    })
}
