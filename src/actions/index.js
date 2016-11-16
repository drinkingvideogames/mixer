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

const userLogin = (email, password) => ({
  type: constants.user.LOGIN.SUCCESS,
  email,
  password
})

const userRegister = (email, password) => ({
  type: constants.user.REGISTER.SUCCESS,
  email,
  password
})

export default {
  genreAdd,
  gameAdd,
  drinkingGameAdd,
  userLogin,
  userRegister
}
