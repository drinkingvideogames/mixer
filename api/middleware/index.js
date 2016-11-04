const handler = require('feathers-errors/handler')

module.exports = function () {
  const app = this
  app.use(handler())
}
