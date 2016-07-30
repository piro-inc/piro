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

module.exports = {
  getComments,
  getCommentsTable,
  addComment
}
