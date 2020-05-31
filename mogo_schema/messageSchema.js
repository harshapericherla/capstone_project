// const mongoose = require('mongoose');

const messageSchema = new Schema({

    messageID : Number,
    roomID : {
        type : Schema.Types.ObjectId,
        ref : 'roomSchema',
    },
    messageContent : {
        type: String,
        trim: true,
      },
    timeStamp :{
        type: Date,
        default: Date.now, 
    },
    msg_job_user : Boolean,
});
// mongoose.model('',messageSchema);

