import { readCookie } from '../utils'

export const INCREMENT_TEAM_SCORE = 'INCREMENT_TEAM_SCORE'

const socket = window.socket

export const incrementTeamScore = (team) => {
  return dispatch => {
    socket.emit('increment', {
      team,
      id: readCookie('user.id'),
      type: 'increment'
    })
  }
}
