const mongoose = require('mongoose');
const User = mongoose.model('User');
const {createJWTToken} = require("../../auth/authMethods"); 

exports.registerUser = async (name,password,email) => {
   
    try
    {
       let user;
       user = await User.findOne({email});
       if(!user)
       {
            user = await new User({name,password,email}).save();
            if(user)
            {
                return user;
            }
       }
       else
       {
           return {};
       }
    }catch(error)
    {
       console.log(error);
    }
}

exports.loginUser = async (password,email) => {
   
    try
    {
       let user;
       user = await User.findOne({email,password,googleId:null});
       console.log(user);
       if(user)
       {
           return createJWTToken(user._id);
       }
       else
       {
           return "";
       }
    }catch(error)
    {
       console.log(error);
    }
}