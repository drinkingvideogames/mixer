import constants from '../actions/constants'

const drinkingGame = (state, action) => {
  switch (action.type) {
    case constants.drinkingGame.ADD:
      return {
        name: action.name,
        url: action.url,
        imageUrl: action.imageUrl
      }
    default:
      return state
  }
}

const drinkingGames = (state = [], action) => {
  switch (action.type) {
    case constants.drinkingGame.ADD:
      return [
        ...state,
        drinkingGame(undefined, action)
      ]
    default:
      return state
  }
}

export default drinkingGames
