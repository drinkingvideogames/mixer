import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import injectTapEventPlugin from 'react-tap-event-plugin'
import actions from './actions'
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
  { genres: [],
    games: [
      { iconImageUrl: '/imgs/icons/league.png', imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1', url: 'league' },
      { iconImageUrl: '/imgs/icons/melee.png', imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee', url: 'melee' },
      { iconImageUrl: '/imgs/icons/brawl.png', imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl', url: 'brawl' },
      { iconImageUrl: '/imgs/icons/league.png', imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2', url: 'league2' }
    ],
    drinkingGames: [
      { name: 'Drinking Game 1', url: 'drinkme' },
      { name: 'Drinking Game 2', url: 'drinkmemore' }
    ],
    users: []
  },
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga(app))

const genreService = app.service('genres')
genreService.find().then((genres) => {
  genres.data.forEach((genre) => {
    store.dispatch(actions.genreAdd(genre.name))
  })
})

const gameService = app.service('games')
gameService.find().then((games) => {
  games.data.forEach((game) => {
    store.dispatch(actions.gameAdd(game))
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
