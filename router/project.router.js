const express = require('express')
const { findQuery, CRUD } = require('../../reqBobby')
const Project = require('../Models/Projects')

const router = express.Router()

router.get('/', findQuery(Project), CRUD(Project).find)
module.exports = router
