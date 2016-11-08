import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import actions from '../actions'

export default function makeSaga (app) {
  function* addGenre (action) {
    try {
      console.log('making genre', action.payload)
      const genre = yield app.service('genres').create(action.payload)
      yield put(actions.genreAdd(genre.name))
    } catch (e) {
      yield put({ type: 'genre/ADD/FAILED', message: e.message })
    }
  }

  function* addGame (action) {
    try {
      console.log('making game', action.payload)
      const game = yield app.service('games').create(action.payload)
      yield put(actions.gameAdd(game.name, game.url, game.imageUrl))
    } catch (e) {
      yield put({ type: 'game/ADD/FAILED', message: e.message })
    }
  }

  function* mySaga () {
    yield [ takeEvery('GENRE_ADD', addGenre), takeEvery('GAME_ADD', addGame) ]
  }

  return mySaga
}
