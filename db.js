const mongoose = require('mongoose')

mongoose.connect(process.env.REACT_APP_MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
