import constants from './constants'

const genreAdd = (name) => ({
  type: constants.genre.ADD.SUCCESS,
  name
})

const gameAdd = (name, url, imageUrl, iconImageUrl) => ({
  type: constants.game.ADD.SUCCESS,
  name,
  url,
  imageUrl,
  iconImageUrl
})

const drinkingGameAdd = (game, name, url) => ({
  type: constants.drinkingGame.ADD,
  name,
  url
})

const userLogin = (email) => ({
  type: constants.user.LOGIN.SUCCESS,
  email
})

const userLogout = () => ({
  type: constants.user.LOGOUT.SUCCESS
})

export default {
  genreAdd,
  gameAdd,
  drinkingGameAdd,
  userLogin,
  userLogout
}
