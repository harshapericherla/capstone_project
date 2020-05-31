// const mongoose = require('mongoose');

const userJobSchema = new Schema({

    roomID : Number,
    toID : {
        type : Schema.Types.ObjectId,
        ref : 'userSchema',
    },
    fromID : {
        type : Schema.Types.ObjectId,
        ref : 'userSchema',
    },
    jobID : {
        type : Schema.Types.ObjectId,
        ref : 'jobSchema',
    },
      
      

});
// mongoose.model('',roomSchema);

