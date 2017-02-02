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

const userLoginFail = (e) => ({
  type: constants.user.LOGIN.FAILED,
  message: e.message
})

const userLogout = () => ({
  type: constants.user.LOGOUT.SUCCESS
})

const usersLoad = (users) => ({
  type: constants.users.LOAD.SUCCESS,
  users
})

const usersLoadFail = (e) => ({
  type: constants.users.LOAD.FAILED,
  message: e.message
})

export default {
  genreAdd,
  gameAdd,
  drinkingGameAdd,
  userLogin,
  userLoginFail,
  userLogout,
  usersLoad,
  usersLoadFail
}
