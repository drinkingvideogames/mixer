import constants from './constants'

const errors = {
  genreAdd: (e) => ({ type: constants.genre.ADD.FAILED, error: e }),
  genreUpdate: (e) => ({ type: constants.genre.UPDATE.FAILED, error: e }),
  genreDelete: (e) => ({ type: constants.genre.DELETE.FAILED, error: e }),
  gameAdd: (e) => ({ type: constants.game.ADD.FAILED, error: e }),
  gameUpdate: (e) => ({ type: constants.game.UPDATE.FAILED, error: e }),
  gameDelete: (e) => ({ type: constants.game.DELETE.FAILED, error: e }),
  userLogin: (e) => ({ type: constants.user.LOGIN.FAILED, error: e }),
  userRegister: (e) => ({ type: constants.user.REGISTER.FAILED, error: e }),
  userLogout: (e) => ({ type: constants.user.LOGOUT.FAILED, error: e }),
  userDelete: (e) => ({ type: constants.user.DELETE.FAILED, error: e }),
  usersLoad: (e) => ({ type: constants.users.LOAD.FAILED, error: e }),
  clear: (errorName) => ({ type: constants.errors.CLEAR, errorName })
}

export default errors
