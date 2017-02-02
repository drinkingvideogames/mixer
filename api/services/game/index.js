const path = require('path')
const service = require('feathers-mongoose')
const blobService = require('feathers-blob')
const blobFs = require('fs-blob-store')
const mkdirp = require('mkdirp')
const model = require('./model')
const hooks = require('./hooks')

module.exports = function () {
  const app = this
  const imgUploadsDir = path.join(__dirname, '..', '..', '..', 'public', 'uploads', 'imgs')
  const directories = {
    icons: path.join(imgUploadsDir, 'icons'),
    images: path.join(imgUploadsDir, 'images')
  }

  mkdirp.sync(directories.icons)
  mkdirp.sync(directories.images)

  const options = {
    Model: model,
    paginate: {
      default: 50,
      max: 50
    }
  }

  const iconStorage = blobFs(directories.icons)
  const imageStorage = blobFs(directories.images)

  app.use('/games', service(options))

  const gamesService = app.service('games')
  gamesService.before(hooks.gameHooks.before)

  app.use('/gameicons', blobService({ Model: iconStorage }))

  const iconsService = app.service('gameicons')
  iconsService.baseUrl = '/uploads/imgs/icons/'
  iconsService.after(hooks.iconHooks.after)

  app.use('/gameimages', blobService({ Model: imageStorage }))

  const imagesService = app.service('gameimages')
  imagesService.baseUrl = '/uploads/imgs/images/'
  imagesService.after(hooks.imageHooks.after)
}
