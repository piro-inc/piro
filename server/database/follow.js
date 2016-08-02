const utils = require('./utils')

function followGame (userId, gameId) {
  return utils.getOne('following_join', {user_id: userId, game_id: gameId})
    .then((follow) => {
      if (follow && follow.length) {
        return false
      } else {
        return utils.addOne('following_join', {user_id: userId, game_id: gameId}).returning('id')
      }
    })
}

function unfollowGame (userId, gameId) {
  return utils.deleteRow('following_join', {user_id: userId, game_id: gameId})
}

module.exports = {
  followGame,
  unfollowGame
}
