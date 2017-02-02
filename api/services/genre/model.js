const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() }
})

GenreSchema.index({ 'name': -1, background: true })

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
