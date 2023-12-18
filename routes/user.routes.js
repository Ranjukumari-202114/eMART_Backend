const express = require("express")
const router = express.Router();

const userController = require('../controllers/user.controller')

// router.get('/test',(req,res)=>res.send("sffdasd"))
router.post('/signup',userController.signup);
router.post('/login',userController.login);

module.exports= router;