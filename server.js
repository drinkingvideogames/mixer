const path = require('path')
const feathers = require('feathers')
const configuration = require('feathers-configuration')
const hooks = require('feathers-hooks')
const rest = require('feathers-rest')
const socketio = require('feathers-socketio')
const auth = require('feathers-authentication')
const local = require('feathers-authentication-local')
const jwt = require('feathers-authentication-jwt')
const mongoose = require('mongoose')
const compression = require('compression')
const favicon = require('serve-favicon')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const dotenv = require('dotenv')
const services = require('./api/services')
const middleware = require('./api/middleware')

dotenv.load()

mongoose.Promise = global.Promise

mongoose.connect(`${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/${process.env.MONGO_DB_NAME}`)

const app = feathers()

app.configure(configuration(path.join(__dirname, '..')))

app.set('mailgun',
  { key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    from: process.env.MAILGUN_FROM
  })

if (process.env.SITE_URL) {
  app.set('siteUrl', process.env.SITE_URL)
}

let port = process.env.PORT || 4242
let env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  const webpackBundler = require('./lib/middleware/webpack-bundler-middleware')
  app.use(webpackBundler())
  app.use(logger('dev'))
}

app.use(compression())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', feathers.static(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(auth({ secret: process.env.AUTH_SECRET }))
  .configure(local())
  .configure(jwt())
  .configure(services)
  .configure(middleware)

app.get('/verify/:userId', (req, res) => {
  if (req.params.userId) {
    app.service('users').verify(req.params.userId)
      .then(() => {
        return res.redirect('/')
      })
      .catch((e) => {
        console.error('Error verifying', e)
      })
  } else {
    console.error('No userId to verify')
  }
})

app.get('*', (req, res) => {
  return res.sendFile(path.join(app.get('public'), 'index.html'))
})

app.listen(port, () => {
  console.log(`NODE_ENV ${app.get('host')} on ${port}`)
})
