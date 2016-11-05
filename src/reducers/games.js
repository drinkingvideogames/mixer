import constants from '../actions/constants'

const game = (state, action) => {
  switch (action.type) {
    case constants.game.ADD:
      return {
        name: action.name,
        url: action.url,
        imageUrl: action.imageUrl
      }
    default:
      return state
  }
}

const games = (state = [], action) => {
  switch (action.type) {
    case constants.game.ADD:
      return [
        ...state,
        game(undefined, action)
      ]
    default:
      return state
  }
}

export default games
