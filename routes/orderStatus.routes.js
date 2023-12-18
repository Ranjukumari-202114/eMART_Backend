


const express = require('express')
const router = express.Router()

const orderStatusController = require('../controllers/orderStatus.controller')

router.post('/status',orderStatusController.addOrderStatus);
router.get('/:id',orderStatusController.getOrderStatus);


module.exports = router;