const utils = require('./utils')
const commentsUtils = require('./comments_utils')

function getGame (params) {
  return utils.getOne('games', params)
}

function addGame (obj) {
  return utils.addOne('games', obj)
}

function getGamesTable () {
  return utils.getAll('games')
}

function getGameComments (gameId) {
  let gameInfo = {}
  return Promise.all([
    getGame({id: gameId}),
    commentsUtils.getComments({game_id: gameId})
  ])
    .then((infoArray) => {
      gameInfo.game = Object.assign({}, infoArray[0][0])
      gameInfo.comments = infoArray[1].map(comment => comment.comment)
      return gameInfo
    })
    .catch((err) => {
      console.log('error', err)
    })
}

module.exports = {
  getGame,
  addGame,
  getGamesTable,
  getGameComments
}
