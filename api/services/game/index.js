const path = require('path')
const service = require('feathers-mongoose')
const blobService = require('feathers-blob')
const blobFs = require('fs-blob-store')
const mkdirp = require('mkdirp')
const model = require('./model')

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
      default: 25,
      max: 50
    }
  }

  const iconStorage = blobFs(directories.icons)
  const imageStorage = blobFs(directories.images)

  app.use('/games', service(options))
  const iconsService = app.use('/gameicons', blobService({ Model: iconStorage }))
  iconsService.baseUrl = '/uploads/imgs/icons/'
  const imagesService = app.use('/gameimages', blobService({ Model: imageStorage }))
  imagesService.baseUrl = '/uploads/imgs/images/'
}
