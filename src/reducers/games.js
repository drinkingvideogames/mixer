import Immutable, { Map } from 'immutable'
import constants from '../actions/constants'

const init = Immutable.fromJS([
  { iconImageUrl: '/imgs/icons/league.png', imageUrl: '/imgs/icons/league.png', name: 'League of Legends 1', url: 'league' },
  { iconImageUrl: '/imgs/icons/melee.png', imageUrl: '/imgs/icons/melee.png', name: 'Super Smash Bros Melee', url: 'melee' },
  { iconImageUrl: '/imgs/icons/brawl.png', imageUrl: '/imgs/icons/brawl.png', name: 'Super Smash Bros Brawl', url: 'brawl' },
  { iconImageUrl: '/imgs/icons/league.png', imageUrl: '/imgs/icons/league.png', name: 'League of Legends 2', url: 'league2' }
])

const game = (state, action) => {
  switch (action.type) {
    case constants.game.ADD.SUCCESS:
      return Map({
        name: action.name,
        url: action.url,
        imageUrl: action.imageUrl,
        iconImageUrl: action.iconImageUrl,
        userId: action.userId
      })
    default:
      return state
  }
}

const games = (state = init, action) => {
  switch (action.type) {
    case constants.game.ADD.SUCCESS:
      return state.push(game(undefined, action))
    default:
      return state
  }
}

export default games
