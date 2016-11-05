import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/app.jsx'

const store = createStore(reducer,
  { genres: [ { name: 'FPS' }, { name: 'MMO' } ],
    games: [
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1', url: 'league' },
      { imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee', url: 'melee' },
      { imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl', url: 'brawl' },
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2', url: 'league2' }
    ]
  })

if (module.hot) module.hot.accept()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
