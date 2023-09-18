const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/', controller.getAll)
router.get('/', controller.getOne)
router.post('/', controller.post)
router.put('/', controller.put)
router.delete('/', controller.delete)
module.exports = router;