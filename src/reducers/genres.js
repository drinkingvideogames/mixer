import { List, Map } from 'immutable'
import constants from '../actions/constants'

const init = List([])

const genre = (state, action) => {
  switch (action.type) {
    case constants.genre.ADD.SUCCESS:
      return Map({ name: action.name })
    default:
      return state
  }
}

const genres = (state = init, action) => {
  switch (action.type) {
    case constants.genre.ADD.SUCCESS:
      return state.push(genre(undefined, action))
    default:
      return state
  }
}

export default genres
