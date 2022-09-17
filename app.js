const express = require('express')
require('./db')

const { projectRouter } = require('./router')
const app = express()
app.use(express.json())

app.use('/projects', projectRouter)

const PORT = process.env.PORT || 3005
app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
