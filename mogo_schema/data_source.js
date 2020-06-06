const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI,{dbName:'jobs-board'});
mongoose.connection.on('connected',() => {
    console.log('connected');
});
mongoose.connection.on("error", err => {
    console.log('disconnected');
});

require('./jobSchema');
require('./messageSchema');
require('./roomSchema');
require('./userJobSchema');
require('./userSchema');
