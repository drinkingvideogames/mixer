const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

UserSchema.index({ 'email': -1, background: true })

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
