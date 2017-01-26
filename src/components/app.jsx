import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainTemplate from './templates/main.jsx'
import Main from './main.jsx'
import Game from './game.jsx'
import DrinkingGame from './drinking-game.jsx'
import Profile from './profile.jsx'

class App extends Component {
  render () {
    const routes = (
      <Route component={MainTemplate}>
        <Route path='/' component={Main} />
        <Route path='/game/:game' component={Game} />
        <Route path='/game/:game/drink/:drinkingGame' component={DrinkingGame} />
        <Route path='/profile' component={Profile} />
      </Route>
    )

    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
