const { ObjectId } = require('mongodb');
const mongoose  = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
    },
    productId:{
        type:ObjectId,  
    },
    Quantity:{
        type:Number,
    }
});

const User_Cart = mongoose.model("Cart", CartSchema);

module.exports = User_Cart;