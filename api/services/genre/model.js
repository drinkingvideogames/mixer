const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema({
  genre: { type: String, required: true }
})

GenreSchema.index({ 'genre': -1, background: true })

const GenreModel = mongoose.model('Genre', GenreSchema)

module.exports = GenreModel
