const utils = require('./utils')
const commentsUtils = require('./comments_Utils')

function getGame (params) {
  return utils.getOne('games', params)
}

function addGame (obj) {
  return utils.addOne('games', obj)
}

function getGamesTable () {
  return utils.getAll('games')
}

function getGameComments (game_id) {
  return getGame({id: game_id})
}

module.exports = {
  getGame,
  addGame,
  getGamesTable,
  getGameComments
}





