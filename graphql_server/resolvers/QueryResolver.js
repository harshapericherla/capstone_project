const mongoose = require('mongoose');
const User = mongoose.model('User');
const Job = mongoose.model('Job');


const getJobs = async () => {
    let response;
    try{
        response = await Job.find({});
    }
    catch(error){
        response = error;
    }
    return callPromise(response);
}


const callPromise = (data,err) => {
     return new Promise((resolve,reject) => {
            if(err)
                reject(err);
            else
                resolve(data);
     });
}

module.exports = {
    getJobs
}