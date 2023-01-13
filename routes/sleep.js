const express = require('express')
const router = express.Router()
const sleepController = require('../controllers/sleep')

router.get('/', sleepController.getSleepHist)

router.post('/createSleepEntry', sleepController.createSleepEntry)

router.put('/markComplete', sleepController.markComplete)

router.put('/markIncomplete', sleepController.markIncomplete)

router.delete('/deleteSleepEntry', sleepController.deleteSleepEntry)

module.exports = router