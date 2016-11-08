import React, { Component } from 'react'
import { Link } from 'react-router'

class DrinkingGameCard extends Component {
  render () {
    return (
      <Link to={`/game/${this.props.game.url}/drink/${this.props.drinkingGame.url}`}>
        <div className='card hoverable'>
          <div className='card-content'>
            <span className='card-title'>{this.props.drinkingGame.name}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default DrinkingGameCard
