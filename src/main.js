import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import saga from './sagas'
import App from './components/app.jsx'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(createReducer(),
  { genres: [ { name: 'FPS' }, { name: 'MMO' } ],
    games: [
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1', url: 'league' },
      { imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee', url: 'melee' },
      { imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl', url: 'brawl' },
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2', url: 'league2' }
    ],
    drinkingGames: [
      { name: 'Drinking Game 1', url: 'drinkme' },
      { name: 'Drinking Game 2', url: 'drinkmemore' }
    ]
  },
  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga())

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
