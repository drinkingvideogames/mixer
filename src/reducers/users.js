import { List } from 'immutable'
import constants from '../actions/constants'

const init = List([])

const users = (state = init, action) => {
  switch (action.type) {
    case constants.users.LOAD.SUCCESS:
      return List(action.users)
    default:
      return state
  }
}

export default users
