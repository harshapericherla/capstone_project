const mongoose = require('mongoose');
const Job = mongoose.model('Job');

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

