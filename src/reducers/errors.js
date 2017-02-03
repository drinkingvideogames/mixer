import constants from '../actions/constants'

const errors = (state = {}, action) => {
  switch (action.type) {
    case constants.genre.ADD.FAILED:
      return Object.assign({}, state, { genreAdd: action.error })
    case constants.game.ADD.FAILED:
      return Object.assign({}, state, { gameAdd: action.error })
    case constants.user.LOGIN.FAILED:
      return Object.assign({}, state, { userLogin: action.error })
    case constants.user.REGISTER.FAILED:
      return Object.assign({}, state, { userRegister: action.error })
    case constants.user.LOGOUT.FAILED:
      return Object.assign({}, state, { userLogout: action.error })
    case constants.users.LOAD.FAILED:
      return Object.assign({}, state, { usersLoad: action.error })
    case constants.errors.CLEAR:
      const newState = Object.assign({}, state)
      delete newState[action.errorName]
      return newState
    default:
      return state
  }
}

export default errors
