const utils = require('./utils')

function getComments (field, value) {
  return utils.getOne('comments', field, value)
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
