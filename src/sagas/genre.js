import { put } from 'redux-saga/effects'
import { genreActions, errorActions } from '../actions'

export default function makeGenreSagas (app) {
  function* add (action) {
    try {
      const genre = yield app.service('genres').create(action.payload)
      yield put(genreActions.add(genre.name))
    } catch (e) {
      console.error(e)
      yield put(errorActions.genreAdd(e))
    }
  }

  return { add }
}
