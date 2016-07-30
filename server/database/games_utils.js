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

function getGameComments (game_id) {
  let gameInfo = {}
  return Promise.all([
    getGame({id: game_id}),
    commentsUtils.getComments({game_id})
  ])
    .then((infoArray) => {
      gameInfo.game = Object.assign({}, infoArray[0])
      gameInfo.comments = Object.assign({}, infoArray[1])
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





