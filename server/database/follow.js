const utils = require('./utils')

function followGame(userId, gameId) {
  return utils.addOne ('following_join', {user_id: userId, game_id: gameId})
}

function unfollowGame(userId, gameId) {
  return utils.deleteRow ('following_join', {user_id: userId, game_id: gameId})
}

module.exports = {
  followGame,
  unfollowGame
}