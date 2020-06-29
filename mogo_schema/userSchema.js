const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

      name: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String
      },
      email: {
        type: String,
        required: true,
        trim: true
      },
      googleId: {
        type:String,
        default:null
      }
});
mongoose.model('User',userSchema);

