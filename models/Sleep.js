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
  timeAsleep:{
    days: Number,
    hours: Number,
    minutes: Number,
    seconds: Number
  },
  moodWhenAwake: {
    type: String,

  }
})

module.exports = mongoose.model('Sleep', sleepSchema, 'entries')
