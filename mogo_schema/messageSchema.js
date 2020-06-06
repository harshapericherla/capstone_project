const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({

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
mongoose.model('Message',messageSchema);

