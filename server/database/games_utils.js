const utils = require('./utils')

function getGame (params) {
  return utils.getOne('games', params)
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
