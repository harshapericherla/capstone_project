const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUserById = async (id) => {
    let user;
    let errorObj;
    try{
        user = await User.findById({_id: id}); 
    }
    catch(error){
        errorObj = error;
    }
    return user;
}
