const auth = require('feathers-authentication').hooks

const before = {
  create: [
    auth.authenticate([ 'jwt', 'local' ])
  ],
  remove: [
    auth.authenticate('jwt')
  ]
}

module.exports = { before }
