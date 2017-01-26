import constants from '../actions/constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case constants.user.LOGIN.SUCCESS:
      return {
        email: action.email
      }
    case constants.user.LOGOUT.SUCCESS:
      return {}
    default:
      return state
  }
}

export default user
