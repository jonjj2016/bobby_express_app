const express = require('express')
const { findQuery } = require('../../reqBobby')
const Project = require('../Models/Projects')

const router = express.Router()

router.get('/', findQuery(Project), (req, res) => {
  res.status(200).json(req.Bobby)
})
module.exports = router
