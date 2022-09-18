const express = require('express')
const User = require('../Models/User')
const { findQuery, CRUD, getQuery } = require('../../reqBobby')

const router = express.Router()

router.get('/', findQuery(User), CRUD(User).find)
router.post('/', CRUD(User).create)
router.get('/:id', getQuery(User), CRUD(User).get)
router.patch('/:id', CRUD(User).patch)
router.delete('/:id', CRUD(User).remove)

module.exports = router
