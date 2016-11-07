import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

export default function makeSaga(app) {

  function* addGenre (action) {
    try {
      yield put({ type: 'genre/ADD/SUCCESS', name: action.payload.name })
    } catch (e) {
      yield put({ type: 'genre/ADD/FAILED', message: e.message })
    }
  }

  function* mySaga () {
    yield * takeEvery('GENRE_ADD', addGenre)
  }
  
  return mySaga
}
