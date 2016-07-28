
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'user1', password: 'something', email: 'user1@email.com'}),
        knex('users').insert({id: 2, username: 'George', password: 'something', email: 'george@email.com'}),
        knex('users').insert({id: 3, username: 'Kristy', password: 'something', email: 'kristy@email.com'})
      ])
    })
}
