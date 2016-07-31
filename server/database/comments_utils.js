const utils = require('./utils')

function getComments (params) {
  return utils.getOne('comments', params)
}

function getCommentsTable () {
  return utils.getAll('comments')
}

function addComment (obj) {
  return utils.addOne('comments', obj)
}

function getLatestComment (gameId) {
  return utils.getOne('comments', {game_id: gameId})
    .then((comments) => {
      return comments[comments.length - 1]
    })
}

// get latest

module.exports = {
  getComments,
  getCommentsTable,
  addComment,
  getLatestComment
}
