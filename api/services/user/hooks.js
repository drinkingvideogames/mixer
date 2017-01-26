const auth = require('feathers-authentication').hooks
const local = require('feathers-authentication-local').hooks
const hooks = require('feathers-hooks-common')

const before = {
  find: [
    auth.authenticate('jwt')
  ],
  create: [
    local.hashPassword({ passwordField: 'password' })
  ]
}

const after = {
  find: [
    hooks.remove('password')
  ],
  get: [
    hooks.remove('password')
  ]
}

module.exports = { before, after }
