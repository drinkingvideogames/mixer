import React, { Component } from 'react'
import GameCard from './game-card.jsx'

class Main extends Component {
  render () {
    const games = [
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1', url: 'league' },
      { imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee', url: 'melee' },
      { imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl', url: 'brawl' },
      { imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2', url: 'league2' }
    ]
    return (
      <div className='row'>
        {games.map((game, index) => {
          return (<div className='col s3 m3' key={index}>
            <GameCard imageUrl={game.imageUrl} name={game.name} url={game.url} />
          </div>)
        })}
      </div>
    )
  }
}

export default Main
