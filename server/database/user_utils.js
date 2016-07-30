const utils = require('./utils')

function getUser (field, value) {
  return utils.getOne('users', field, value)
}

function addUser (obj) {
  return utils.addOne('users', obj)
}

function getUsersTable () {
  return utils.getAll('users')
}

module.exports = {
  getUser,
  addUser,
  getUsersTable
}
