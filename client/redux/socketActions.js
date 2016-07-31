import { readCookie } from '../utils'
import { socket } from '../index'

export const INCREMENT_TEAM_SCORE = 'INCREMENT_TEAM_SCORE'

export const incrementTeamScore = (team) => {
  return dispatch => {
    socket.emit('increment', {
      team,
      id: readCookie('user.id'),
      type: 'increment'
    })
  }
}
