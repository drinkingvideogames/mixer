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
  ],
  create: [
    sendEmailVerify()
  ]
}

function sendEmailVerify () {
  return (hook) => {
    return new Promise((resolve, reject) => {
      hook.app.service('users').sendVerifyEmail(hook.result._id, hook.result.email)
        .then(() => {
          resolve(hook)
        }, reject)
    })
  }
}

module.exports = { before, after }
