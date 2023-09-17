const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.getAll)

router.get('/data', controller.getAll)
router.get('/data/:id', controller.getOne)
router.post('/data', controller.post)

module.exports = router;