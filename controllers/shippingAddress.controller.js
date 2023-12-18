

const Shipping_Address =require("../models/ShippingAddress");


// const addShippingAddress = async(req,res)=>{
//     try {
        
//     } catch (error) {
//         res.status(500).send("shipping address is not receive from the user")
//     }
// }

const createOrder = async(req,res)=>{
    const shippingAddress_data = req.body; 
    // console.log(shippingAddress_data)
    


    try {
          const isPresentDetail = await Shipping_Address.findOne({userId:shippingAddress_data.user_id,FirstName:shippingAddress_data.user_firstName,LastName:shippingAddress_data.user_lastName,
            Address:shippingAddress_data.user_address,City:shippingAddress_data.user_city,State:shippingAddress_data.user_state,
            PostalCode:shippingAddress_data.user_postalCode,PhoneNumber:shippingAddress_data.user_phoneNumber})

          if(!isPresentDetail){
           
            const shipping_address = await Shipping_Address.create({
                "userId":shippingAddress_data.user_id,
                "FirstName":shippingAddress_data.user_firstName,
                "LastName":shippingAddress_data.user_lastName,
                "Address":shippingAddress_data.user_address,
                "City":shippingAddress_data.user_city,
                "State":shippingAddress_data.user_state,
                "PostalCode":shippingAddress_data.user_postalCode,
                "PhoneNumber":shippingAddress_data.user_phoneNumber,
            })
            res.send(shipping_address)
          }
          else{
              res.send("data is already exist with this detail")
          }   
        
    }
     catch (error) {
        res.status(500).send("shipping address is not receive from the user")
    }
}

const getShippingAddress = async(req,res)=>{
    //  console.log("getShipping address",req)

    try {

        const address_data = await Shipping_Address.find({userId:req.params.id})
        //  console.log(address_data)
         res.status(200).send(address_data)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("shipping address is not send to the cart")
    }
}


const getShippingIdAddress = async(req,res)=>{

    // console.log("getShippingIdAddress ",req)
    try {

        const shipping_IdDetali = await Shipping_Address.findOne({_id:req.params.id})
        
         res.status(200).send(shipping_IdDetali) 
        
    } catch (error) {
        console.log(error)
        res.status(500).send("order address is not send into the cart")
    }
}

module.exports = {createOrder,getShippingAddress,getShippingIdAddress}