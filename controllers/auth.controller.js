// import utils from '../utils'

const User_Info = require('../models/User');
const jwtUtils = require('../utils')

const authVerify = async(req,res)=>{
    try {
        const token = req.body.token;
        // console.log(toc.token)
        // console.log(token)
    
        const getUserId =  jwtUtils.getUserIdFromToken(token)
        // console.log(getUserId)
    
        const data = await User_Info.findOne({_id:getUserId})
        // console.log(data)
        res.send(data)
    } catch (error) {
        console.log("internal server error")
        res.status(500).send("internal server error")
    }


}


module.exports = {authVerify}