import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

export default function makeSaga (app) {
  function* addGenre (action) {
    try {
      const genre = yield app.service('genres').create(action.payload)
      yield put({ type: 'genre/ADD/SUCCESS', name: genre.name })
    } catch (e) {
      yield put({ type: 'genre/ADD/FAILED', message: e.message })
    }
  }

  function* mySaga () {
    yield * takeEvery('GENRE_ADD', addGenre)
  }

  return mySaga
}
