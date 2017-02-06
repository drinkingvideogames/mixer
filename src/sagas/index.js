import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { errorActions } from '../actions'
import makeUserSagas from './user'
import makeGameSagas from './game'
import makeGenreSagas from './genre'

export default function makeSaga (app) {
  const genreSagas = makeGenreSagas(app)
  const gameSagas = makeGameSagas(app)
  const userSagas = makeUserSagas(app)

  function* clearError (action) {
    yield put(errorActions.clear(action.payload.errorName))
  }

  function* mySaga () {
    yield [
      takeEvery('GENRE_ADD', genreSagas.add),
      takeEvery('GAME_ADD', gameSagas.add),
      takeEvery('GAME_UPDATE', gameSagas.update),
      takeEvery('USER_LOGIN', userSagas.login),
      takeEvery('USER_REGISTER', userSagas.register),
      takeEvery('USER_LOGOUT', userSagas.logout),
      takeEvery('USERS_LOAD', userSagas.loadAll),
      takeEvery('ERROR_CLEAR', clearError)
    ]
  }

  return mySaga
}
