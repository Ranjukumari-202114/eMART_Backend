const mongoose  = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Password:{
        type:String,  
    },
    Email:{
        type:String,
    }
});

const User_Info = mongoose.model("UserDetails", UserSchema);

module.exports = User_Info ;