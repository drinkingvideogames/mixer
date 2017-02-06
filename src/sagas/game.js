import { put } from 'redux-saga/effects'
import { userActions, errorActions } from '../actions'
import upload from './lib/upload'

export default function makeGameSagas (app) {
  function* add (action) {
    try {
      const image = yield upload(app.service('gameimages'), action.payload.imageUrl)
      const iconImage = yield upload(app.service('gameicons'), action.payload.iconImageUrl)
      action.payload.imageUrl = '/uploads/imgs/images/' + image.id
      action.payload.iconImageUrl = '/uploads/imgs/icons/' + iconImage.id
      const game = yield app.service('games').create(action.payload)
      yield put(userActions.add(game))
    } catch (e) {
      console.error(e)
      yield put(errorActions.gameAdd(e))
    }
  }

  function* update (action) {
    try {
      const game = yield app.service('games')
        .update({ _id: action.payload._id },
        { $set: { name: action.payload.name, url: action.payload.url }
        })
      yield put(userActions.update(game))
    } catch (e) {
      console.error(e)
      yield put(errorActions.gameUpdate(e))
    }
  }

  return { add, update }
}
