import constants from './constants'

const userLogin = (user) => ({
  type: constants.user.LOGIN.SUCCESS,
  _id: user._id,
  email: user.email,
  verified: user.verified,
  roles: user.roles
})

const userLogout = () => ({
  type: constants.user.LOGOUT.SUCCESS
})

const userDelete = () => ({
  type: constants.user.DELETE.SUCCESS
})

const usersLoad = (users) => ({
  type: constants.users.LOAD.SUCCESS,
  users
})

export default {
  login: userLogin,
  logout: userLogout,
  delete: userDelete,
  loadAll: usersLoad
}
