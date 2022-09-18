const mongoose = require('mongoose')

const { Schema } = mongoose

const projectSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
