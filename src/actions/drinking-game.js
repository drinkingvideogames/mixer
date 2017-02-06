import constants from './constants'

const drinkingGameAdd = (game, name, url) => ({
  type: constants.drinkingGame.ADD,
  name,
  url
})

export default { add: drinkingGameAdd }
