const jwt = require('jsonwebtoken');
const keys = require("../config/keys");
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = async ({req}) => {
    
       let responseObj;
       let token = req.headers.authorization;
       if(!token)
       {
           responseObj = {'error':'token not found'};
       }
       try
       {
           token = token.split(" ")[1];
           let response =  await jwt.verify(token, keys.jwtSecretKey);
           let {id} = response;
           let user = await User.findById(id);
           if(user._id)
              responseObj = user;
           else
              responseObj = {'error':'User not found'}
       }catch(error)
       {
          responseObj = {'error':'token invalid or expired'};
       }
       return {user:responseObj};
}