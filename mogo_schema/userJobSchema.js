const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userJobSchema = new Schema({

    userJobAppliedID : Number,
    userID : Number,
    jobID : {
        type : Schema.Types.ObjectId,
        ref : 'jobSchema',
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    }
});
mongoose.model('UserJob',userJobSchema);

