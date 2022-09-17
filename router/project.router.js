const express = require('express')
const { findQuery, CRUD, getQuery } = require('../../reqBobby')
const Project = require('../Models/Projects')

const router = express.Router()

router.get('/', findQuery(Project), CRUD(Project).find)
router.post('/', CRUD(Project).create)
router.get('/:id', getQuery(Project), CRUD(Project).get)
router.patch('/:id', CRUD(Project).patch)
router.delete('/:id', CRUD(Project).remove)

module.exports = router
