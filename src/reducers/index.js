import { combineReducers } from 'redux'
import genres from './genres'
import games from './games'
import drinkingGames from './drinking-games'
import user from './user'
import users from './users'

function createRootReducer () {
  return combineReducers({ genres, games, drinkingGames, user, users })
}

export default createRootReducer
