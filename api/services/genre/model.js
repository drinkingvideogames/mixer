const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema({
  name: { type: String, required: true }
})

GenreSchema.index({ 'name': -1, background: true })

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
