// const mongoose = require('mongoose');

const userSchema = new Schema({

    userID : Number,
    userName : {
        type: String,
        required: true,
        trim: true,
      },
      password : {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      }
      

});
// mongoose.model('',userSchema);

