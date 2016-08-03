
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('games').insert({
          user_id: 1,
          date_time: 300716,
          location: 'Lyndhurst Park',
          team_a_name: 'Tawa',
          team_b_name: 'Wainuiomata',
          is_complete: true,
          team_a_score: 16,
          team_b_score: 10,
          sport_name: 'Rugby',
          time_elapsed: 80,
          is_running: false
        }),
        knex('games').insert({
          user_id: 1,
          date_time: 300716,
          location: 'Evans Bay Park',
          team_a_name: 'Marist St Pats',
          team_b_name: 'Oriental-Rongotai',
          is_complete: true,
          team_a_score: 24,
          team_b_score: 3,
          sport_name: 'Rugby',
          time_elapsed: 80,
          is_running: false
        }),
        knex('games').insert({
          user_id: 2,
          date_time: 060816,
          location: 'Jerry Collins Stadium',
          team_a_name: 'Marist St Pats',
          team_b_name: 'Tawa',
          is_complete: false,
          team_a_score: 0,
          team_b_score: 0,
          sport_name: 'Rugby',
          time_elapsed: 0,
          is_running: false
        }),
        knex('games').insert({
          user_id: 2,
          date_time: 300716,
          location: 'ASB Court 9',
          team_a_name: 'PIC 4',
          team_b_name: 'SMOG 4',
          is_complete: true,
          team_a_score: 49,
          team_b_score: 56,
          sport_name: 'Netball',
          time_elapsed: 60,
          is_running: false
        }),
        knex('games').insert({
          user_id: 2,
          date_time: 300716,
          location: 'ASB Court 8',
          team_a_name: 'Kia Ora 1',
          team_b_name: 'Wgtn East 3',
          is_complete: true,
          team_a_score: 43,
          team_b_score: 51,
          sport_name: 'Netball',
          time_elapsed: 60,
          is_running: false
        }),
        knex('games').insert({
          user_id: 3,
          date_time: 060816,
          location: 'ASB Court 9',
          team_a_name: 'Marsden 1',
          team_b_name: 'Vic Uni 3',
          is_complete: false,
          team_a_score: 0,
          team_b_score: 0,
          sport_name: 'Netball',
          time_elapsed: 60,
          is_running: false
        }),
        knex('games').insert({
          user_id: 3,
          date_time: 300716,
          location: 'Wakefield 1',
          team_a_name: 'Island Bay Utd',
          team_b_name: 'Miramar Rangers',
          is_complete: true,
          team_a_score: 4,
          team_b_score: 0,
          sport_name: 'Football',
          time_elapsed: 90,
          is_running: false
        }),
        knex('games').insert({
          user_id: 1,
          date_time: 300716,
          location: 'Endeavour 2',
          team_a_name: 'Western Suburbs',
          team_b_name: 'Waterside Karori',
          is_complete: true,
          team_a_score: 6,
          team_b_score: 1,
          sport_name: 'Football',
          time_elapsed: 90,
          is_running: false
        }),
        knex('games').insert({
          user_id: 1,
          date_time: 060816,
          location: 'Wakefield 2',
          team_a_name: 'Wellington Olympic',
          team_b_name: 'Kapiti Coast Utd',
          is_complete: false,
          team_a_score: 0,
          team_b_score: 0,
          sport_name: 'Football',
          time_elapsed: 0,
          is_running: false
        })
      ])
    })
}
