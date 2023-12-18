const mongoose  = require('mongoose')

const UserReview = new mongoose.Schema({
    userId:{
        type:String,
    },
    productId:{
      type:String,
    },
    Rating:{
        type:Number,  
    },
    Message:{
        type:String,
    }
});

const User_Review = mongoose.model("Review", UserReview);

module.exports = User_Review;