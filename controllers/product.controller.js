// const express = require('express')
const Product = require("../models/Product")



const getAllProduct = async(req,res)=>{
    
    try {
        const product = await Product.find()
        res.send(product)
    }
     catch (error) {
        res.status(500).send("Internal Server Error")
    } 
}



const getProductById = async(req,res)=>{
    try {
        const ind_product = await Product.find({_id:req.params.id})
        // console.log(ind_product)
        res.send(ind_product) 
    } 
    catch (error) {
        res.status(500).send("Internal Server Error ") 
    }
}


const getProductByTitle = async(req,res)=>{

    const Category= req.query.Category;
    const title = req.query.title;
    const queryObject = {};

    try {
        if(Category)
        {
            queryObject.Category = Category;
            console.log(queryObject)
            console.log(queryObject.Category)
        }
        if(title)
        {
            queryObject.title = {$regex: title, $options: 'i'};
            console.log(queryObject.title)
        }
    
        const myData = await Product.find(queryObject)
         res.status(200).send(myData)
    } catch (error) {
        res.status(500).send("Internal Server Error while searching")
    }

    // try {
    //     if(req.query.search)
    //      {
    //        const filterProducts = await Product.find({title:{$regex:`${req.query.search}`,$options: 'i'}})
    //        res.send(filterProducts)
    //        return ;
    //      }
    //      res.send("Search query parameter not found")
    // }

    //  catch (error) {
    //     // console.log(error)
    //     res.status(500).send("Internal Server Error while searching") 
    // }
}

module.exports = {getAllProduct,getProductById,getProductByTitle}