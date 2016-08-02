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

function getGamesInfo (userId = null) {
  let gamesInfo = {}
  return getGamesTable()
    .then((games) => {
      gamesInfo = games
      return Promise.all(games.map((game) => {
        return commentsUtils.getLatestComment(game.id)
      }))
    })
    .then((comments) => {
      gamesInfo.map((game) => {
        game.latestComment = comments.find((comment) => {
          return (comment && comment.game_id === game.id)
        })
      })
      return gamesInfo
    })
}

function updateGame (searchParams, updateInfo) {
  return utils.update('games', searchParams, updateInfo)
}

module.exports = {
  getGame,
  addGame,
  getGamesTable,
  getGameComments,
  getGamesInfo,
  updateGame
}
