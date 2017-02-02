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

  app.use('/genres', service(options))

  const genreService = app.service('genres')
  genreService.before(hooks.before)
}
