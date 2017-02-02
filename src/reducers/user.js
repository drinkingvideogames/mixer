import constants from '../actions/constants'

const user = (state = {}, action) => {
  switch (action.type) {
    case constants.user.LOGIN.SUCCESS:
      return {
        _id: action._id,
        email: action.email,
        verified: action.verified
      }
    case constants.user.LOGOUT.SUCCESS:
      return {}
    default:
      return state
  }
}

export default user
