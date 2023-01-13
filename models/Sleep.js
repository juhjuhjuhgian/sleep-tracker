const mongoose = require('mongoose')

const sleepSchema = new mongoose.Schema({

  troubleFalling:{
    type: String,

  },
  sleepTime: {
    type: Date,

  },
  wakeTime: {
    type: Date,

  },
  moodWhenAwake: {
    type: String,

  }
})

module.exports = mongoose.model('Sleep', sleepSchema, 'entries')
