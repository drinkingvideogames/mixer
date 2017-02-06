import { Map } from 'immutable'
import constants from '../actions/constants'

const init = Map({})

const user = (state = init, action) => {
  switch (action.type) {
    case constants.user.LOGIN.SUCCESS:
      return Map({
        _id: action._id,
        email: action.email,
        verified: action.verified,
        roles: action.roles
      })
    case constants.user.LOGOUT.SUCCESS:
      return Map({})
    default:
      return state
  }
}

export default user
