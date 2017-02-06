const auth = require('feathers-authentication').hooks
const local = require('feathers-authentication-local').hooks
const hooks = require('feathers-hooks-common')

const before = {
  find: [
    auth.authenticate('jwt')
  ],
  create: [
    local.hashPassword({ passwordField: 'password' }),
    superAdminCreate()
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

/*! TODO: Replace this with something better */
function superAdminCreate () {
  return (hook) => {
    if (hook.app.get('superAdminEmails').includes(hook.data.email)) {
      hook.data.roles = [ 'superadmin', 'admin', 'user' ]
    }
    return Promise.resolve(hook)
  }
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
