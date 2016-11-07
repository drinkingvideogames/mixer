import constants from '../actions/constants'

const genre = (state, action) => {
  switch (action.type) {
    case constants.genre.ADD.SUCCESS:
      return Object.assign({}, { name: action.name })
    default:
      return state
  }
}

const genres = (state = [], action) => {
  switch (action.type) {
    case constants.genre.ADD.SUCCESS:
      return [
        ...state,
        genre(undefined, action)
      ]
    default:
      return state
  }
}

export default genres
