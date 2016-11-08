const service = require('feathers-mongoose')
const model = require('./model')

module.exports = function () {
  const app = this

  let options = {
    Model: model,
    paginate: {
      default: 5,
      max: 25
    }
  }

  app.use('/games', service(options))
}
