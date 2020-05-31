// const mongoose = require('mongoose');


const jobSchema = new Schema({

    jobID : Number,
    _postedBy : {
        type : Schema.Types.ObjectId,
        ref : 'userSchema',
    },
    jobName : {
        type: String,
        required: true,
        trim: true,
      },
      jobLocation : {
        type: String,
        required: true,
        trim: true,
      },
      jobType : {
        type: String,
        required: true,
        trim: true,
      },
      jobDescription : {
        type: String,
        required: true,
        trim: true,
      },
      Roles_Responsibiltes : {
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
      },  

});

// mongoose.model('',jobSchema);

