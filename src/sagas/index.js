import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import actions from '../actions'

function upload (service, file) {
  function getBlob (file) {
    return new Promise((resolve, reject) => {
      const xhr = new window.XMLHttpRequest()
      xhr.open('GET', file.preview, true)
      xhr.responseType = 'blob'
      xhr.onload = function (e) {
        if (this.status === 200) {
          var myBlob = this.response
          return resolve(myBlob)
        } else {
          return reject()
        }
      }
      xhr.send()
    })
  }

  function getDataUri (blob) {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  }

  return new Promise((resolve, reject) => {
    getBlob(file)
      .then(getDataUri)
      .then((data) => {
        service
          .create({ uri: data })
          .then(resolve)
          .catch(reject)
      })
  })
}

export default function makeSaga (app) {
  function* addGenre (action) {
    try {
      const genre = yield app.service('genres').create(action.payload)
      yield put(actions.genreAdd(genre.name))
    } catch (e) {
      yield put({ type: 'genre/ADD/FAILED', message: e.message })
    }
  }

  function* addGame (action) {
    try {
      const image = yield upload(app.service('gameimages'), action.payload.image)
      const iconImage = yield upload(app.service('gameicons'), action.payload.iconImage)
      action.payload.imageUrl = '/uploads/imgs/images/' + image.id
      action.payload.iconImageUrl = '/uploads/imgs/icons/' + iconImage.id
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
