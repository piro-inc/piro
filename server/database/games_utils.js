const utils = require('./utils')

function getGame (field, value) {
  return utils.getOne('games', field, value)
}

function addGame (obj) {
  return utils.addOne('games', obj)
}

function getGamesTable () {
  return utils.getAll('games')
}

module.exports = {
  getGame,
  addGame,
  getGamesTable
}
