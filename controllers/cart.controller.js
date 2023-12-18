
const User_Cart = require('../models/Cart')
// const Product = require('../models/Product')



const addToCart = async(req,res)=>{
    const send_data = req.body
    // console.log("this is the req gata that we got from express",req)
    // console.log("this is the send data",send_data)

    try {
        const isPresent = await User_Cart.findOne({userId:send_data.user_id,productId:send_data.product_id})

        if(!isPresent)
        {
            const cart_detail = await User_Cart.create({
                "userId":send_data.user_id,
                "productId":send_data.product_id,
                "Quantity":send_data.quantity,
            })
        }else{
           const quantity_update = await User_Cart.updateOne({"userId":send_data.user_id,"productId":send_data.product_id},{$inc:{"Quantity":send_data.quantity}}) 
            console.log("this is the updated quantity",quantity_update)
        }

        res.status(200).send("database quantity is updated sucessfully")
    }
    
    
    catch (error)
     {
        res.status(500).send("data is not store in cart") 
    }
    
};   

const removeFromCart = async(req,res)=>{
    const userId = req.body.user_id;
    const productId = req.body.product_id;


    try {
        const isPresent = await User_Cart.deleteOne({userId:userId,productId:productId}) 
        res.status(200).send("the cart data is successfully deleted")
        console.log(isPresent)
        
    } catch (error) {
        res.status(500).send("cart data is not deleted from the cart table") 
    }


}
    

 const getInfoFromCart = async(req,res)=>{

    try {
        const getCartDetailData = await User_Cart.find({userId:req.params.id})
        
        const cart_data = await User_Cart.aggregate([
            {
                $lookup:
                {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "cart_detail_info"
                }
            }
        ])
        res.status(200).send(cart_data)
         
        
        
    } catch (error) {
        res.status(500).send(" not get cart id from cart") 
    }   
};



module.exports = {addToCart,getInfoFromCart,removeFromCart}