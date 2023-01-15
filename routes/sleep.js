const express = require('express')
const router = express.Router()
const sleepController = require('../controllers/sleep')

router.get('/', sleepController.getSleepHist)

router.get('/:id', sleepController.getEdit)

router.post('/createSleepEntry', sleepController.createSleepEntry)

router.post('/:id', sleepController.updateEntry)

router.delete('/deleteSleepEntry', sleepController.deleteSleepEntry)

module.exports = router