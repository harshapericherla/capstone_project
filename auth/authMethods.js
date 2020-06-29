const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = mongoose.model("User");

const checkIfGoogleIdExists = async (profile) => {
     
     let token = "";
     try{      
        let user = await User.findOne({googleId:profile.id});
        if(!user)
        {
            const {name,email} = profile._json;
            user = await new User({name,email,googleId:profile.id}).save();
        }
        token = createJWTToken(user._id);
     }catch(error)
     {
         console.log(error);
     }
    return token;
}

const createJWTToken = async (id) => {
   return jwt.sign({id},keys.jwtSecretKey,{expiresIn: 86400});
}

module.exports = {
    checkIfGoogleIdExists,
    createJWTToken
}