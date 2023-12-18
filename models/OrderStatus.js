const express = require('express')
const mongoose  = require('mongoose')

const OrderStatusSchema = new mongoose.Schema({
    
    UserId:{
        type:String,
        
    },
    status:{
        type:Array
    }

});
const OrderStatus = mongoose.model("orderStatus", OrderStatusSchema);

module.exports = OrderStatus;