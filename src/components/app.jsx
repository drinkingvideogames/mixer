import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import MainTemplate from './templates/main.jsx'
import Main from './main.jsx'
import Game from './game.jsx'

class App extends Component {
  render () {
    const routes = (
      <Route component={MainTemplate}>
        <Route path='/' component={Main} />
        <Route path='/game/:game' component={Game} />
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
