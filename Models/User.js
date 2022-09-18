const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema(
  {
    firsName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)

module.exports = User
