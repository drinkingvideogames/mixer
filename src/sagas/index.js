import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

function* addGenre(action) {
   try {
      const user = yield call(function () { console.log('saga called', arguments) }, action.payload.name);
      yield put({type: 'ADD_GENRE_SUCCEEDED', user: user});
   } catch (e) {
      yield put({type: 'ADD_GENRE_FAILED', message: e.message});
   }
}

function* mySaga() {
  yield* takeEvery('genre/ADD', addGenre);
}

export default mySaga