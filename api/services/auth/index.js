const hooks = require('./hooks')

module.exports = function () {
  const app = this
  const authService = app.service('authentication')
  authService.before(hooks.before)
}
