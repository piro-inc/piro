
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'user1', password: 'something', email: 'user1@email.com'}),
        knex('users').insert({username: 'George', password: 'something', email: 'george@email.com'}),
        knex('users').insert({username: 'Kristy', password: 'something', email: 'kristy@email.com'})
      ])
    })
}
