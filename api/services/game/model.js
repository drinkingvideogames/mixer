const mongoose = require('mongoose')
const mongooseHistory = require('mongoose-history')
const Schema = mongoose.Schema

const GameSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  url: { type: String, required: true },
  imageUrl: { type: String },
  iconImageUrl: { type: String },
  genreId: { type: String }
})

GameSchema.index({ 'name': -1, background: true })

GameSchema.plugin(mongooseHistory)

const GameModel = mongoose.model('Game', GameSchema)

module.exports = GameModel
