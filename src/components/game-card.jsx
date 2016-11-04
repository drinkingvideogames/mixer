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
      <div className='card small hoverable'>
        <div className='card-image' style={styles.cardImage} />
        <div className='card-content'>
          <p>{this.props.name}</p>
        </div>
        <div className='card-action'>
          <Link to={`/game/${this.props.url}`}>More details!</Link>
        </div>
      </div>
    )
  }
}

export default GameCard
