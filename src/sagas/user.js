import { put } from 'redux-saga/effects'
import { userActions, errorActions } from '../actions'

export default function makeUserSagas (app) {
  function performLogin (app, action) {
    if (!action.payload.strategy) {
      action.payload.strategy = 'local'
    }
    return app.authenticate(action.payload)
      .then(response => app.passport.verifyJWT(response.accessToken))
      .then(payload => app.service('users').get(payload.userId))
  }

  function* login (action) {
    try {
      const user = yield performLogin(app, action)
      yield put(userActions.login(user))
    } catch (e) {
      console.error(e)
      yield put(errorActions.userLogin(e))
    }
  }

  function* register (action) {
    try {
      const loginAction = yield app.service('users').create(action.payload)
        .then((data) => {
          return { payload: { email: data.email, password: action.payload.password } }
        })
      const loggedInUser = yield performLogin(app, loginAction)
      yield put(userActions.login(loggedInUser))
    } catch (e) {
      console.error(e)
      yield put(errorActions.userRegister(e))
    }
  }

  function* logout (action) {
    try {
      yield app.logout()
      yield put(userActions.logout())
    } catch (e) {
      console.error(e)
      yield put(errorActions.userLogout(e))
    }
  }

  function* loadAll (action) {
    try {
      const users = yield app.service('users').find().then((users) => {
        return users.data.map((user) => (
          { email: user.email, verified: user.verified }
        ))
      })
      yield put(userActions.loadAll(users))
    } catch (e) {
      console.error(e)
      yield put(errorActions.usersLoad(e))
    }
  }

  return {
    login,
    register,
    logout,
    loadAll
  }
}
