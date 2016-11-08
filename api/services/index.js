const genre = require('./genre')
const game = require('./game')

module.exports = function () {
  const app = this

  app.configure(genre)
  app.configure(game)
}
