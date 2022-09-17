const express = require('express')
require('./db')
const {
  handleErrors: { notFound, errorHandler },
} = require('../reqBobby')
const { projectRouter } = require('./router')
const app = express()
app.use(express.json())

app.use('/projects', projectRouter)

app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
