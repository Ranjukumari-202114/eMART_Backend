const express = require("express")
const router = express.Router();

const reviewController = require('../controllers/review.controller')


router.post('', reviewController.createReview);
router.get('/:id', reviewController.getAllProductReview);


module.exports= router;
