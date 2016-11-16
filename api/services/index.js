const genre = require('./genre')
const game = require('./game')
const asset = require('./asset')
const user = require('./user')

module.exports = function () {
  const app = this

  app.configure(genre)
  app.configure(game)
  app.configure(asset)
  app.configure(user)
}
