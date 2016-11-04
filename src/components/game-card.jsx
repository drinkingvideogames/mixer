import React, { Component } from 'react'

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
      <div className='card small' style={{ width: '300px' }}>
        <div className='card-image' style={styles.cardImage} />
        <div className='card-content'>
          <p>{this.props.name}</p>
        </div>
        <div className='card-action'>
          <a href='#'>This is a link</a>
        </div>
      </div>
    )
  }
}

export default GameCard
