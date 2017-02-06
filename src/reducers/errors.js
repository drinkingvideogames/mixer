import { Map } from 'immutable'
import constants from '../actions/constants'

const init = Map({})

const errors = (state = init, action) => {
  switch (action.type) {
    case constants.genre.ADD.FAILED:
      return state.set('genreAdd', action.error)
    case constants.game.ADD.FAILED:
      return state.set('gameAdd', action.error)
    case constants.user.LOGIN.FAILED:
      return state.set('userLogin', action.error)
    case constants.user.REGISTER.FAILED:
      return state.set('userRegister', action.error)
    case constants.user.LOGOUT.FAILED:
      return state.set('userLogout', action.error)
    case constants.users.LOAD.FAILED:
      return state.set('usersLoad', action.error)
    case constants.errors.CLEAR:
      if (state.has(action.errorName)) {
        return state.delete(action.errorName)
      }
      return state
    default:
      return state
  }
}

export default errors
