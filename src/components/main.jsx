import React, { Component } from 'react'
import { connect } from 'react-redux'
import GameCard from './game-card.jsx'

class Main extends Component {
  render () {
    return (
      <div className='row'>
        {this.props.games.toArray().map((game, index) => {
          return (<div className='col s12 m6 l3' key={index}>
            <GameCard imageUrl={game.get('imageUrl')} name={game.get('name')} url={game.get('url')} />
          </div>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { games: state.get('games') }
}

export default connect(mapStateToProps)(Main)
