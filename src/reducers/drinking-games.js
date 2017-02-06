import Immutable, { Map } from 'immutable'
import constants from '../actions/constants'

const init = Immutable.fromJS([
  { name: 'Drinking Game 1', url: 'drinkme' },
  { name: 'Drinking Game 2', url: 'drinkmemore' }
])

const drinkingGame = (state, action) => {
  switch (action.type) {
    case constants.drinkingGame.ADD:
      return Map({
        name: action.name,
        url: action.url
      })
    default:
      return state
  }
}

const drinkingGames = (state = init, action) => {
  switch (action.type) {
    case constants.drinkingGame.ADD:
      return state.push(drinkingGame(undefined, action))
    default:
      return state
  }
}

export default drinkingGames
