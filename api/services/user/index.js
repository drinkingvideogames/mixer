const service = require('feathers-mongoose')
const Mailgun = require('mailgun-js')
const model = require('./model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this

  let options = {
    Model: model,
    paginate: {
      default: 25,
      max: 25
    }
  }

  app.use('/users', service(options))
  const userService = app.service('users')
  userService.before(hooks.before)
  userService.after(hooks.after)

  userService.verify = (userId) => {
    return userService.update({ _id: userId }, { $set: { verified: true } })
  }

  userService.sendVerifyEmail = (id, email) => {
    return new Promise((resolve, reject) => {
      const settings = app.settings.mailgun
      const mailgun = new Mailgun({apiKey: settings.key, domain: settings.domain})
      const siteUrl = app.settings.siteUrl || `${app.settings.host}:${app.settings.port}`
      const data = {
        from: settings.from,
        to: email,
        subject: 'Hello from Manapot!',
        html: `
          <a href="http://${siteUrl}/verify/${id}">
            Click here to verify your account!
          </a>`
      }
      mailgun.messages().send(data, (err, body) => {
        if (err) return reject(err)
        resolve(body)
      })
    })
  }
}
