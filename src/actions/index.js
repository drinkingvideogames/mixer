import constants from './constants'

const genreAdd = (name) => ({
  type: constants.genre.ADD.SUCCESS,
  name
})

const gameAdd = (game) => ({
  type: constants.game.ADD.SUCCESS,
  name: game.name,
  userId: game.userId,
  url: game.url,
  imageUrl: game.imageUrl,
  iconImageUrl: game.iconImageUrl
})

const drinkingGameAdd = (game, name, url) => ({
  type: constants.drinkingGame.ADD,
  name,
  url
})

const userLogin = (user) => ({
  type: constants.user.LOGIN.SUCCESS,
  _id: user._id,
  email: user.email,
  verified: user.verified
})

const userLogout = () => ({
  type: constants.user.LOGOUT.SUCCESS
})

const usersLoad = (users) => ({
  type: constants.users.LOAD.SUCCESS,
  users
})

const errors = {
  genreAdd: (e) => ({ type: constants.genre.ADD.FAILED, error: e }),
  gameAdd: (e) => ({ type: constants.game.ADD.FAILED, error: e }),
  userLogin: (e) => ({ type: constants.user.LOGIN.FAILED, error: e }),
  userRegister: (e) => ({ type: constants.user.REGISTER.FAILED, error: e }),
  userLogout: (e) => ({ type: constants.user.LOGOUT.FAILED, error: e }),
  usersLoad: (e) => ({ type: constants.users.LOAD.FAILED, error: e }),
  clear: (errorName) => ({ type: constants.errors.CLEAR, errorName })
}

export default {
  genreAdd,
  gameAdd,
  drinkingGameAdd,
  userLogin,
  userLogout,
  usersLoad,
  errors
}
