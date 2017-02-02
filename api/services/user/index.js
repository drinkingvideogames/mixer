const service = require('feathers-mongoose')
const model = require('./model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  let options = {
    Model: model,
    paginate: {
      default: 25,
      max: 25
    }
  }

  app.use('/users', service(options))
  const userService = app.service('users')
  userService.before(hooks.before)
  userService.after(hooks.after)
}
