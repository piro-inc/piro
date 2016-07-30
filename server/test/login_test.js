var test = require('tape')
var request = require('superagent')

test('Login test segment', function (t) {
  t.deepEqual(1, 1)
  t.end()
})

test('We can get blocked by the API', function (t) {
  const expected = 403

  request
    .get('http://localhost:3000/api/users/2')
    .end(function (err, res) {
      t.deepEqual(err.status, expected, 'We are blocked from accessing users')
      t.end()
    })
})