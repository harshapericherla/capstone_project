const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({

      name : {
        type: String,
        required: true,
        trim: true,
      },

      _postedBy : {
          type : Schema.Types.ObjectId,
          ref : 'userSchema',
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
      roles : {
        type: Array,
        default: []
      },
      responsibilities:{
         type: Array,
         default: []
      },
      companyName : {
        type: String,
        required: true,
        trim: true,
      }
});

mongoose.model('Job',jobSchema);

