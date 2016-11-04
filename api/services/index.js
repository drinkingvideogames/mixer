const genre = require('./genre')

module.exports = function () {
  const app = this

  app.configure(genre)
}
