const service = require('feathers-mongoose')
const model = require('./model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  let options = {
    Model: model,
    paginate: {
      default: 5,
      max: 25
    }
  }

  app.use('/assets', service(options))

  const assetService = app.service('assets')
  assetService.before(hooks.before)
}
