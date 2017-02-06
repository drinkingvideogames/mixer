const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userRoles = [
  'superadmin',
  'admin',
  'user'
]

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  roles: {
    type: [String],
    default: [ 'user' ],
    validate: {
      validator: (v) => [v].filter((e) => !userRoles.includes(e)).length > 0,
      message: `{VALUE} contains invalid user roles, user roles can only be ${userRoles.join(', ')}`
    }
  }
})

UserSchema.index({ 'email': -1, background: true })

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
