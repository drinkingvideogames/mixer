import { combineReducers } from 'redux'
import genres from './genres'
import games from './games'
import drinkingGames from './drinking-games'
import user from './users'

function createRootReducer () {
  return combineReducers({ genres, games, drinkingGames, user })
}

export default createRootReducer
