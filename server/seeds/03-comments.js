
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({game_id: 1, comment: 'Smashed \'em bro!'}),
        knex('comments').insert({game_id: 2, comment: 'TRY!'}),
        knex('comments').insert({game_id: 2, comment: 'MSP extend their lead with a soft try up the middle.'}),
        knex('comments').insert({game_id: 2, comment: 'The conversion is missed but no one cares.'}),
        knex('comments').insert({game_id: 2, comment: 'PENALTY: Rongotai are finally on the board.'}),
        knex('comments').insert({game_id: 2, comment: 'STREAKER! At last, some excitement.'}),
        knex('comments').insert({game_id: 2, comment: 'And the cops ruin everybody\'s fun >:(.'}),
        knex('comments').insert({game_id: 2, comment: 'Rongotai are getting desperate'}),
        knex('comments').insert({game_id: 2, comment: 'MSP break down the right'}),
        knex('comments').insert({game_id: 2, comment: 'But a violent tackle ends the threat'}),
        knex('comments').insert({game_id: 2, comment: 'Ref warns Rongotai\'s fullback for crying'}),
        knex('comments').insert({game_id: 2, comment: 'A surprisingly one-sided affair, this'}),
        knex('comments').insert({game_id: 2, comment: 'MSP are through to the final!'}),
        knex('comments').insert({game_id: 3, comment: 'The most keenly awaited Premier Final in decades...'}),
        knex('comments').insert({game_id: 4, comment: 'Phew! A game for the ages indeed.'}),
        knex('comments').insert({game_id: 5, comment: 'And the crowd goes absolutely bananas'}),
        knex('comments').insert({game_id: 7, comment: 'GOOOOOOOOOOOAAAAAAAAALLLLLLLLLLLL'}),
        knex('comments').insert({game_id: 7, comment: 'Sharks win!'}),
        knex('comments').insert({game_id: 8, comment: 'Karori will be glad that\'s over.'})
      ])
    })
}
