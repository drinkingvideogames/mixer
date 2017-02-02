import constants from '../actions/constants'

const users = (state = [], action) => {
  switch (action.type) {
    case constants.users.LOAD.SUCCESS:
      return action.users.concat([])
    default:
      return state
  }
}

export default users
