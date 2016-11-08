import React, { Component } from 'react'
import { Link } from 'react-router'

class GameCard extends Component {
  render () {
    const styles = {
      cardImage: {
        height: '60%',
        backgroundImage: `url(${this.props.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center center'
      }
    }
    return (
      <Link to={`/game/${this.props.url}`}>
        <div className='card small hoverable'>
          <div className='card-image' style={styles.cardImage} />
          <div className='card-content'>
            <span className='card-title grey-text text-darken-4'>{this.props.name}</span>
          </div>
        </div>
      </Link>
    )
  }
}

export default GameCard
