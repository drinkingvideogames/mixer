const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AssetSchema = new Schema({
  url: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  tags: [String],
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() }
})

const AssetModel = mongoose.model('Asset', AssetSchema)

module.exports = AssetModel
