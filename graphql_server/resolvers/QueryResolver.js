const mongoose = require('mongoose');
const User = mongoose.model('User');
const Job = mongoose.model('Job');


const getJobs = async () => {
    let response;
    try{
        response = await Job.aggregate([
            
            {
                $lookup:{
                    from : "users",
                    localField:"_postedBy",
                    foreignField:"_id",
                    as:"details"
                },
        }]);

        response = response.map( (job) => {
            let user = job.details[0];
            return {
                _id: job._id,
                name:job.name,
                location:job.location,
                type:job.type,
                description:job.description,
                roles_Responsibiltes:job.roles_Responsibiltes,
                companyName:job.companyName,
                companyLocation:job.companyLocation, 
                posted_by: {
                   _id: user._id,
                   name: user.name,
                   password:user.password,
                   email:user.email                  
                }
            }
        });
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