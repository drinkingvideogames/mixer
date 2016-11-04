import React, { Component } from 'react'
import Header from './header.jsx'
import GameCard from './game-card.jsx'

class Main extends Component {
  render () {
    const games = [
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1' },
      { imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee' },
      { imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl' },
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2' }
    ]
    return (
      <div>
        <Header />
        <div className='row'>
          {games.map((game, index) => {
            return (<div className='col s3 m3' key={index}>
              <GameCard imageUrl={game.imageUrl} name={game.name} />
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default Main
