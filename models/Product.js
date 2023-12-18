const express = require('express')
const mongoose  = require('mongoose')



const ProductSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        // required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        
    },
    Category:{
        type:String,
        // required:true,
    },
    Rating:{
        type:Number,   
    },
    product_description:{
        type:String,
    },
    Long_description:{
        type:String,
    },
    Short_description:{
        type:String,
    }
});
const Product = mongoose.model("product", ProductSchema);

module.exports = Product ;



