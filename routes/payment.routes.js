const express = require('express')
const router = express.Router()

const paymentController = require("../controllers/payment.controller")


// router.get('/',paymentController.renderProductPage);
router.post('/checkout', paymentController.checkout);
router.post('/paymentVerification', paymentController.paymentVerification);


module.exports = router;