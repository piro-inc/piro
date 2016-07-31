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
      gameInfo.comments = infoArray[1]
      return gameInfo
    })
    .catch((err) => {
      console.log('error', err)
    })
}

function getGamesInfo () {
  let gamesInfo = {}
  return getGamesTable()
    .then((games) => {
      return games.map((game) => {
        game.comment = commentsUtils.getLatestComment(game.id)
      })
    })

}

module.exports = {
  getGame,
  addGame,
  getGamesTable,
  getGameComments
}
