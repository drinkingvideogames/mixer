import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class DrinkingGame extends Component {
  render () {
    const game = this.props.games.toJS().find((game) => game.url === this.props.routeParams.game)
    const drinkingGame = this.props.drinkingGames.toJS().find((game) => game.url === this.props.routeParams.drinkingGame)

    if (game && drinkingGame) {
      return (
        <div>
          <nav>
            <div className='nav-wrapper blue'>
              <Link className='brand-logo center' to={`/game/${game.url}`}>
                {game.name}
              </Link>
            </div>
          </nav>
          <div className='row'>
            <div className='col s12 m12'>
              <div className='card'>
                <div className='card-content'>
                  <span className='card-title'>{drinkingGame.name}</span>
                  <p>Drink some things!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div>Sorry, no such game could be found!</div>)
    }
  }
}

const mapStateToProps = (state) => {
  return { games: state.get('games'), drinkingGames: state.get('drinkingGames') }
}

export default connect(mapStateToProps)(DrinkingGame)
