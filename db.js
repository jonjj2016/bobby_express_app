const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://jonmartirosyan1988:5547301988jj+-@cluster0.cdjg1.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
