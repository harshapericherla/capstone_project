const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userJobSchema = new Schema({
    userID : {
      type : Schema.Types.ObjectId,
      ref : 'userSchema',
    },
    jobID : {
        type : Schema.Types.ObjectId,
        ref : 'jobSchema',
    },
    resumeLink:{
      type: String,
      required: true
    },
    appliedDate : {
      type: String,
      require: true
    }
});
mongoose.model('UserJob',userJobSchema);

