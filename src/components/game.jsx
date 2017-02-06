import React, { Component } from 'react'
import { connect } from 'react-redux'
import DrinkingGameCard from './drinking-game-card.jsx'

class Game extends Component {
  render () {
    const game = this.props.games.find((game) => game.url === this.props.routeParams.game)

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
                  <span className='card-title'>Drinking Games</span>
                  <div className='row'>
                    {this.props.drinkingGames.map((drinkingGame, index) => {
                      return (<div className='col s12 m6 l3' key={index}>
                        <DrinkingGameCard game={game} drinkingGame={drinkingGame} />
                      </div>)
                    })}
                  </div>
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
  return { games: state.get('games'), drinkingGames: state.get('drinkingGames'), user: state.get('user') }
}

export default connect(mapStateToProps)(Game)
