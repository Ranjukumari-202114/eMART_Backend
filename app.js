const express = require('express')
const mongoose  = require('mongoose')
const cors = require('cors');
require('dotenv').config()
const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use("/public",express.static("./images"))


const url = 'mongodb://127.0.0.1:27017/ecommerce1';
mongoose.connect(url)
.then(()=> {
    console.log("Connected to Database")
    app.listen(5000,()=>{console.log("Listening on port 5000")})
})
.catch((err)=> console.log(err))







const userRoute = require('./routes/user.routes')
app.use('/user',userRoute)


const productRoute = require('./routes/product.routes')
app.use('/product',productRoute)


const authRoute = require('./routes/auth.routes')
app.use('/auth',authRoute )


const cartRoute = require('./routes/cart.routes')
app.use('/cart',cartRoute)

const reviewRoute = require('./routes/review.routes')
app.use('/review',reviewRoute )

const shippingAddressRoute = require('./routes/shippingAddress.routes')
app.use('/shipping',shippingAddressRoute)


const orderStatusRoute = require('./routes/orderStatus.routes')
app.use('/order',orderStatusRoute)


const paymentRoute = require('./routes/payment.routes')
app.use('/payment',paymentRoute)


const contactUsRoute = require('./routes/contactUs.routes')
app.use('/contact',contactUsRoute) 


app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_ID_KEY })
);



















// app.get('/',(req,res)=>{
//     res.send("my name is ranju")
// });

// app.get('/product',(req,res)=>{
//     res.send("this is my product page")
// });

// app.get('/:id',(req,res)=>{
    
//     res.send(`the id is ${req.params.id}`);
//     res.send("this is my individual id product ")
// });

// app.get('*',(req,res)=>{
//     res.redirect("/")
// });


//search all the product
// app.get('/products',async (req,res)=>{
//    const product = await Product.find()
//    res.send(product) 
// })


//search product with id
// app.get('/product/:id',async(req,res)=>{
//     const ind_product = await Product.find({_id:req.params.id})
//     res.send(ind_product) 
//     // ${req.params.id}
//  })

// http://loacalhost:3000/products?search=cloth


//search product with title
//  app.get('/product', async(req,res)=>{
//      if(req.query.search)
//      {
//        const filterProducts = await Product.find({title:{$regex:`${req.query.search}`,$options: 'i'}})
//        res.send(filterProducts)
//        return ;
//      }
//      res.send("Search query parameter not found")
//  });


 //route for signup
//  app.post('/signup', async (req,res)=>{
    
//     const name = req.body.user_name;
//     const email = req.body.user_email;
//     const password = req.body.user_password;
   

//     const salt  = await bcrypt.genSalt(10)
//     const hashpassword = await bcrypt.hash(password,salt)
    
//     const user_detail = await User_Info.create({
//         "Name":name,
//         "Email":email,
//         "Password":hashpassword,
//     })
//     res.send(user_detail)
    
//  });


 //route for signup
//  app.post('/login', async(req,res)=>{

//     const email = req.body.user_email;
//     // console.log(email)
//     // console.log(req.body)
//     const password = req.body.user_password;

//     const user = await User_Info.findOne({"Email":email})
//     // console.log(user)
//     const pass_compare = await bcrypt.compare(password, user.Password)
//     res.send(pass_compare)
//  })