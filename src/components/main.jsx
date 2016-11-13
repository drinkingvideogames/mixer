import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameCard from './game-card.jsx'

class Main extends Component {
  render () {
    return (
      <div className='row'>
        {this.props.games.map((game, index) => {
          return (<div className='col s12 m6 l3' key={index}>
            <GameCard imageUrl={game.imageUrl} name={game.name} url={game.url} />
          </div>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { games: state.games }
}

export default connect(mapStateToProps)(Main)
