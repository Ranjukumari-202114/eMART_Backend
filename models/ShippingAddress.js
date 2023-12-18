const express = require('express')
const mongoose  = require('mongoose')

const ShippingAddressSchema = new mongoose.Schema({
    
    userId:{
        type:mongoose.Types.ObjectId,
        
    },
    FirstName:{
        type:String,
        
    },
    LastName:{
        type:String,
        // required:true,
    },
    Address:{
        type:String,   
    },
    City:{
        type:String,
    },
    State:{
        type:String,
    },
    PostalCode:{
        type:Number,
    },
    PhoneNumber:{
        type:Number,
    },

});
const ShippingAddress = mongoose.model("shippingAddress", ShippingAddressSchema);

module.exports =  ShippingAddress;