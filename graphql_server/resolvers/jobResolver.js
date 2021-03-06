const mongoose = require('mongoose');
const Job = mongoose.model('Job');
const UserJob = mongoose.model('UserJob');

exports.getJobs = async (pageNum,pageLimit,searchTxt,searchLocation) => {
    let searchObj = {}
    let jobs;
    let errorObj;
    let count,pages;
    try{
        let searchLocOr = [];
        let searchOr = [];
        if(searchLocation && searchLocation.length > 0)
        {
            searchLocOr.push({"location":  {$regex:`^.*${searchLocation.toLowerCase()}.*$`,$options:'i'}})
        }
        if(searchTxt && searchTxt.length > 0)
        {
            searchOr.push({"name":  {$regex:`^.*${searchTxt.toLowerCase()}.*$`,$options:'i'}});
            searchOr.push({"companyName":  {$regex:`^.*${searchTxt.toLowerCase()}.*$`,$options:'i'}});
        }

        if(searchLocOr.length > 0 && searchOr.length > 0)
        {
            searchObj = {
                $and: [
                    {$or: searchOr},
                    {$or: searchLocOr}
                ]
            }
        }
        else if(searchLocOr.length > 0)
        {
            searchObj = {
                $or: searchLocOr
            }
        }
        else if(searchOr.length > 0)
        {
            searchObj = {
                $or: searchOr
            }
        }

        jobs = await Job.find(searchObj,null,{limit:pageLimit,skip:(pageNum - 1) * pageLimit});
        
        count = await Job.countDocuments(searchObj);
        pages = Math.ceil(count / pageLimit);
    }
    catch(error){
        console.log(error);
        errorObj = error;
    }
    return {jobs,pages};
}


exports.createJob = async ({name,location,type,description,companyName,roles,responsibilities},user) => {

    let rolesArr = roles.split(";");
    let responsibilitiesArr = responsibilities.split(";");
    try{
        let postedDate = new Date().toISOString();
        let job = new Job({name,_postedBy:user._id,location,type,description,companyName,roles:rolesArr,responsibilities:responsibilitiesArr,postedDate:postedDate});
        await job.save();
    }
    catch(error){
        errorObj = error;
    }
}

exports.createUserJob = async (dir,userId,jobId) => {
    try{
        let appliedDate = new Date().toISOString();
        let userJob = new UserJob({userID:userId,jobID:jobId,resumeLink:dir,appliedDate:appliedDate});
        await userJob.save();
    }
    catch(error){
        console.log(error);
        errorObj = error;
    }
}

exports.checkIfJobApplied = async (userID,jobID) => {
    let userJobArr = [];
    try{
        userJobArr = await UserJob.find({userID,jobID});
    }
    catch(error){
        console.log(error);
        errorObj = error;
    }
    return userJobArr;
}

exports.getJobById = async (id) => {
    let job;
    let errorObj;
    try{
        job = await Job.findById({_id: id}); 
    }
    catch(error){
        errorObj = error;
    }
    return job;
}

exports.getUserAppliedJobs = async (userID) => {
    let userAppliedJobs = [];
    try{
        userAppliedJobs = await UserJob.find({userID});
    }catch(error){
        console.log(error);
    }
    return userAppliedJobs;
}

exports.getPostedJobUsers = async (jobID) => {
    let postedUserJobs = [];
    try{
        postedUserJobs = await UserJob.find({jobID});
    }catch(error){
        console.log(error);
    }
    return postedUserJobs
}

exports.getUserPostedJobs = async (userID) => {
    let userPostedJobs = [];
    try{
        userPostedJobs = await Job.find({_postedBy:userID});
    }catch(error){
        console.log(error);
    }
    return userPostedJobs;
}


