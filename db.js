const express = require('express')
const mongoose  = require('mongoose')
const Product = require("./models/Product")

const app = express()

const url = 'mongodb://127.0.0.1:27017/ecommerce1';
mongoose.connect(url)
.then(()=> {
    console.log("Connected to Database")
    app.listen(3000,()=>{console.log("Listening on port 3000")})
})
.catch((err)=> console.log(err))


// curd operation using the async and await-----------
//create the document into the collection

// async function insert()
// {
//   const user =  await Product.create({
//         title:"my book shop",
//         Description:"dfnskljfe",
//         Caregory:"men",
//         Rating:9,
        
//      })
//      console.log(user)
// }
// insert()


// find/read the document from the database

async function run(){
   const user = await Product.insertMany(
//    updateMany({ } ,{$set:{"Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."}}
    // [
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-400x400.jpg",
    //         "title":"DNK Yellow Shoes",
    //         "Category": "Men",
    //         "price":2738,
    //         "Rating":6,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //          "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //           "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe2-300x300.jpg",
    //         "title":"DNK Blue Shoes",
    //         "Category": "Men",
    //         "price":8773,
    //         "Rating":8,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-m-jeans1.jpg",
    //         "title":"Dark Brown Jeans",
    //         "Category": "Men",
    //         "price":8738,
    //         "Rating":4,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans2-400x400.jpg",
    //         "title":"Blue Denim Jeans",
    //         "Category": "Women",
    //         "price":6738,
    //         "Rating":6,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans4-400x400.jpg",
    //         "title":"Basic Gray Jeans",
    //         "Category": "Women",
    //         "price":738,
    //         "Rating":9,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-w-jeans1-400x400.jpg",
    //         "title":"Blue Denim Shorts",
    //         "Category": "Women",
    //         "price":738,
    //         "Rating":3,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory2-400x400.jpg",
    //         "title":"Anchor Bracelet",
    //         "Category": "Accessories",
    //         "price":348,
    //         "Rating":7,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-accessory1-300x300.jpg",
    //         "title":"Boho Bangle Bracelet",
    //         "Category": "Accessories",
    //         "price":4738,
    //         "Rating":5,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag1-400x400.jpg",
    //         "title":"Light Brown Purse",
    //         "Category": "Accessories",
    //         "price":3438,
    //         "Rating":2,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    
    //     {
    //         "imageUrl":"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-bag3.jpg",
    //         "title":"Bright Red Bag",
    //         "Category": "Accessories",
    //         "price":4476,
    //         "Rating":8,
    //         "product_description" : "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent perconubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.",
    //         "Short_description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    //         "Long_description":"Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    //     },
    
    // ]
    
   )
   console.log(user)
   
}
run()


//delete operation  from mongoose

// async function run(){
//     const user = await Product.deleteOne({_id:'654f583b09adfa6e91ef6f3a'})
//     console.log(user)
//  }
//  run()

// //update operation  from mongoose
// async function run(){
//     const user = await Product.updateOne({_id:'654f596cb64f133f844df346'},{title:"the ranju book shop"},{
//         Description:"the good product"})
//     console.log(user)
//  }
//  run()

//    async function run(){
//         const user = await Product.find({_id:'6553502323713aa6c591b83c'},{
//             Description:"the good product"})
//         console.log(user)
//      }
//      run()



//     .then((Product)=> {
//       console.log(Product);
//     })
//     .catch( (error) =>{
//       console.log(error);
//     });



// async function create(){
//     const data = new Product({
//         title:"my book collection",
//         Description:"zmbxnzjksfdk",
//         Caregory:"women",
//         Rating:4,
//     })
//     await data.save()
//     console.log(data)
// }
// create()










