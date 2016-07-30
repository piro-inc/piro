const utils = require('./utils')

function getUser (params) {
  return utils.getOne('users', params)
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
