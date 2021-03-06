import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Map } from 'immutable'
import { genreActions, gameActions } from './actions'
import createReducer from './reducers'
import saga from './sagas'
import App from './components/app.jsx'

import io from 'socket.io-client'
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import authentication from 'feathers-authentication-client'

injectTapEventPlugin()

const sagaMiddleware = createSagaMiddleware()

const socket = io()
const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({ storage: window.localStorage }))

const store = createStore(createReducer(),
  Map({}),
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga(app))

const genreService = app.service('genres')
genreService.find().then((genres) => {
  genres.data.forEach((genre) => {
    store.dispatch(genreActions.add(genre.name))
  })
})

const gameService = app.service('games')
gameService.find().then((games) => {
  games.data.forEach((game) => {
    store.dispatch(gameActions.add(game))
  })
})

if (window.localStorage && window.localStorage['feathers-jwt']) {
  const user = window.localStorage['feathers-jwt']
  store.dispatch({ type: 'USER_LOGIN', payload: { strategy: 'jwt', accessToken: user } })
}

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const createNextRootReducer = require('./reducers/index').default
    store.replaceReducer(createNextRootReducer)
  })
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
