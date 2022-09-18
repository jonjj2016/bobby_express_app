const express = require('express')
const { findQuery, CRUD, getQuery, asyncHandler } = require('../../reqBobby')
const Project = require('../Models/Projects')

const router = express.Router()

router.get(
  '/',
  findQuery(Project),
  asyncHandler(async (req, res) => {
    res.status(200).json({ ...req.Bobby })
  }),
)
router.post('/', CRUD(Project).create)
router.get('/:id', getQuery(Project), CRUD(Project).get)
router.patch('/:id', CRUD(Project).patch)
router.delete('/:id', CRUD(Project).remove)

module.exports = router
