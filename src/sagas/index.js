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

function login (app, action) {
  if (!action.payload.strategy) {
    action.payload.strategy = 'local'
  }
  return app.authenticate(action.payload)
    .then(response => app.passport.verifyJWT(response.accessToken))
    .then(payload => app.service('users').get(payload.userId))
}

export default function makeSaga (app) {
  function* addGenre (action) {
    try {
      const genre = yield app.service('genres').create(action.payload)
      yield put(actions.genreAdd(genre.name))
    } catch (e) {
      console.error(e)
      yield put(actions.errors.genreAdd(e))
    }
  }

  function* addGame (action) {
    try {
      const image = yield upload(app.service('gameimages'), action.payload.imageUrl)
      const iconImage = yield upload(app.service('gameicons'), action.payload.iconImageUrl)
      action.payload.imageUrl = '/uploads/imgs/images/' + image.id
      action.payload.iconImageUrl = '/uploads/imgs/icons/' + iconImage.id
      const game = yield app.service('games').create(action.payload)
      yield put(actions.gameAdd(game))
    } catch (e) {
      console.error(e)
      yield put(actions.errors.gameAdd(e))
    }
  }

  function* loginUser (action) {
    try {
      const user = yield login(app, action)
      yield put(actions.userLogin(user))
    } catch (e) {
      console.error(e)
      yield put(actions.errors.userLogin(e))
    }
  }

  function* registerUser (action) {
    try {
      const loginAction = yield app.service('users').create(action.payload)
        .then((data) => {
          return { payload: { email: data.email, password: action.payload.password } }
        })
      const loggedInUser = yield login(app, loginAction)
      yield put(actions.userLogin(loggedInUser))
    } catch (e) {
      console.error(e)
      yield put(actions.errors.userRegister(e))
    }
  }

  function* logoutUser (action) {
    try {
      yield app.logout()
      yield put(actions.userLogout())
    } catch (e) {
      console.error(e)
      yield put(actions.errors.userLogout(e))
    }
  }

  function* loadUsers (action) {
    try {
      const users = yield app.service('users').find().then((users) => {
        return users.data.map((user) => ({ email: user.email }))
      })
      yield put(actions.usersLoad(users))
    } catch (e) {
      console.error(e)
      yield put(actions.errors.usersLoad(e))
    }
  }

  function* clearError (action) {
    yield put(actions.errors.clear(action.payload.errorName))
  }

  function* mySaga () {
    yield [
      takeEvery('GENRE_ADD', addGenre),
      takeEvery('GAME_ADD', addGame),
      takeEvery('USER_LOGIN', loginUser),
      takeEvery('USER_REGISTER', registerUser),
      takeEvery('USER_LOGOUT', logoutUser),
      takeEvery('USERS_LOAD', loadUsers),
      takeEvery('ERROR_CLEAR', clearError)
    ]
  }

  return mySaga
}
