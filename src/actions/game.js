import constants from './constants'

const gameAdd = (game) => ({
  type: constants.game.ADD.SUCCESS,
  name: game.name,
  userId: game.userId,
  url: game.url,
  imageUrl: game.imageUrl,
  iconImageUrl: game.iconImageUrl
})

const gameUpdate = (game) => ({
  type: constants.game.UPDATE.SUCCESS,
  name: game.name,
  userId: game.userId,
  url: game.url,
  imageUrl: game.imageUrl,
  iconImageUrl: game.iconImageUrl
})

const gameDelete = (game) => ({
  type: constants.game.DELETE.SUCCESS
})

export default {
  add: gameAdd,
  update: gameUpdate,
  delete: gameDelete
}
