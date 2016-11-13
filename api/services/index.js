const genre = require('./genre')
const game = require('./game')
const asset = require('./asset')

module.exports = function () {
  const app = this

  app.configure(genre)
  app.configure(game)
  app.configure(asset)
}
