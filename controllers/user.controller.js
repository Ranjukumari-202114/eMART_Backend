const express = require('express')
const User_Info  = require('../models/User')
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')
const jwtProvider = require('../utils')




const signup = async(req,res)=>
{
   try {
     const name = req.body.user_name;
     const email = req.body.user_email;
     const password = req.body.user_password;
    
     const isUserExist = await User_Info.findOne({Email:email});
     if(isUserExist)
     {
        return res.status(400).send({message:`User already exist with this email ${email}`})
            // throw new Error("user already exist with email:", email)
      }
 
     const salt  = await bcrypt.genSalt(10)
     const hashpassword = await bcrypt.hash(password,salt)
     
     const user_detail = await User_Info.create({
         "Name":name,
         "Email":email,
         "Password":hashpassword,
     })
     const jwt = jwtProvider.generateToken(user_detail._id);
     return res.status(200).send({jwt,message: "signup success...."});

   } catch (error) {
    // throw new Error(error.message)
    console.log(error)
    res.status(500).send({message:"Unknown error occurred"})
   }
}


const login = async(req,res)=>{
    try {
        const email = req.body.user_email;
        const password = req.body.user_password;


        const user = await User_Info.findOne({Email:email})

        if(!user)
        {
            return res.status(404).send({message: 'user not found with email :',email})
        }

        const isPasswordValid = await bcrypt.compare(password, user.Password)

        if(!isPasswordValid){
            return res.status(401).send({message: "Invalid password...."})
        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({jwt,message: "login success...."});
    }

    
    catch (error) {
        
    }
}


module.exports= {signup,login}