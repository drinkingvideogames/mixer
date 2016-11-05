import constants from '../actions/constants'

const genre = (state, action) => {
  switch (action.type) {
    case constants.genre.ADD:
      return {
        name: action.name
      }
    default:
      return state
  }
}

const genres = (state = [], action) => {
  switch (action.type) {
    case constants.genre.ADD:
      return [
        ...state,
        genre(undefined, action)
      ]
    default:
      return state
  }
}

export default genres
