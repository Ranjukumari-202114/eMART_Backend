


const express = require('express')
const router = express.Router()

const shippingAddresstController = require('../controllers/shippingAddress.controller')

router.post('/address',shippingAddresstController.createOrder);
router.get('/individual/:id',shippingAddresstController.getShippingIdAddress);
router.get('/:id',shippingAddresstController.getShippingAddress);


module.exports = router;