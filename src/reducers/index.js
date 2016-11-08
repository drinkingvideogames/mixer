import { combineReducers } from 'redux'
import genres from './genres'
import games from './games'
import drinkingGames from './drinking-games'

function createRootReducer () {
  return combineReducers({ genres, games, drinkingGames })
}

export default createRootReducer
