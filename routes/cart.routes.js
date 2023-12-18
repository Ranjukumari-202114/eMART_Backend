// import { Express } from "express";
const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cart.controller')

router.post('/',cartController.addToCart);
router.get('/:id',cartController.getInfoFromCart);
router.post('/remove',cartController.removeFromCart);



module.exports = router;

// export default router;