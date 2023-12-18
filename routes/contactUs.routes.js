const express = require('express')
const router = express.Router()

const contactUsController = require("../controllers/contactUs.controller")



router.post('/form',contactUsController.contactUs);



module.exports = router;