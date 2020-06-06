const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({

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
    }
});
mongoose.model('Room',roomSchema);

