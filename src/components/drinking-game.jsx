import React, { Component } from 'react'
import { connect } from 'react-redux'

class DrinkingGame extends Component {
  render () {
    const game = this.props.games.find((game) => game.url === this.props.routeParams.game)
    const drinkingGame = this.props.drinkingGames.find((game) => game.url === this.props.routeParams.drinkingGame)

    if (game) {
      return (
        <div>
          <nav>
            <div className='nav-wrapper blue'>
              <a href='#' className='brand-logo center'>{game.name}</a>
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
  return { games: state.games, drinkingGames: state.drinkingGames }
}

export default connect(mapStateToProps)(DrinkingGame)
