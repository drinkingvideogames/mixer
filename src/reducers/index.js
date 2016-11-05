import { combineReducers } from 'redux'
import genres from './genres'
import games from './games'

const rootReducer = combineReducers({ genres, games })

export default rootReducer
