import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import MainTemplate from './templates/main.jsx'
import Main from './main.jsx'
import Game from './game.jsx'
import DrinkingGame from './drinking-game.jsx'

class App extends Component {
  render () {
    const routes = (
      <Route>
        <Route component={MainTemplate} isHome>
          <Route path='/' component={Main} />
        </Route>
        <Route component={MainTemplate}>
          <Route path='/game/:game' component={Game} />
          <Route path='/game/:game/drink/:drinkingGame' component={DrinkingGame} />
        </Route>
      </Route>
    )

    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    )
  }
}

export default App
