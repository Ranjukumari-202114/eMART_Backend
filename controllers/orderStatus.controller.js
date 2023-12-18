

const Order_Status =require("../models/OrderStatus");


const addOrderStatus = async(req,res)=>{

    try {
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}

const placeOrder = async(req,res)=>{

    try {
        const order = await findOrderById(orderId);

        order.orderStatus = "PLACED";
        order.paymentDetails.status = "COMPLETED";
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}


const confirmedOrder = async(req,res)=>{

    try {
        const order = await findOrderById(orderId);

        order.orderStatus = "CONFIRMED";
        
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}

const shippedOrder = async(req,res)=>{

    try {
        const order = await findOrderById(orderId);

        order.orderStatus = "SHIPPED";
        
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}


const deliverOrder = async(req,res)=>{

    try {
        const order = await findOrderById(orderId);

        order.orderStatus = "DELIVERED";
        
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}

const cancelOrder = async(req,res)=>{

    try {
        const order = await findOrderById(orderId);

        order.orderStatus = "CANCELLED";
        return res.status("").send("")
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }
}


const getOrderStatus = async(req,res)=>{

    try {
        
    } catch (error) {
       res.send("fjkdfkdjfkdfdkjfdfkdjfdjkjfjdk") 
    }

}



module.exports = {addOrderStatus,getOrderStatus}