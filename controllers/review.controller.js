
const User_Review =require("../models/Review");



const createReview = async(req,res )=>
{
    const review_data= req.body;
    console.log(review_data)

    
    try {
        const isPresent = await User_Review.findOne({userId:review_data.user_id,productId:review_data.product_id})
        //  const review = await User_Review.find()
        if(!isPresent)
        {
            const product_review = await User_Review.create({
                "userId":review_data.user_id,
                "productId":review_data.product_id,
                "Rating":review_data.reviewer_rating,
                "Message":review_data.reviewer_message,
            })
        }
        else{
            const update_review = await User_Review.updateOne({"userId":review_data.user_id,"productId":review_data.product_id},{$set:{"Rating":review_data.reviewer_rating,"Message":review_data.reviewer_message}})
            console.log("this is the updated quantity",update_review)
        }
        res.status(200).send("review is addedd/updated sucessfully")
    }
     catch (error) {
        res.status(500).send("review is not added in the database")
    }
};

const getAllProductReview = async(req,res )=>
{
    // console.log(req)
    // const productId = req.body.product_id;
    try {
         const reviews = await User_Review.find({productId:req.params.id})

         res.status(200).send(reviews)
    }
     catch (error) {
        res.status(500).send("review is not send to the user")
    }
};


module.exports = {createReview,getAllProductReview}
