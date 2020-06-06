const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({

      _postedBy : {
          type : Schema.Types.ObjectId,
          ref : 'userSchema',
      },
     name : {
        type: String,
        required: true,
        trim: true,
      },
      location : {
        type: String,
        required: true,
        trim: true,
      },
      type : {
        type: String,
        required: true,
        trim: true,
      },
      description : {
        type: String,
        required: true,
        trim: true,
      },
      roles_Responsibiltes : {
        type: String,
        required: true,
        trim: true,
      },
      reviews:String,
      companyName : {
        type: String,
        required: true,
        trim: true,
      },
      companyLocation : {
        type: String,
        required: true,
        trim: true,
      }
});

mongoose.model('Job',jobSchema);

